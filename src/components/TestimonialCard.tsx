import Image from 'next/image';

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  role: string;
  quote: string;
  isLeft: boolean;
}

export default function TestimonialCard({ imageUrl, name, role, quote, isLeft }: TestimonialCardProps) {
  return (
    <div className="relative w-[900px] h-[400px] group bg-white shadow-lg overflow-hidden">
      <div className="grid grid-cols-12 h-full">
        <div className="relative col-span-5 overflow-hidden">
          <div className="absolute inset-0 transform translate-y-full transition-transform duration-750 ease-in-out group-hover:translate-y-0">
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
              className="font-sacramento text-4xl text-[#3C1908] mb-2
                opacity-0 transform -translate-y-4
                transition-all duration-750 ease-in-out
                group-hover:opacity-100 group-hover:translate-y-0"
            >
              {name}
            </h3>
            <p 
              className="font-judson text-xl text-[#3C1908]
                opacity-0 transform -translate-y-4
                transition-all duration-750 ease-in-out delay-100
                group-hover:opacity-100 group-hover:translate-y-0"
            >
              {role}
            </p>
          </div>

          <div className="overflow-hidden">
            <p 
              className="font-judson text-lg text-[#3C1908] leading-relaxed
                opacity-0 transform -translate-x-full
                transition-all duration-750 ease-in-out delay-500
                group-hover:opacity-100 group-hover:translate-x-0"
            >
              {quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}