import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen">
      <div className="absolute left-0 top-0 w-[75%] h-full bg-white" />
      <div className="absolute right-0 top-0 w-[25%] h-full">
        <Image
          src="/images/flower-bg.png"
          alt="Decorative floral background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto relative">
        <div className="grid grid-cols-2 min-h-screen">
          <div className="pl-24 pt-24">
            <h2 className="font-judson text-[60px] text-[#3C1908] mb-20">
              ABOUT
            </h2>
            <div className="space-y-4">
              <h3 className="font-judson text-[32px] text-[#3C1908] leading-tight">
                All about yourself!
              </h3>
              <p className="font-judson text-[32px] text-[#3C1908] leading-tight">
                Everything the people wants
                <br />
                to know.
              </p>
            </div>
          </div>

          <div className="relative flex items-center">
          <div className="relative left-[125px] w-[450px] h-[600px]">
              <Image
                src="/images/speaker.jpg"
                alt="Speaker"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}