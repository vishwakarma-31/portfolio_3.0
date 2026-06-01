import React from 'react';

const projects = [
  { title: 'Cropify', category: 'AI-Powered Crop Recommendation System', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Trading Bot', category: 'Automated Telegram Trading Bot', image: 'https://images.unsplash.com/photo-1611974717482-7635d760e37b?q=80&w=2070&auto=format&fit=crop' },
  { title: 'AI Interview', category: 'AI-Based Interview System', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
  { title: 'Jarvis', category: 'Personal AI Virtual Assistant', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop' },
];

const ProjectGrid = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Featured Projects.</h2>
        <p className="text-zinc-500 font-mono text-sm">Selected works spanning AI, Fullstack, and Automation</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/50 transition-all duration-500">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">View Source Code →</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <span className="text-[10px] font-mono uppercase tracking-tighter px-2 py-1 border border-zinc-700 text-zinc-500">Project 0{index + 1}</span>
              </div>
              <p className="text-zinc-500 leading-relaxed">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
