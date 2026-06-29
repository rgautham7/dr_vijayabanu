"use client";
import Image from 'next/image';
import { useState } from 'react';

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  role: string;
  quote: string;
  isLeft: boolean;
}

export default function TestimonialCard({ imageUrl, name, role, quote, isLeft }: TestimonialCardProps) {

  const [revealed, setRevealed] = useState(false);

  return (
    <div className="relative w-[900px] h-[400px] group bg-white shadow-lg overflow-hidden"
      onMouseEnter={() => setRevealed(true)}
    >
      <div className="grid grid-cols-12 h-full">
        <div className="relative col-span-5 overflow-hidden">
          <div
            className={`absolute inset-0 transform transition-transform duration-750 ease-in-out ${
              revealed ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0" />
          <div className="absolute -right-6 top-0 w-6 h-full bg-[#FBC8AB]/10" />
        </div>


        <div className="col-span-7 p-12 flex flex-col justify-center">
          <div className="mb-6 overflow-hidden">
            <h3 
              className={`font-sacramento text-4xl text-[#3C1908] mb-2
                transition-all duration-750 ease-in-out
                ${revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
            >
              {name}
            </h3>
            <p 
              className={`font-judson text-xl text-[#3C1908]
                transition-all duration-750 ease-in-out delay-100
                ${revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
            >
              {role}
            </p>
          </div>

          <div className="overflow-hidden">
            <p 
              className={`font-judson text-lg text-[#3C1908] leading-relaxed
                transition-all duration-750 ease-in-out delay-500
                ${revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
            >
              {quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}