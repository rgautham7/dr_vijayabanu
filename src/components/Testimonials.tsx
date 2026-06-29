import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      imageUrl: '/images/testimonial1.jpeg',
      name: 'Dr. V.D. Swaminathan',
      role: 'Professor (retd.) of Psychology, University of Madras, Chennai',
      quote: 'She has won many laurels for her unique contributions to society through various academic institutions in India and abroad. Her valuable insight into various vital psychological aspects of life will provide a viable medium of balancing artificial intelligence with natural occurrences of events that go beyond the realm of technological innovations.',
      isLeft: true,
    },
    {
      id: 2,
      imageUrl: '/images/testimonial2.jpg',
      name: 'Gautham R',
      role: 'Software Engineer, Sedin',
      quote: 'Summarizing her work in a few words is difficult. She is a great mentor and a wonderful human being. Her work in the field of psychology and her contributions to society are commendable. I have had the privilege of working with her on some research works, and I can say that she is one of the most dedicated and passionate individuals I have ever met.',
      isLeft: false,
    },
  ];

  return (
    <section id="testimonials" className="min-h-[160vh] bg-[#FBC8AB] py-20">
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center mb-24">
          <h2 className="font-judson text-5xl text-[#3C1908] mb-4">
            TESTIMONIALS
          </h2>
          <p className="font-judson text-2xl text-[#3C1908]">
            What people say about me
          </p>
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                absolute 
                ${(() => {
                  const positions = {
                    0: 'top-0 left-[360px]',
                    1: 'top-[52vh] left-[436px] -translate-x-1/2'
                  };
                  return positions[index as 0 | 1];
                })()}
              `}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
