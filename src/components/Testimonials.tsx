import React from 'react';

const testimonials = [
  { 
    quote: 'Tom immediately understands the vision from the brief and delivers exactly what we need, every time.', 
    author: 'Adele Hemming', 
    role: 'Marketing Manager - Baker Estates', 
    img: 'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/696916a806cee37de9f10575_Adele-2_processed_by_imagy.jpg' 
  },
  { 
    quote: 'Tom\'s passion and unique ability to translate our social mission into compelling visuals made our brand instantly connect.', 
    author: 'Jabo Butera', 
    role: 'Chief Executive - Jabulani Coffee', 
    img: 'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/694a9ac8217466976f576f08_jabo.jpg' 
  },
  { 
    quote: 'Working with Tom is pure joy. His creativity, clarity, and passion inspire everyone, making ideas flourish.', 
    author: 'Christina Wilkins', 
    role: 'Founder - Brand Biscuit Studio', 
    img: 'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/69691bc29b3cb053a65c433_woman-business-CW-Portrait-Becky-Craven-Devon-Photographer-9304_processed_by_imagy.jpg' 
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Stories worth sharing.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={t.img} alt={t.author} className="w-24 h-24 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all" />
               <p className="text-xl italic text-gray-300 mb-6">&quot;{t.quote}&quot;</p>
              <h4 className="font-bold tracking-tight">{t.author}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
