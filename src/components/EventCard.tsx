import Image from 'next/image';

interface EventCardProps {
  imageUrl: string;
  isLeft: boolean;
  title: string;
  description: string;
}

export default function EventCard({ imageUrl, isLeft, title, description }: EventCardProps) {
  return (
    <div className="relative w-[500px] h-[500px] group overflow-hidden">

      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <div 
        className={`absolute inset-0 bg-white/60 transform transition-transform duration-500 ease-in-out
          ${isLeft ? '-translate-x-full' : 'translate-x-full'} 
          group-hover:translate-x-0`}
      >
        <div className={`h-full p-8 flex flex-col justify-center items-center text-center
          opacity-0 transition-opacity duration-500 ease-in-out delay-500
          group-hover:opacity-100`}
        >
          <h3 className="font-judson text-3xl text-[#3C1908] mb-4">
            {title}
          </h3>
          <p className="font-judson text-xl text-[#3C1908] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

    </div>
  );
}