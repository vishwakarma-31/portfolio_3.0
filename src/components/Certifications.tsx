import React from 'react';

const certifications = [
  { title: 'Software Engineer', company: 'HackerRank', period: '2025', description: 'Validated proficiency in software engineering fundamentals, including problem-solving, SQL, and building REST APIs.' },
  { title: 'SQL (Advanced)', company: 'HackerRank', period: '2024', description: 'Mastered advanced relational database concepts, including complex query optimization, data modeling, indexing, and window functions.' },
  { title: 'REST API', company: 'HackerRank', period: '2025', description: 'Certified capability in designing and managing RESTful APIs, including handling HTTP methods, status codes, and JSON data effectively.' },
  { title: 'Deloitte Technology Job Simulation', company: 'Forage', period: '2025', description: 'Simulated the role of a Technology Consultant, delivering technology strategy and developing cloud-ready software solutions.' },
  { title: 'AWS Solutions Architecture Job Simulation', company: 'Forage', period: '2025', description: 'Designed scalable, reliable, and cost-efficient cloud hosting architectures using AWS services.' },
  { title: 'Electronic Arts - Software Engineering Job Simulation', company: 'Forage', period: '2025', description: 'Experienced the lifecycle of a software engineer at EA, proposing gameplay features and patching bugs using C++.' },
  { title: 'Deloitte Data Analytics Job Simulation', company: 'Forage', period: '2025', description: 'Analyzed large datasets to uncover business trends and created interactive dashboards.' },
  { title: 'TATA Cybersecurity Analyst Job Simulation', company: 'Forage', period: '2025', description: 'Managed identity and access management (IAM) policies and analyzed security threats.' },
  { title: 'TATA Data Visualisation', company: 'Forage', period: '2025', description: 'Translated complex datasets into compelling visual stories using Power BI and Tableau.' },
  { title: 'TATA ESG Job Simulation', company: 'Forage', period: '2025', description: 'Evaluated environmental, social, and governance (ESG) factors to propose sustainable business solutions.' },
];

const Certifications = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Certifications.</h2>
        <p className="text-zinc-500 font-mono text-sm">Industry validations and technical simulations</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="p-6 border border-zinc-800 hover:border-indigo-500/50 transition-all bg-zinc-900/30 group">
            <div className="flex justify-between items-start mb-4">
              <div className="text-indigo-500 font-mono text-[10px] uppercase tracking-widest mb-2">Certified</div>
            </div>
            <h3 className="text-lg font-bold tracking-tight mb-1 group-hover:text-white transition-colors">{cert.title}</h3>
            <p className="text-zinc-500 text-xs mb-4">{cert.company} • {cert.period}</p>
            <p className="text-zinc-400 text-xs leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
