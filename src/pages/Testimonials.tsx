const Testimonials = () => {
  const testimonials = [
    {
      name: "Praveen P. Ambashta",
      title: "Deputy Chief Commissioner of PwD",
      quote:
        "We all know that invisible disabilities exist. But, we are not sure how to recognise it. The worse is that guidelines for assessment of these disabilities are not adequate so the uncertainty pervades not only amongst the masses, but also amongst the medical fraternity. Very happy to see @believeintheinvisible following up on the chatter.",
      imageFirst: true,
      image: "/testimonials/parveen.jpg",
    },
    {
      name: "Guruprasad Pawaskar",
      title: "State Commissioner for Persons with Disabilities, Goa",
      quote:
        "It's crucial to promote understanding and focusing on people's abilities and believing them. Through storytelling & raising right kind of awareness about invisible disabilities, we can create a world where every person with an Invisible disability is believed, feels empowered & belonged.",
      imageFirst: false,
      image: "/testimonials/guruprasad.png",
    },
    {
      name: "Dr. T. Sumathy",
      title: "Member of Parliament, Lok Sabha",
      quote:
        "I want to highlight a great initiative led by 'Believe in the Invisible' Team to bring forth stories of people living with invisible disabilities. It's estimated that globally, 75% of the people with disabilities have an invisible or non-apparent disability. Let's work together to create a society that understands and supports persons with invisible disabilities.",
      imageFirst: true,
      image: "/testimonials/sumathy.png",
    },
  ];

  return (
    <div>
      <section className="section-purple py-20">
        <div className="container-section text-center">
          <h1 className="text-4xl sm:text-6xl mb-4">Testimonials</h1>
          <p className="text-lg opacity-80">Endorsements from leaders who believe</p>
        </div>
      </section>

      {testimonials.map((t, i) => (
        <section
          key={t.name}
          className={`py-16 ${i % 2 === 0 ? "bg-primary/10" : "bg-secondary/20"}`}
        >
          <div className="container-section max-w-5xl">
            <div
              className={`flex flex-col ${
                t.imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Large square image */}
              <div className="w-full md:w-[350px] flex-shrink-0">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden border-2 border-charcoal/10">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 flex flex-col justify-center">
                <blockquote className="text-lg italic leading-relaxed mb-6 text-muted-foreground">
                  "{t.quote}"
                </blockquote>
                <p className="font-display text-2xl tracking-wide">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.title}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Testimonials;
