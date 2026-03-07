import React, { useState } from 'react';

export function Contacts() {
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/prem.kr_balmiki1028/", color: "hover:text-pink-500" },
    { name: "Twitter", url: "https://x.com/premkrbalmiki", color: "hover:text-sky-400" },
    { name: "Github", url: "https://github.com/premkr1028/", color: "hover:text-white" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prem-kumar-balmiki-688738323", color: "hover:text-blue-600" },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("premkumarbalmiki088@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-zinc-100 overflow-hidden px-6 py-20">
      
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-24">
        <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-4 animate-fade-in">
          Available for projects
        </h2>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight">
          Let's create <br /> 
          <span className="text-zinc-500 italic">something</span> <span className="text-blue-400">great.</span>
        </h1>
      </div>

      {/* Main Contact Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-800/50 pt-12 gap-12">
          
          {/* Email Interaction */}
          <div className="flex flex-col items-center md:items-start group">
            <p className="text-zinc-500 text-sm mb-2">Send an email</p>
            <button 
              onClick={copyEmail}
              className="text-2xl md:text-4xl font-light hover:text-blue-300 transition-colors duration-300 relative"
            >
              premkumarbalmiki088@gmail.com
              <span className={`absolute -right-20 top-1/2 -translate-y-1/2 text-xs bg-zinc-800 px-2 py-1 rounded transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
                {copied ? 'Copied!' : ''}
              </span>
            </button>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-zinc-400 text-lg md:text-xl font-medium ${link.color} transition-all duration-300 transform hover:scale-110`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer-style Signature */}
      <div className="mt-32 text-zinc-600 text-sm tracking-widest uppercase">
        © 2026 Prem Kumar Balmiki
      </div>
    </section>
  );
}