import ScrollHighlightText from "@/components/ScrollHighlightText";

const About = () => {
  const timeline = [
    {
      year: "2022",
      title: "The Catalyst",
      desc: "Launched as a one-week campaign, Believe in the Invisible invited the world to see the unseen. The overwhelming response proved that the community was ready to be heard.",
    },
    {
      year: "2023",
      title: "The Expansion",
      desc: "Our follow-up campaign, Caring is Believing, deepened the dialogue, fostering a global ecosystem of empathy and peer support.",
    },
    {
      year: "Today",
      title: "The Movement",
      desc: "What began as a series of stories is now a registered non-profit and a powerhouse platform for advocacy, training, and systemic inclusion.",
    },
  ];

  return (
    <div>
      <section className="section-charcoal py-20">
        <div className="container-section text-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl mb-6 text-primary">About Us</h1>
        </div>
      </section>

      <ScrollHighlightText text="Believe in the Invisible (BITI) is a women-led non-profit redefining the disability narrative. Founded and driven by leaders with lived experience, we bridge the gap between societal perception and the reality of invisible disabilities. Through the power of storytelling, art and advocacy, we amplify the voices of millions whose challenges remain unseen but whose impact is undeniable." />

      <section className="section-yellow py-16">
        <div className="container-section text-center max-w-3xl">
          <h2 className="text-3xl sm:text-5xl mb-8">Our Mission</h2>
        </div>
      </section>

      <ScrollHighlightText text="We exist to dismantle the stigma surrounding non-visible impairments, including chronic illnesses and mental health conditions. By centering intersectionality, we advocate for systemic change across inclusive employment, policy reform, and social equity." />

      <section className="py-20 bg-background">
        <div className="container-section max-w-3xl">
          <h2 className="text-3xl sm:text-4xl mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className="absolute left-2.5 md:left-auto md:right-auto top-1 w-3 h-3 rounded-full bg-primary border-2 border-secondary" style={i % 2 === 0 ? { right: '-6px' } : { left: '-6px' }} />
                <div className="bg-muted p-6 rounded-lg">
                  <span className="font-display text-primary text-sm tracking-wider">{item.year}</span>
                  <h3 className="text-xl mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
