const Work = () => {
  const works = [
    {
      title: "Believe in the Invisible Campaign – 2022",
      desc: "A brief yet impactful one-week campaign designed to amplify the voices and experiences of people with invisible disabilities. By inviting personal stories, the campaign garnered a remarkable response, shedding light on the often-overlooked challenges. The campaign concluded with a panel discussion called 'REDEFINING THE INVISIBLE'.",
      image: "/our-work/biti-camp.jpg",
    },
    {
      title: "Caring is Believing – 2023",
      desc: "Building on the momentum of the first campaign, 'Caring is Believing' featured narratives and perspectives of the communities who too are affected with invisible disabilities. It encouraged allies and advocates to share their stories of support and care, highlighting the importance of a compassionate and inclusive society.",
      image: "/our-work/care-is-bel.jpg",
    },
    {
      title: "Disabled Love Series",
      desc: "Dating and relationships are integral parts of the human experience. For people with disabilities, navigating the dating world can present unique challenges and opportunities. This series shares successful and fulfilling relationship stories through adaptability, understanding, and open communication.",
      image: "/our-work/disable-love-series.png",
    },
    {
      title: "Pain Awareness Month",
      desc: "The 2016 Global Burden of Disease Study revealed that pain and conditions related to pain are the top contributors to disability and health challenges worldwide. We shared stories and experiences to raise awareness about chronic pain as an invisible disability.",
      image: "/our-work/pain-month.jpg",
    },
    {
      title: "IIH Awareness",
      desc: "IIH (Idiopathic Intracranial Hypertension) is a neurological disorder characterized by increased pressure inside the skull for unknown reasons. We raised awareness by sharing real stories of those navigating this complex invisible condition.",
      image: "/our-work/disable-pride-in-prog.jpg",
    },
    {
      title: "Disability Pride in Progress – 2025",
      desc: "A landmark social media awareness campaign tackling the complex, non-linear journey of pride. We created a powerful sanctuary for voices that often go unheard, especially those navigating chronic conditions and invisible disabilities. The campaign sparked a global dialogue validating the 'in-between' stages of self-acceptance.",
      image: "/our-work/disable-pride-in-prog.jpg",
    },
    {
      title: "Zine Workshops & Art Therapy",
      desc: "Virtual and in-person workshops emphasizing the communal aspect of art-making, encouraging people with disabilities to share their creations and experiences. From MS Society zine-making to Purple Fest workshops and Orchvate collaborations, art became a rebellion against invisibility.",
      image: "/our-work/biti-camp.jpg",
    },
  ];

  return (
    <div>
      <section className="section-charcoal py-20">
        <div className="container-section text-center">
          <h1 className="text-4xl sm:text-6xl mb-4 text-primary">Our Work</h1>
          <p className="text-lg opacity-80">Campaigns, stories, and initiatives</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <div key={work.title} className={`rounded-lg overflow-hidden ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/20'}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl mb-3 normal-case">{work.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
