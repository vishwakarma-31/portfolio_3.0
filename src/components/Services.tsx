import React from 'react';

const services = [
  { 
    title: 'Full-Stack Development', 
    desc: 'Building scalable web systems with React, TypeScript, and Node.js. Focused on clean code and responsive design.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop' 
  },
  { 
    title: 'AI & Automation', 
    desc: 'Developing intelligent solutions using LLMs, NLP, and Computer Vision to solve complex real-world problems.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    title: 'Cloud Engineering', 
    desc: 'Designing reliable, scalable, and cost-efficient cloud hosting architectures using AWS and Docker.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop' 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Freelance Offerings.</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">High-impact technical solutions tailored to your business goals.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group p-8 border border-zinc-800 hover:border-indigo-500/50 transition-all bg-zinc-900/20 hover:bg-zinc-900/40">
            <div className="aspect-video overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm">{service.desc}</p>
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-500 font-bold">
              Available for projects →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
