export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string;
  deploymentUrl?: string;
  demoUrl?: string;
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
    deploymentUrl: 'https://cropify.example.com',
    demoUrl: 'https://demo.cropify.example.com',
  },
  {
    slug: 'freelancer-marketplace',
    title: 'Freelance Marketplace',
    category: 'Full-stack Marketplace Platform',
    description: 'A comprehensive platform connecting skilled freelancers with clients looking for specialized services.',
    image: 'https://images.unsplash.com/photo-1611974717482-7635d760e37b?q=80&w=2070&auto=format&fit=crop',
    details: 'Developed following a rigorous 30-day project plan. Includes detailed wireframing, user experience design, and a secure backend authentication system.',
    deploymentUrl: 'https://marketplace.example.com',
    demoUrl: 'https://demo.marketplace.example.com',
  },
  {
    slug: 'freelance-offerings',
    title: 'Freelance Offerings',
    category: 'Specialized Professional Services',
    description: 'Explore the suite of professional services I offer to help businesses grow and scale.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    details: 'A curated list of services designed to meet the needs of modern digital businesses.',
    services: [
      { name: 'Full-Stack Development', deliverable: 'End-to-end web application development' },
      { name: 'UI/UX Design', deliverable: 'High-fidelity prototypes and user interfaces' },
      { name: 'System Architecture', deliverable: 'Scalable and robust backend designs' },
    ],
  },
  {
    slug: 'trading-bot',
    title: 'Trading Bot',
    category: 'Automated Telegram Trading Bot',
    description: 'A powerful automation tool for seamless trading via Telegram.',
    image: 'https://images.unsplash.com/photo-1611974717482-7635d760e37b?q=80&w=2070&auto=format&fit=crop',
    details: 'An automated solution for real-time trading operations through a streamlined Telegram interface.',
    deploymentUrl: 'https://tradingbot.example.com',
    demoUrl: 'https://demo.tradingbot.example.com',
  },
  {
    slug: 'ai-interview',
    title: 'AI Interview',
    category: 'AI-Based Interview System',
    description: 'Next-generation interview platform powered by artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    details: 'Leveraging AI to create a more efficient and unbiased interviewing process.',
    deploymentUrl: 'https://aiinterview.example.com',
    demoUrl: 'https://demo.aiinterview.example.com',
  },
  {
    slug: 'jarvis',
    title: 'Jarvis',
    category: 'Personal AI Virtual Assistant',
    description: 'A highly personalized AI assistant designed to streamline your digital life.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop',
    details: 'A sophisticated virtual assistant that integrates seamlessly with your daily workflows.',
    deploymentUrl: 'https://jarvis.example.com',
    demoUrl: 'https://demo.jarvis.example.com',
  },
];
