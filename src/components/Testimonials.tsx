import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      imageUrl: '/images/testimonial1.png',
      name: 'Foreign Author',
      role: 'Book Writer, Public Speaker',
      quote: 'Praesent mattis quam vel lectus blandit rutrum. Quisque vel dapibus mauris. Etiam pretium, massa vel tincidunt convallis, lectus diam auctor sem, non sagittis orci risus vitae libero.',
      isLeft: true,
    },
    {
      id: 2,
      imageUrl: '/images/testimonial2.png',
      name: 'Another Author',
      role: 'Professional Speaker',
      quote: 'Curabitur id massa sed tellus efficitur dignissim. Integer quam augue, rhoncus eget iaculis vel, condimentum id ipsum. Duis nec bibendum leo.',
      isLeft: false,
    },
    {
      id: 3,
      imageUrl: '/images/testimonial3.png',
      name: 'Third Author',
      role: 'Writer & Educator',
      quote: 'Nulla ultricies elementum libero, pharetra blandit erat iaculis ut. Etiam eu sodales turpis. Etiam suscipit elit id nibh facilisis.',
      isLeft: true,
    },
  ];

  return (
    <section id="testimonial" className="min-h-[200vh] bg-[#FBC8AB] py-24">
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center mb-32">
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
                    1: 'top-[45vh] left-[440px] -translate-x-1/2',
                    2: 'top-[90vh] left-[440px]',
                  };
                  return positions[index as 0 | 1 | 2];
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