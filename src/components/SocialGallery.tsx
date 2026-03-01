'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function SocialGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const socialImages = [
    '/images/Gallery1.jpg',
    '/images/Gallery2.jpg',
    '/images/Gallery3.jpg',
    '/images/Gallery4.jpg',
    '/images/Gallery5.jpg',
    '/images/Gallery6.jpg',
    // Duplicate images to create seamless loop
    '/images/Gallery1.jpg',
    '/images/Gallery2.jpg',
    '/images/Gallery3.jpg',
    '/images/Gallery4.jpg',
    '/images/Gallery5.jpg',
    '/images/Gallery6.jpg',
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Reset scroll position when reaching end
    const handleScroll = () => {
      if (marquee.scrollLeft >= (marquee.scrollWidth - marquee.clientWidth) / 2) {
        marquee.scrollLeft = 0;
      }
    };

    marquee.addEventListener('scroll', handleScroll);
    return () => marquee.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let lastTimestamp = 0;
    const speed = 0.05; // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!isPaused) {
        if (lastTimestamp) {
          const delta = timestamp - lastTimestamp;
          marquee.scrollLeft += speed * delta;
        }
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-judson text-4xl text-[#3C1908] text-center mb-12">
          Social Media Gallery
        </h2>
        
        {/* Marquee Container */}
        <div 
          ref={marqueeRef}
          className="overflow-x-hidden relative"
          style={{ height: '300px' }}
        >
          <div className="flex gap-6 absolute left-0 top-0 h-full">
            {socialImages.map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[250px] h-[300px] group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Image
                  src={src}
                  alt={`Social media image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-500 ease-out
                    group-hover:scale-110"
                  priority
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#3C1908]/20 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 rounded-lg" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}