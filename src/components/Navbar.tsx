import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <Link href="/" className="text-xl font-bold tracking-tighter">
        ARYAN<span className="text-indigo-500">.</span>DEV
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
        <Link href="/projects" className="hover:text-indigo-400 transition-colors">Projects</Link>
        <Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
        <Link href="/contact" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">Hire for project</Link>
      </div>
      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
};

export default Navbar;
