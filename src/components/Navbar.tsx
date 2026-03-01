'use client';

import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#FBC8AB] py-6 px-8 border-b border-[#3C1908]/10 fixed w-full top-0 z-50 opacity-80">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <Link 
          href="/" 
          className="font-sacramento text-4xl text-[#3C1908] hover:text-[#C85925] transition-colors"
        >
          Vijayabanu. U
        </Link>

        <div className="flex items-center space-x-12">
          {[
            ['About', 'about'],
            ['Services', 'services'],
            ['Events', 'events'],
            ['Testimonial', 'testimonial'],
            ['Contact', 'contact'],
          ].map(([title, sectionId]) => (
            <button
              key={title}
              onClick={() => scrollToSection(sectionId)}
              className="font-ibm-plex text-[18px] text-[#3C1908] hover:text-[#C85925] transition-colors tracking-wide"
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}