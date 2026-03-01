import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="relative group">
      {/* Background decorative card */}
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#C85925] transition-all duration-300 group-hover:bottom-0 group-hover:right-0" />
      
      {/* Main card */}
      <div className="relative bg-[#E5E5E5] p-8 transition-all duration-300 group-hover:-translate-y-0 group-hover:-translate-x-0 group-hover:bg-[#C85925]">
        <div className="aspect-square relative mb-8">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        <h3 className="font-judson text-3xl text-[#3C1908] mb-4">
          {title}
        </h3>
        
        <p className="font-judson text-xl text-[#3C1908] mb-8">
          {description}
        </p>
        
        <Link 
          href="/contact"
          className="inline-block bg-white px-6 py-3 text-[#C85925] font-ibm-plex text-sm tracking-wide hover:bg-[#f3824e] hover:text-white transition-colors duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: 'Relationship Counselling',
      description: 'Offering counselling to couples to understand each other with trust & love and to live a good relationship',
      imageUrl: '/images/relationship-counselling.jpg',
    },
    {
      title: 'Life coaching',
      description: 'Guiding youngsters to unlock their potential and achieve personal and professional goals, empowering their problem solving & decision making skills',
      imageUrl: '/images/life-coaching.avif',
    },
    {
      title: 'Wellness coaching',
      description: 'Supporting individuals in achieving holistic well-being through personalized coaching strategies, preaching mind body connection',
      imageUrl: '/images/wellness-coaching.png',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FBC8AB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-judson text-5xl text-[#3C1908] mb-4">
            SERVICES
          </h2>
          <p className="font-judson text-2xl text-[#3C1908]">
            What I am offering to the people
            <br />
            around me!
          </p>
        </div>

        <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}