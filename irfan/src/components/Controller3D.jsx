import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Controller3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group for Xbox Controller
    const controllerGroup = new THREE.Group();
    scene.add(controllerGroup);

    // --- Generate Xbox Controller Point Cloud ---
    const pointsList = [];

    // Helper: Add points in circle
    const addCirclePoints = (cx, cy, cz, radius, count, zVariance = 0.2) => {
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const r = radius * (0.8 + Math.random() * 0.4);
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        const z = cz + (Math.random() - 0.5) * zVariance;
        pointsList.push(new THREE.Vector3(x, y, z));
      }
    };

    // Helper: Add points in box volume
    const addBoxVolumePoints = (cx, cy, cz, w, h, d, count) => {
      for (let i = 0; i < count; i++) {
        const x = cx + (Math.random() - 0.5) * w;
        const y = cy + (Math.random() - 0.5) * h;
        const z = cz + (Math.random() - 0.5) * d;
        pointsList.push(new THREE.Vector3(x, y, z));
      }
    };

    // 1. Xbox Main Body Outer Shell Points
    for (let t = 0; t <= Math.PI * 2; t += 0.04) {
      // Parametric Xbox controller silhouette shape
      const rx = 3.6 * Math.sin(t);
      let ry = 1.8 * Math.cos(t);
      if (t > Math.PI * 0.2 && t < Math.PI * 0.8) {
        // Bottom indentation curve between handles
        ry += Math.sin((t - Math.PI * 0.2) / 0.6 * Math.PI) * 0.7;
      }
      const rz = (Math.random() - 0.5) * 0.6;
      pointsList.push(new THREE.Vector3(rx, ry, rz));
    }

    // 2. Left and Right Handle Grips (Volume Points)
    // Left Handle
    for (let i = 0; i < 180; i++) {
      const u = Math.random();
      const x = -2.8 + u * 1.5 + (Math.random() - 0.5) * 0.4;
      const y = -1.8 + (1 - u) * 1.6 + (Math.random() - 0.5) * 0.4;
      const z = (Math.random() - 0.5) * 0.8;
      pointsList.push(new THREE.Vector3(x, y, z));
    }
    // Right Handle
    for (let i = 0; i < 180; i++) {
      const u = Math.random();
      const x = 1.3 + u * 1.5 + (Math.random() - 0.5) * 0.4;
      const y = -0.2 - u * 1.6 + (Math.random() - 0.5) * 0.4;
      const z = (Math.random() - 0.5) * 0.8;
      pointsList.push(new THREE.Vector3(x, y, z));
    }

    // 3. Central Bridge & Top Bumpers
    addBoxVolumePoints(0, 0.2, 0, 3.2, 1.4, 0.6, 200); // Center body fill
    addBoxVolumePoints(0, 1.25, 0.1, 3.8, 0.4, 0.5, 90); // Top triggers line

    // 4. Xbox Asymmetric Thumbsticks & Controls
    // Xbox Left Stick (Higher up: -1.3, 0.45)
    addCirclePoints(-1.35, 0.45, 0.4, 0.65, 45, 0.3);
    addCirclePoints(-1.35, 0.45, 0.55, 0.35, 25, 0.1);

    // Xbox Right Stick (Lower down: 1.05, -0.45)
    addCirclePoints(1.05, -0.45, 0.4, 0.65, 45, 0.3);
    addCirclePoints(1.05, -0.45, 0.55, 0.35, 25, 0.1);

    // Xbox D-Pad Cross (Lower left: -1.05, -0.45)
    addBoxVolumePoints(-1.05, -0.45, 0.45, 0.9, 0.3, 0.2, 35);
    addBoxVolumePoints(-1.05, -0.45, 0.45, 0.3, 0.9, 0.2, 35);

    // Xbox ABXY Buttons Diamond Layout (Higher right: 1.35, 0.45)
    addCirclePoints(1.35, 0.85, 0.45, 0.22, 16, 0.1); // Y (Top)
    addCirclePoints(1.35, 0.05, 0.45, 0.22, 16, 0.1); // A (Bottom)
    addCirclePoints(0.95, 0.45, 0.45, 0.22, 16, 0.1); // X (Left)
    addCirclePoints(1.75, 0.45, 0.45, 0.22, 16, 0.1); // B (Right)

    // Center Xbox Guide Sphere Logo (0, 0.7)
    addCirclePoints(0, 0.7, 0.45, 0.42, 35, 0.2);

    // --- Build Particle Point Cloud System ---
    const numPoints = pointsList.length;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);
    const originalPositions = [];

    // Colors: Futuristic soft purple (#a855f7) and soft pink (#ec4899) gradient
    const color1 = new THREE.Color(0xa855f7); // Soft Purple
    const color2 = new THREE.Color(0xec4899); // Soft Pink
    const color3 = new THREE.Color(0x38bdf8); // Light Cyan highlight

    for (let i = 0; i < numPoints; i++) {
      const p = pointsList[i];
      originalPositions.push(p.clone());

      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;

      // Color interpolation based on position
      const ratio = (p.x + 3) / 6;
      const mixedColor = color1.clone().lerp(color2, Math.min(1, Math.max(0, ratio)));
      
      // Accent highlights for center and controls
      if (Math.hypot(p.x - 0, p.y - 0.7) < 0.5 || Math.hypot(p.x - 1.35, p.y - 0.45) < 0.3) {
        mixedColor.lerp(color3, 0.6);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for Soft Glowing Circular Dots
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(236, 72, 153, 0.8)');
      gradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.3)');
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const pointMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      map: createParticleTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending, // Soft subtle blending for light background
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
    controllerGroup.add(pointCloud);

    // --- Build Neural Network Constellation Lines ---
    const linePositions = [];
    const lineColors = [];
    const connectionDistanceThreshold = 0.85; // Distance threshold for drawing line connection

    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dist = pointsList[i].distanceTo(pointsList[j]);
        if (dist < connectionDistanceThreshold) {
          linePositions.push(pointsList[i].x, pointsList[i].y, pointsList[i].z);
          linePositions.push(pointsList[j].x, pointsList[j].y, pointsList[j].z);

          // Line color gradient
          const c1 = new THREE.Color(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
          const c2 = new THREE.Color(colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2]);

          lineColors.push(c1.r, c1.g, c1.b);
          lineColors.push(c2.r, c2.g, c2.b);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      linewidth: 1,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    controllerGroup.add(lineMesh);

    // Adjust position to sit subtly in background
    controllerGroup.position.set(2.2, 0, 0);

    // --- Mouse Parallax & Dynamic Floating ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // --- Animation Loop ---
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.012;

      // Smooth interpolation (lerp)
      targetX += (mouseX - targetX) * 0.035;
      targetY += (mouseY - targetY) * 0.035;

      // Controller Rotation & Subtle Floating
      controllerGroup.rotation.y = targetX * 0.45 + Math.sin(time * 0.6) * 0.08 - 0.15;
      controllerGroup.rotation.x = -targetY * 0.3 + Math.cos(time * 0.5) * 0.06 + 0.1;
      controllerGroup.rotation.z = Math.sin(time * 0.4) * 0.04;

      controllerGroup.position.y = Math.sin(time * 0.9) * 0.18;

      // Gentle wave animation on individual particles for neural breathing effect
      const posAttr = pointGeometry.attributes.position;
      for (let i = 0; i < numPoints; i++) {
        const orig = originalPositions[i];
        const wave = Math.sin(time * 2 + orig.x * 2 + orig.y * 2) * 0.03;
        posAttr.setZ(i, orig.z + wave);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.9
      }}
    />
  );
}
