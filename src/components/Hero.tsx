import Image from 'next/image';
import TypeWriter from './TypeWriter';

export default function Hero() {
  const prefix = "Empower your mind with ";
  const words = ["clarity", "kindness", "resilience"];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-48 mt-48">
        <h1 className="font-sacramento text-8xl text-[#3C1908] mb-4">
          Dr. Vijayabanu
        </h1>
        <div className="h-8" />
        <p className="font-judson text-2xl text-[#3C1908]">
          Psychologist & Life Coach
        </p>
        <div className="h-12" />
        <p className="text-6xl text-[#3C1908]">
          <TypeWriter 
            prefix={prefix}
            words={words}
            delay={100}
            className="inline-block"
          />
        </p>
      </div>
      
      <div className="relative max-w-[800px] mx-auto">
        <div className="relative aspect-[3/4] w-full">
          <div className="absolute left-[250px] inset-0 border border-[#C85925]" />

          <div className="absolute -left-[100px] top-1/2 -translate-y-1/2">
            <div className="relative w-[550px] h-[700px]">
              <Image
                src="/images/speaker.jpg"
                alt="Speaker"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute right-[270px] top-0 h-full flex items-center">
            <span className="font-ibm-plex text-sm tracking-[0.4em] writing-vertical text-[#3C1908] uppercase rotate-180">
              Placeholder Adjective
            </span>
          </div>

          <div className="absolute -top-[24px] left-3/4 -translate-x-1/2">
            <span className="font-ibm-plex text-sm tracking-[0.4em] text-[#3C1908] uppercase bg-[#FBC8AB] px-4 writing-vertical rotate-180">
              Hope
            </span>
          </div>

          <div className="absolute -bottom-[24px] left-3/4 -translate-x-1/2">
            <span className="font-ibm-plex text-sm tracking-[0.4em] text-[#3C1908] uppercase bg-[#FBC8AB] px-4 writing-vertical rotate-180">
              Love
            </span>
          </div>

          <div className="absolute top-1/2 -right-[300px] -translate-y-1/2 bg-[#FBC8AB]">
            <div className="relative">
              {/* <div className="absolute right-full top-1/2 w-[50px] h-[1px] bg-[#C85925]" /> */}
              
              <div className="relative border border-[#C85925] p-8 w-[500px]">
                <p className="font-sacramento text-[48px] leading-relaxed text-[#3C1908]">
                  Quotes goes here
                  <br />
                  it should be of two lines. Need to check if it is working.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}