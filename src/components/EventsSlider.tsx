import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    title: "International Purple Fest, Goa – 2024",
    desc: "Co-organised National Conference on Invisible Disabilities – first conference in India on topic.",
    image: "/events/purple-goa.png",
  },
  {
    title: "Purple Jallosh, Pune – 2025",
    desc: "Our Experience Zone on Invisible Disabilities saw incredible participation from people across diverse disabilities.",
    image: "/events/purple-pune.jpg",
  },
  {
    title: "Hushed Impressions – Art as Resistance",
    desc: "An evening of disabled love, rage, art and conversations at Kunzum Bookstore, Delhi. Over 80 attendees.",
    image: "/events/hushed-imp.jpg",
  },
  {
    title: "Purple Fest, Delhi – 2024",
    desc: "Presented our work at Rashtrapati Bhavan, receiving support from disability organisations and government officials.",
    image: "/events/purple-delhi.jpg",
  },
  {
    title: "Art Therapy Workshop",
    desc: "Virtual workshops providing a safe, supportive space for participants to explore emotions through artistic expression.",
    image: "/events/art-therapy.png",
  },
  {
    title: "Zine Workshops",
    desc: "Partnering with MS Society of India and Orchvate, delivering zine-making experiences centered on self-advocacy.",
    image: "/events/zine-work.jpg",
  },
];

const useVisibleCount = () => {
  const [count, setCount] = useState(1);

  const update = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1024) setCount(3);
    else if (w >= 640) setCount(2);
    else setCount(1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return count;
};

const EventsSlider = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, events.length - visibleCount);

  // Reset current if it exceeds new maxIndex on resize
  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const cardWidthPercent = 100 / visibleCount;
  const gapRem = 1.5; // gap-6 = 1.5rem

  return (
    <section className="section-purple py-20">
      <div className="container-section">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl">Events</h2>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-display text-lg tracking-wide hover:text-primary transition-colors"
          >
            All Events <ArrowRight size={18} />
          </Link>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (${cardWidthPercent}% + ${gapRem / visibleCount}rem)))`,
            }}
          >
            {events.map((event, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-background rounded-lg overflow-hidden"
                style={{ width: `calc(${cardWidthPercent}% - ${((visibleCount - 1) * gapRem) / visibleCount}rem)` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl mb-2 normal-case font-display">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-foreground w-8" : "bg-foreground/30 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;
