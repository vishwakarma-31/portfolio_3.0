"use client";
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Link from 'next/link';
import { projects } from '@/data/projects';

const ProjectGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    
    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 50 
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Featured Projects.</h2>
        <p className="text-zinc-500 font-mono text-sm">Selected works spanning AI, Fullstack, and Automation</p>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         {projects.map((project, index) => (
           <div 
             key={index} 
             ref={el => { cardsRef.current[index] = el; }} 
             className="group relative"
           >
             {/* Invisible link covering the entire card */}
             <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" aria-label={`View ${project.title}`} />
             
             <div className="relative z-10 pointer-events-none">
               <div className="block relative aspect-video overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/50 transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                    <div className="flex gap-4 pointer-events-auto">
                      <a href={project.deploymentUrl} target="_blank" rel="noopener noreferrer" className="relative z-20 text-xs font-mono uppercase tracking-widest text-indigo-400 hover:text-white transition-colors">
                        {project.linkLabel || 'Deployment'} →
                      </a>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="relative z-20 text-xs font-mono uppercase tracking-widest text-white hover:text-indigo-400 transition-colors">
                        {project.linkLabel || 'Live Demo'} →
                      </a>
                    </div>
                  </div>
               </div>
               <div className="mt-6">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-bold tracking-tight group-hover:text-indigo-400 transition-colors">
                     {project.title}
                   </h3>
                   <span className="text-[10px] font-mono uppercase tracking-tighter px-2 py-1 border border-zinc-700 text-zinc-500">Project 0{index + 1}</span>
                 </div>
                 <p className="text-zinc-500 leading-relaxed">{project.category}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
};

export default ProjectGrid;
