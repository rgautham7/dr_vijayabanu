import EventCard from './EventCard';

export default function Events() {
  const events = [
    {
      id: 1,
      imageUrl: '/images/img-event1.jpg',
      isLeft: true,
      title: 'Nurturing Young Minds in a Digital Age',
      description: 'Served as Chief Guest at Little Buds graduation, celebrating young learners’ confidence and joy. Shared insights on healthy screen habits, guiding parents toward balanced, holistic child development.'
    },
    {
      id: 2,
      imageUrl: '/images/img-event2.jpg',
      isLeft: false,
      title: 'Awareness on Emotional Resilience - Lion\'s Club',
      description: 'Addressed Lion\'s Club members on emotional resilience, emphasizing awareness, clarity, and balanced strength. Encouraged simple daily self-care habits to sustain long-term mental wellbeing.'
    },
    {
      id: 3,
      imageUrl: '/images/img-event3.jpg',
      isLeft: true,
      title: 'National Seminar on Occupational Stress Management',
      description: 'Spoke on navigating dual identity for women leaders, addressing stereotypes, stigma, and assertive communication. Emphasized practical actions for sustainable work-life balance and stress management.'
    },
    {
      id: 4,
      imageUrl: '/images/img-event4.jpg',
      isLeft: false,
      title: 'Mental Well-Being in Healthcare Leadership',
      description: 'Spoke at the Medicall Seminar on mental well-being for medical professionals and hospital administrators. Highlighted resilience, emotional health, and sustainable leadership in demanding healthcare environments.'
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