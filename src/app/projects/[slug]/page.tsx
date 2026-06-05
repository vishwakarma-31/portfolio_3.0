import React from 'react';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Reveal from '@/components/Reveal';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{project.title}</h1>
            <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest">{project.category}</p>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 mb-12">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">{project.description}</p>
              </section>

              {project.details && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Key Features & Implementation</h2>
                  <p className="text-zinc-400 leading-relaxed text-lg">{project.details}</p>
                </section>
              )}

              {project.services && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.services.map((service, index) => (
                      <div key={index} className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/30">
                        <h3 className="text-white font-bold mb-1">{service.name}</h3>
                        <p className="text-zinc-500 text-sm">{service.deliverable}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
                <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-6">Links & Resources</h3>
                <div className="space-y-4">
                  {project.deploymentUrl && (
                    <a 
                      href={project.deploymentUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full py-3 px-4 bg-white text-black text-center font-bold rounded-lg hover:bg-indigo-500 hover:text-white transition-all"
                    >
                      Live Deployment
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full py-3 px-4 border border-zinc-700 text-white text-center font-bold rounded-lg hover:bg-zinc-800 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <footer className="py-12 px-6 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Aryan Vishwakarma. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
