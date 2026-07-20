// Configuration file for the Webinar Landing Page
// Edit this file to customize the content, dates, and details.
import hostPhoto from './assets/host_photo.jpg';

export const CONFIG = {
  webinar: {
    title: "from GAMER to PROGRAMMER",
    subtitle: "Hear my story first. I started learning full-stack coding just 2 months ago with zero background. Let me share what the first 60 days are really like completely unfiltered.",
    ctaText: "Reserve My Free Seat",
    subCtaText: "(yes, actually free - seats really are limited)",
    badge: "Free Online Webinar",
    date: "TBD",
    time: "TBD",
    timeSub: "(Online Live Session)",
    venue: "ONLINE",
    address: "Hosted via Google Meet. The entry link and calendar invite will be sent directly to your registered contact.",
    googleMapsUrl: "https://calendar.google.com",
    whatsAppCommunityUrl: "https://chat.whatsapp.com/KEmf1JV8UPxEkKMrEikXRf?mode=gi_t",
    phone: "+91 98857 63040",
    email: "irfan.ahmed.4764@gmail.com",
    footerText: "© 2026 Irfan"
  },
  host: {
    name: "Mohammed Irfan Ahmed",
    avatar: hostPhoto, // default premium avatar
    role: "Full-Stack Developer",
    bio: "I was a full-time gamer spending hours a day before I decided to drop the games and learn full-stack. Having experienced the confusion of shifting from screens to code first-hand, I built this webinar to show you the exact, practical roadmap I used to go from a player to a programmer in just 60 days.",
    highlights: [
      "Started learning full-stack 2 months ago",
      "Fresh perspective on the easiest ways to start coding",
      "Passionate about making tech approachable for absolute beginners"
    ],
    socials: {
      github: "https://github.com/irfan-2",
      linkedin: "https://www.linkedin.com/in/irfan-ahmed-5b771439b/",
      instagram: "https://www.instagram.com/irfan.codes/"
    }
  },
  painPoints: [
    {
      sender: "PG",
      senderName: "Where do I even start? HTML? Python? AI?",
      subtitle: "you, and 214 others",
      text: "There are 100 different languages and 1000 different opinions on LinkedIn.",
      subText: "Trying to choose your first tutorial feels like choosing a college major all over again. You spend more time researching how to learn than actually writing code.",
      time: "11:47 PM"
    },
    {
      sender: "ME",
      senderName: "Is coding actually for me? Or am I not smart enough?",
      text: "You open a basic JavaScript course, look at some loops, get an error, and immediately feel like you need a Math PhD just to build a simple webpage.",
      time: "12:03 AM"
    },
    {
      sender: "ME",
      senderName: "The 'Tutorial Purgatory' trap.",
      text: "You watch a 10-hour video, code along, and feel like a genius. But the moment you close the video and try to code on a blank editor, your mind goes completely blank.",
      time: "12:19 AM"
    },
    {
      sender: "ME",
      senderName: "Getting overwhelmed by framework noise.",
      text: "React, Next.js, Node, SQL, NoSQL... people list 20 technologies for an entry-level path. You feel defeated before you even write your first HTML tag.",
      time: "9:14 AM"
    },
    {
      sender: "ME",
      senderName: "Can AI write all the code anyway?",
      text: "You hear about ChatGPT and AI tools writing everything, and wonder if you're wasting your time trying to learn coding in 2026.",
      time: "9:41 AM"
    },
    {
      sender: "ME",
      senderName: "The fear of the career switch.",
      text: "You are from a non-tech background, or you're starting late. You wonder if companies will ever hire someone without a CS degree. (Spoiler: They will, if you focus on the right things).",
      time: "9:52 AM"
    }
  ],
  outcomes: [
    {
      id: "01",
      title: "Real Career Reality",
      description: "A crystal clear picture of what starting a professional career in tech actually looks like in 2026."
    },
    {
      id: "02",
      title: "Avoid Beginner Traps",
      description: "An understanding of the most common mistakes beginners make and exactly how to avoid them."
    },
    {
      id: "03",
      title: "Practical Roadmap",
      description: "A step-by-step, actionable roadmap to begin and navigate your own learning journey."
    },
    {
      id: "04",
      title: "Clarity & Confidence",
      description: "The confidence and clarity to take your first steps in tech without feeling overwhelmed."
    }
  ],
  agenda: [
    {
      time: "2:00 PM",
      title: "The Tech Career Reality Check",
      description: "A clear, realistic picture of what starting a career in tech actually looks like in 2026."
    },
    {
      time: "2:15 PM",
      title: "Common Beginner Roadblocks",
      description: "Understanding typical traps like tutorial hell, memorization, and how to avoid them."
    },
    {
      time: "2:30 PM",
      title: "Your Practical Learning Roadmap",
      description: "How to structure your studies, what to build, and how to begin your learning journey."
    },
    {
      time: "2:45 PM",
      title: "First Steps with Confidence",
      description: "Demystifying complex concepts so you can take action without feeling overwhelmed."
    },
    {
      time: "2:55 PM",
      title: "Interactive Q&A",
      description: "Ask anything. Get direct answers to the questions you've been sitting on."
    }
  ],
  faqs: [
    {
      question: "Is this session really free?",
      answer: "Yes, it is entirely free. I'm just sharing my learning journey and the roadmap that worked for me over the last 2 months. There are no upsells, sales pitches, or cards required."
    },
    {
      question: "I have zero coding experience. Will I be lost?",
      answer: "Not at all! This open house is designed specifically for absolute beginners. Since I was in your exact shoes just 60 days ago, I'll explain everything in plain English, completely avoiding complex developer jargon."
    },
    {
      question: "Who is this session for?",
      answer: "It is for anyone who is thinking of starting a career in tech, whether you are a student, a working professional looking to switch fields, or an absolute beginner curious about writing their first line of code."
    },
    {
      question: "What if I've already started learning on my own?",
      answer: "Perfect! You can compare your plan with the 2-month full-stack roadmap that helped me take my first steps, ask questions, and see how to structure your next projects without feeling overwhelmed."
    }
  ]
};
