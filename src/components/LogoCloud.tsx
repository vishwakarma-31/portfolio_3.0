import React from 'react';

const logos = [
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c530d41b81c14e43c4459_lunas-fund.png',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/6943caca03bbb919f11acfcc_champion.svg',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c52682a2e69279c8c54af_main-jabulani-logo.png',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c4cc5c964439430ec865d_anns-cottage.svg',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c4e9c26493b9320a7836c_vino.png',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c542d23c9c0e6b81a6d41_aquamare.svg',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c547b899eb3c881ca8b49_plymouth-argyle.svg',
  'https://cdn.prod.website-files.com/68dfe1227845cb9983cef9f6/692c4f1a28f89e6adb391b2_cornwall-airport-logo.svg',
];

const LogoCloud = () => {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">In good company.</h2>
          <p className="text-gray-400">We love working with teams that value honest, human connection.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Partner Logo" className="h-12 w-auto object-contain mx-auto" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
