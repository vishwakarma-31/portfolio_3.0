"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-32">
         <section className="py-24 px-6 max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Get in <span className="text-indigo-500">Touch</span></h1>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Interested in working together? Send me a message and I&apos;ll get back to you as soon as possible.
                </p>
            </div>
            <div className="p-8 md:p-12 border border-zinc-800 bg-zinc-900/30 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest text-sm transition-all rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
         </section>
      </div>
      <footer className="py-12 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Aryan Vishwakarma. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
