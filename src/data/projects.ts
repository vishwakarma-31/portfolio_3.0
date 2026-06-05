export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string;
  deploymentUrl?: string;
  demoUrl?: string;
  linkLabel?: string;
  services?: {
    name: string;
    deliverable: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: 'crop-recommendation',
    title: 'Cropify',
    category: 'AI-Powered Crop Recommendation System',
    description: 'A smart agricultural solution that provides accurate crop suggestions based on soil and weather conditions.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop',
    details: 'Built with a decoupled architecture featuring a React frontend and a robust Node.js backend, ensuring scalability and high performance for modern agricultural needs.',
    demoUrl: 'https://github.com/vishwakarma-31/cropify',
  },
  {
    slug: 'freelancer-marketplace',
    title: 'Freelance Marketplace',
    category: 'Full-stack Marketplace Platform',
    description: 'A full-stack marketplace platform connecting freelancers with clients, featuring profile management, project posting, bidding, and secure payments.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    details: 'Built with React, Node.js, MongoDB, and JWT authentication. Includes a real-time messaging system via Socket.IO, a review and rating system, and a dashboard for tracking active projects and earnings.',
    demoUrl: 'https://github.com/vishwakarma-31',
  },
  {
    slug: 'trading-bot',
    title: 'Trading Bot',
    category: 'Automated Telegram Trading Bot',
    description: 'An automated trading bot that executes buy/sell signals via Telegram commands, integrated with real-time market data APIs.',
    image: 'https://images.unsplash.com/photo-1611974717482-7635d760e37b?q=80&w=2070&auto=format&fit=crop',
    details: 'Built with Node.js and the Telegram Bot API, the system listens for user commands, fetches live market data, and executes trades based on configurable strategies. Features include portfolio tracking, stop-loss alerts, and daily P&L summaries delivered directly to the user\'s Telegram chat.',
    demoUrl: 'https://github.com/vishwakarma-31',
  },
  {
    slug: 'ai-interview',
    title: 'AI Interview',
    category: 'AI-Based Interview System',
    description: 'A full-stack AI-powered interview platform that conducts real-time interviews, scores candidate responses, and generates feedback reports.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    details: 'Built with React 18, Node.js/Express, MongoDB, Redis, and the OpenAI API. Features JWT authentication, webcam recording via react-webcam, speech recognition, real-time WebSocket communication, and automated PDF report generation using jsPDF. Deployed with Docker and CI/CD via GitHub Actions.',
    demoUrl: 'https://github.com/vishwakarma-31',
  },
  {
    slug: 'jarvis',
    title: 'Jarvis',
    category: 'Personal AI Virtual Assistant',
    description: 'A voice-activated personal AI assistant that handles scheduling, web search, reminders, and system automation through natural language commands.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop',
    details: 'Built with Python and integrated with OpenAI\'s GPT API for natural language understanding. Features speech-to-text input, text-to-speech output, calendar integration, and a modular plugin architecture for extending capabilities.',
    demoUrl: 'https://github.com/vishwakarma-31',
  },
];
