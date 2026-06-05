"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

type FormType = 'client' | 'recruiter' | 'general';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formType, setFormType] = useState<FormType>('client');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.inquiryType = formType;

    try {
      const response = await fetch('https://formspree.io/f/xyzabcde', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const renderFormFields = () => {
    switch (formType) {
      case 'client':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Company Name</label>
                <input type="text" id="company" name="company" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Company" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Budget Range</label>
                <select id="budget" name="budget" required defaultValue="" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                  <option value="" disabled>Select a budget...</option>
                  <option value="< $5k">&lt; $5,000</option>
                  <option value="$5k - $10k">$5,000 - $10,000</option>
                  <option value="$10k - $25k">$10,000 - $25,000</option>
                  <option value="$25k+">$25,000+</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Timeline</label>
              <input type="text" id="timeline" name="timeline" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="e.g. 1-2 months, ASAP" />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Project Details</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell me about your project, goals, and specific needs..."></textarea>
            </div>
          </>
        );
      case 'recruiter':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Company / Agency</label>
                <input type="text" id="company" name="company" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Hiring Company" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="role" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Role Title</label>
                <input type="text" id="role" name="role" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="e.g. Senior Frontend Engineer" />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="compensation" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Compensation Range</label>
              <input type="text" id="compensation" name="compensation" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="e.g. $120k - $150k" />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Job Description / Link</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Paste the job description or a link to the posting..."></textarea>
            </div>
          </>
        );
      case 'general':
      default:
        return (
          <>
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Your Name" />
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="your@email.com" />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="How can I help you?"></textarea>
            </div>
          </>
        );
    }
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
                   Interested in working together? Select the type of inquiry below.
                 </p>
             </div>

             <div className="flex justify-center mb-10">
               <div className="inline-flex flex-wrap justify-center gap-2 md:gap-0 md:bg-zinc-900 border md:border-zinc-800 rounded-full md:p-1.5 md:overflow-hidden border-transparent">
                 <button 
                   onClick={() => setFormType('client')}
                   className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all border md:border-none ${formType === 'client' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-zinc-400 hover:text-white border-zinc-800 bg-zinc-900 md:bg-transparent'}`}
                 >
                   Clients
                 </button>
                 <button 
                   onClick={() => setFormType('recruiter')}
                   className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all border md:border-none ${formType === 'recruiter' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-zinc-400 hover:text-white border-zinc-800 bg-zinc-900 md:bg-transparent'}`}
                 >
                   Recruiters
                 </button>
                 <button 
                   onClick={() => setFormType('general')}
                   className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all border md:border-none ${formType === 'general' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-zinc-400 hover:text-white border-zinc-800 bg-zinc-900 md:bg-transparent'}`}
                 >
                   General
                 </button>
               </div>
             </div>

             <div className="p-8 md:p-12 border border-zinc-800 bg-zinc-900/30 rounded-2xl">
               {status === 'success' ? (
                 <div className="text-center py-12">
                   <h2 className="text-2xl font-bold mb-4">Message sent successfully.</h2>
                   <p className="text-zinc-400">I will get back to you within 24 hours.</p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="mt-8 text-indigo-400 font-mono text-sm uppercase tracking-widest hover:text-indigo-300"
                   >
                     ← Send another message
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit}>
                   {renderFormFields()}
                   
                   <div className="mt-8">
                     <button 
                       type="submit" 
                       disabled={status === 'loading'}
                       className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-widest text-sm transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                       {status === 'loading' ? 'Sending...' : 'Send Message'}
                     </button>
                     {status === 'error' && (
                       <p className="text-red-500 text-sm text-center mt-4 font-mono">{errorMessage}</p>
                     )}
                   </div>
                 </form>
               )}
             </div>
          </section>
       </div>
       <footer className="py-12 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
         <p>© {new Date().getFullYear()} Aryan Vishwakarma. All Rights Reserved.</p>
       </footer>
     </main>
   );
}
