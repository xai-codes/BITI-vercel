import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Praveen P. Ambashta",
    title: "Deputy Chief Commissioner of PwD",
    quote:
      "We all know that invisible disabilities exist. But, we are not sure how to recognise it. The worse is that guidelines for assessment of these disabilities are not adequate so uncertainty pervades not only amongst masses, but also amongst medical fraternity. Very happy to see @believeintheinvisible following up on chatter.",
    image: "/testimonials/parveen.jpg",
  },
  {
    name: "Guruprasad Pawaskar",
    title: "State Commissioner for Persons with Disabilities, Goa",
    quote:
      "It's crucial to promote understanding and focusing on people's abilities and believing them. Through storytelling & raising right kind of awareness about invisible disabilities, we can create a world where every person with an Invisible disability is believed, feels empowered & belonged.",
    image: "/testimonials/guruprasad.png",
  },
  {
    name: "Dr. T. Sumathy",
    title: "Member of Parliament, Lok Sabha",
    quote:
      "I want to highlight a great initiative led by 'Believe in the Invisible' Team to bring forth stories of people living with invisible disabilities. It's estimated that globally, 75% of people with disabilities have an invisible or non-apparent disability. Let's work together to create a society that understands and supports persons with invisible disabilities.",
    image: "/testimonials/sumathy.png",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="section-charcoal py-20">
      <div className="container-section max-w-5xl">
        <h2 className="text-3xl sm:text-4xl mb-10 text-primary text-center">
          What Leaders Say
        </h2>

        <div className="relative overflow-hidden">
          <div
            key={current}
            className="flex flex-col md:flex-row items-center gap-10 animate-fade-in"
          >
            {/* Large square image */}
            <div className="w-full md:w-[300px] flex-shrink-0">
              <div className="aspect-square bg-charcoal-foreground/10 rounded-lg overflow-hidden border border-charcoal-foreground/20">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1">
              <blockquote className="text-lg italic leading-relaxed mb-6 opacity-90">
                "{t.quote}"
              </blockquote>
              <p className="font-display text-xl text-primary tracking-wide">
                {t.name}
              </p>
              <p className="text-sm opacity-60">{t.title}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary scale-125"
                  : "bg-charcoal-foreground/30 hover:bg-charcoal-foreground/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
