'use client';

import { useState, useEffect, useRef } from 'react';

interface Experience {
  year: string;
  qualification: string;
  description: string;
  position: 'left' | 'right';
}

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center ${
        exp.position === 'left' ? 'justify-end pr-[50%]' : 'justify-start pl-[50%]'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.6s ease-out ${index * 0.2}s`,
      }}
    >
      {/* Dot on the line */}
      <div className="absolute left-1/2 w-4 h-4 bg-[#C85925] rounded-full -translate-x-1/2 z-10 border-2 border-[#FBC8AB]" />

      {/* Content box */}
      <div
        className={`${
          exp.position === 'left' ? 'mr-8 text-right' : 'ml-8 text-left'
        }`}
      >
        <span className="font-ibm-plex text-sm tracking-widest text-[#C85925] uppercase">
          {exp.year}
        </span>
        <h3 className="font-judson text-2xl text-[#3C1908] mt-1 mb-2 whitespace-pre-line">
          {exp.qualification}
        </h3>
        <p className="font-judson text-lg text-[#3C1908] opacity-80">
          {exp.description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  const experiences: Experience[] = [
    {
      year: '2023 - Present',
      qualification: "Sr. Assistant Professor of Psychology - VIT Chennai",
      description: 'Started my journey in psychology with a deep interest in understanding human behavior and mental processes.',
      position: 'left',
    },
    {
      year: '2022 - 2023',
      qualification: "Associate Professor of Psychology - \n Jain University",
      description: 'Advanced training in counseling and therapeutic techniques, specializing in cognitive behavioral approaches.',
      position: 'right',
    },
    {
      year: '2020 - 2022',
      qualification: 'HOD - Department of Psychology - Bhakthavatsalam Memorial college for women',
      description: 'Started private practice helping individuals unlock their potential and achieve personal growth.',
      position: 'left',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#FBC8AB]">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <h2 className="font-judson text-5xl text-[#3C1908] mb-4">
            EXPERIENCE
          </h2>
          <p className="font-judson text-2xl text-[#3C1908]">
            My professional journey
            <br />
            through the years!
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line in the middle */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C85925] -translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
