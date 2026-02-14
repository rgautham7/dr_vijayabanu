import EventCard from './EventCard';

export default function Events() {
  const events = [
    {
      id: 1,
      imageUrl: '/images/event1.jpg',
      isLeft: true,
      title: 'Birthday Event',
      description: 'A magical celebration filled with joy and laughter, creating unforgettable memories for everyone involved.'
    },
    {
      id: 2,
      imageUrl: '/images/event2.jpg',
      isLeft: false,
      title: 'Community Gathering',
      description: 'Bringing people together to share experiences and build stronger connections within our community.'
    },
    {
      id: 3,
      imageUrl: '/images/event3.jpg',
      isLeft: true,
      title: 'Workshop Session',
      description: 'Interactive learning experiences that empower and inspire positive change in people\'s lives.'
    },
    {
      id: 4,
      imageUrl: '/images/event4.jpg',
      isLeft: false,
      title: 'Special Celebration',
      description: 'Creating memorable moments that bring smiles and happiness to everyone present.'
    },
  ];

  return (
    <section id="events" className="relative min-h-[333vh] bg-white py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-32">
          <h2 className="font-judson text-5xl text-[#3C1908] mb-4">
            EVENTS
          </h2>
          <p className="font-judson text-2xl text-[#3C1908]">
            Some social activies I have done for
            <br />
            the society
          </p>
        </div>

        {/* Events grid */}
        <div className="relative max-w-[1400px] mx-auto">
          <div className="relative">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className={`
                  absolute 
                  w-[500px] 
                  ${event.isLeft ? 'left-0' : 'right-0'}
                  ${(() => {
                    // Adjusted spacing for each card
                    const positions = {
                      0: 'top-0 left-[200px]',
                      1: 'top-[500px] right-[200px]',
                      2: 'top-[1000px] left-[200px]',
                      3: 'top-[1500px] right-[200px]'
                    };
                    return positions[index as 0 | 1 | 2 | 3];
                  })()}
                `}
              >
                <EventCard
                  imageUrl={event.imageUrl}
                  isLeft={event.isLeft}
                  title={event.title}
                  description={event.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}