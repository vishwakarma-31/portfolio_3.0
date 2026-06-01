import React from 'react';

const experiences = [
  {
    role: 'React JS Developer',
    company: 'Aigetai',
    period: '2024 - Present',
    description: 'Building scalable web applications using React and TypeScript, focusing on modular components and performance optimization.'
  },
  {
    role: 'Software Engineer Intern',
    company: 'Electronic Arts',
    period: '2023',
    description: 'Developed modular components in an Agile environment, contributing to game-related software tools using C++.'
  },
  {
    role: 'Data Analyst',
    company: 'Deloitte',
    period: '2022',
    description: 'Specialized in modeling and visualization for actionable insights, leveraging data-driven mindsets to uncover business trends.'
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Professional Experience.</h2>
        <p className="text-zinc-500 font-mono text-sm">A timeline of my technical contributions</p>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group grid grid-cols-1 md:grid-cols-4 gap-4 p-8 border border-zinc-800 hover:border-indigo-500/30 transition-all bg-zinc-900/10">
            <div className="text-zinc-500 font-mono text-sm">{exp.period}</div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors">{exp.role}</h3>
              <p className="text-indigo-400 font-medium mb-4">{exp.company}</p>
              <p className="text-zinc-400 leading-relaxed text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
