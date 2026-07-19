// Configuration file for the Webinar Landing Page
// Edit this file to customize the content, dates, and details.
import hostPhoto from './assets/host_avatar.svg';

export const CONFIG = {
  webinar: {
    title: "Communication for Tech Success",
    subtitle: "Technical skills may get you started, but communication helps you grow. Discover how developers can improve interviews, teamwork, networking, and project presentations through practical communication skills that make a real impact in the tech industry.",
    ctaText: "Reserve My Free Seat",
    subCtaText: "(yes, actually free - seats really are limited ↴)",
    badge: "Free Online Webinar",
    date: "Saturday, 25 July",
    time: "6:00 PM IST",
    timeSub: "(Online Live Session)",
    venue: "Live Online",
    address: "Hosted via Google Meet. The entry link and calendar invite will be sent directly to your registered contact.",
    googleMapsUrl: "https://calendar.google.com",
    whatsAppCommunityUrl: "https://chat.whatsapp.com/mock-comm-link-mirza",
    phone: "+91 98765 43210",
    email: "mirza.yaseen.baig@gmail.com",
    footerText: "© 2026 Mirza Abdullah Yaseen Baig"
  },
  host: {
    name: "Mirza Abdullah Yaseen Baig",
    avatar: hostPhoto, // default premium avatar
    role: "Tech Communication Coach & Developer",
    bio: "I help software engineers and tech professionals bridge the gap between technical expertise and impactful communication. Having coached developers on interview dialogue, technical storytelling, and professional visibility, I built this webinar to share a practical, structure-driven approach to developer soft skills.",
    highlights: [
      "Coached developers on technical interview communication",
      "Pragmatic framework for networking and personal brand building",
      "Advocate for clear, empathetic collaboration in engineering teams"
    ],
    socials: {
      github: "https://github.com/mirza-baig",
      linkedin: "https://www.linkedin.com/in/mirza-abdullah-yaseen-baig/",
      instagram: "https://www.instagram.com/mirza.communicates/"
    }
  },
  painPoints: [
    {
      sender: "PG",
      senderName: "Why does networking feel so fake and cringe? 😵‍💫",
      subtitle: "you, and 214 others",
      text: "I want to share my work and grow my network on LinkedIn, but writing updates feels like bragging.",
      subText: "You see people posting hyper-inflated stories about writing their first loops, and you just want to focus on engineering. But you know that professional visibility is what brings opportunities.",
      time: "11:47 PM"
    },
    {
      sender: "ME",
      senderName: "I freeze in technical interviews when explaining my logic.",
      text: "You can write the algorithms and solve the problem on paper, but walking the interviewer through your decisions and edge cases out loud feels incredibly difficult under pressure.",
      time: "12:03 AM"
    },
    {
      sender: "ME",
      senderName: "Deep-diving into code and losing the audience.",
      text: "You build an amazing project, but during demos or presentations, you spend all your time explaining the database schema or dependency graph instead of highlighting the problem solved.",
      time: "12:19 AM"
    },
    {
      sender: "ME",
      senderName: "Struggling to align with non-technical stakeholders.",
      text: "Explaining a technical blocker or explaining why a database query is slow to a product owner or client without them zoning out or getting frustrated.",
      time: "9:14 AM"
    },
    {
      sender: "ME",
      senderName: "Miscommunication within hackathons and dev teams.",
      text: "Vague pull request descriptions or poorly articulated bugs lead to duplicate work, merge conflicts, and team frustration.",
      time: "9:41 AM"
    }
  ],
  outcomes: [
    {
      id: "01",
      title: "Confident Expression",
      description: "Learn how to communicate your ideas with confidence during sprint meetings, architectural reviews, and user research sessions."
    },
    {
      id: "02",
      title: "Strategic Networking",
      description: "Improve your networking skills and learn how to make authentic professional connections in the tech industry."
    },
    {
      id: "03",
      title: "Impactful Presentations",
      description: "Present your projects more effectively so that managers, stakeholders, and hackathon judges immediately grasp their value."
    },
    {
      id: "04",
      title: "Seamless Collaboration",
      description: "Collaborate better in teams and hackathons by applying structured documentation and communication styles."
    },
    {
      id: "05",
      title: "Professional Presence",
      description: "Build a professional presence on LinkedIn and GitHub that helps you stand out in the tech industry without feeling artificial."
    }
  ],
  agenda: [
    {
      time: "6:00 PM",
      title: "The Technical Communication Gap",
      description: "Why technical skills get you hired, but communication skills get you promoted. Understanding the developer growth paths."
    },
    {
      time: "6:15 PM",
      title: "Mastering the Interview Dialogue",
      description: "A step-by-step structure to think out loud, explain algorithmic trade-offs, and handle interview questions confidently."
    },
    {
      time: "6:30 PM",
      title: "Storytelling for Tech Projects",
      description: "The 3-step format to pitch your hackathon projects, system architectures, or pull requests to non-technical stakeholders."
    },
    {
      time: "6:45 PM",
      title: "Authentic Tech Networking",
      description: "How to build professional visibility on LinkedIn, contribute to open source, and network without feeling cringe."
    },
    {
      time: "6:55 PM",
      title: "Interactive Q&A with Mirza",
      description: "Ask your burning questions about developer visibility, collaboration hurdles, and soft skill improvements."
    }
  ],
  faqs: [
    {
      question: "Is this session really free?",
      answer: "Yes, it is 100% free. I'm passionate about helping engineers express themselves and grow their careers. There are no surprise sales pitches or credit cards required."
    },
    {
      question: "I'm a natural introvert. Will this help me?",
      answer: "Absolutely! Good communication is not about being loud, talkative, or extroverted. It is about applying clear, logical frameworks. We teach communication as a structured system, just like code."
    },
    {
      question: "Will there be a recording available?",
      answer: "This is a live online interactive session with practice exercises and real-time Q&A. Joining live is highly recommended to get the most value and have your questions answered directly."
    },
    {
      question: "Who is this session for?",
      answer: "It is for software engineers, developers, designers, product managers, and tech students who want to improve how they present their work, interview, and build professional networks."
    },
    {
      question: "What if I've already started working?",
      answer: "Perfect! Mid-level and senior engineers will find these frameworks useful for negotiating raises, explaining architecture designs, and mentoring juniors."
    }
  ]
};
