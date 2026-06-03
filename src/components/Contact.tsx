import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Ready to <span className="text-indigo-500">collaborate?</span></h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
          I am open to <span className="text-white font-medium">Full-time opportunities</span> at MNCs & Startups, 
          as well as <span className="text-white font-medium">Freelance contracts</span> for specialized projects.
        </p>
      </div>
      <div className="p-12 border border-zinc-800 bg-zinc-900/30 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="p-6 border border-zinc-800 rounded-xl bg-black/40">
            <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">For Recruiters</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
               Looking for a versatile engineer who can handle scale and ship fast? 
               Let&apos;s discuss how I can contribute to your team.
            </p>
            <a href="mailto:work.aaryannn@gmail.com" className="text-white font-bold text-sm hover:text-indigo-400 transition-colors">Send Offer →</a>
          </div>
          <div className="p-6 border border-zinc-800 rounded-xl bg-black/40">
            <h3 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">For Clients</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              Need a custom AI solution or a scalable web app? 
              I provide end-to-end development from architecture to deployment.
            </p>
            <a href="mailto:work.aaryannn@gmail.com" className="text-white font-bold text-sm hover:text-indigo-400 transition-colors">Hire for Project →</a>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-12">
          <p className="text-zinc-500 font-mono text-sm mb-8 uppercase tracking-widest">Direct Email</p>
          <a 
            href="mailto:work.aaryannn@gmail.com" 
            className="text-2xl md:text-4xl font-bold tracking-tight hover:text-indigo-400 transition-colors underline underline-offset-8 decoration-zinc-700 hover:decoration-indigo-500"
          >
            work.aaryannn@gmail.com
          </a>
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/vishwakarma-31" className="text-zinc-500 hover:text-white transition-colors font-mono text-xs uppercase">GitHub</a>
            <a href="https://linkedin.com/in/your-profile" className="text-zinc-500 hover:text-white transition-colors font-mono text-xs uppercase">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
