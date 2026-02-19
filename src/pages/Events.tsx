const Events = () => {
  const events = [
    {
      title: "International Purple Fest, Goa – 2024",
      desc: "Co-organised the National Conference on Invisible Disabilities – the first conference in India on the topic. Moderated 4 pertinent panel discussions and curated an Experience Zone called 'Experience The Invisible'.",
      image: "/events/purple-goa.png",
    },
    {
      title: "Purple Jallosh, Pune – 2025",
      desc: "Our Experience Zone on Invisible Disabilities saw incredible participation from people across diverse disabilities. From NGO representatives to top government officials engaged firsthand in simulation activities.",
      image: "/events/purple-pune.jpg",
    },
    {
      title: "Purple Fest, Delhi – 2024",
      desc: "Presented our work at the Rashtrapati Bhavan, receiving support from disability organisations, students with disabilities and executives from the Department of Empowerment of Persons with Disabilities.",
      image: "/events/purple-delhi.jpg",
    },
    {
      title: "Hushed Impressions",
      desc: "An evening of disabled love, rage, art and conversations at Kunzum Bookstore, Delhi. Over 80 attendees experienced art exhibitions, open-mic storytelling, and musical performances celebrating the intersection of disability, gender, and identity.",
      image: "/events/hushed-imp.jpg",
    },
    {
      title: "Art Therapy Workshop",
      desc: "Virtual workshops emphasizing the communal aspect of art-making, providing a safe, supportive space for participants to explore and express their emotions through artistic expression.",
      image: "/events/art-therapy.png",
    },
    {
      title: "Zine Workshops",
      desc: "Partnering with MS Society of India, International Purple Fest Goa 2025, and Orchvate, delivering zine-making experiences centered on self-advocacy and inclusive expression.",
      image: "/events/zine-work.jpg",
    },
  ];

  return (
    <div>
      <section className="section-purple py-20">
        <div className="container-section text-center">
          <h1 className="text-4xl sm:text-6xl mb-4">Events</h1>
          <p className="text-lg opacity-80">Where change happens in person</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-section">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {events.map((event) => (
              <div key={event.title} className="break-inside-avoid bg-muted rounded-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg mb-2 normal-case">{event.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
