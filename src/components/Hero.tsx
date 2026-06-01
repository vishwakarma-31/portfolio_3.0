import React from 'react';

"use client";
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent" />
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
          alt="Developer Workspace" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest uppercase border border-indigo-500 text-indigo-400 rounded-full bg-indigo-500/10">
          Open to Full-time Roles & Freelance Projects
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
          Aryan Vishwakarma<span className="text-indigo-500">.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8 font-light leading-relaxed">
          Full-Stack Engineer specializing in <span className="text-white font-medium">React, TypeScript & Python</span>. 
          Whether it's scaling systems for <span className="text-white font-medium">Enterprises</span>, 
          shipping fast for <span className="text-white font-medium">Startups</span>, or delivering 
          bespoke solutions as a <span className="text-white font-medium">Freelancer</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Magnetic>
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-indigo-500 hover:text-white transition-all">
              Work With Me
            </button>
          </Magnetic>
          <Magnetic>
            <button className="px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-sm hover:bg-zinc-900 transition-all">
              View Portfolio
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Hero;
