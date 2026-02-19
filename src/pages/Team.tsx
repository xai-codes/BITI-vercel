const Team = () => {
  const members = [
    {
      name: "Anjali Vyas",
      role: "Co-Founder, Advocacy and Sensitisation Lead",
      bio: "Anjali Vyas, a Chemical Engineer turned IELTS Trainer and Disability Rights advocate, co-founded Believe in the Invisible. Diagnosed with MS in 2014, Anjali advocates for affordable treatment and research. Her efforts led to a National MS Registry by ICMR in 2022. She serves as the Honorary Joint Secretary of MS Society of India, Pune Chapter, and is an alumnus of a leadership program of the U.S. Department of State.",
      quote: "The world operates on a 'what you see' mentality, but what is excluded is a whole spectrum of experiences.",
      color: "yellow" as const,
      imageFirst: true,
      image: "/team/anjali.png",
    },
    {
      name: "Aarti Batra",
      role: "Co-Founder, Research and Programming Lead",
      bio: "Aarti Batra is a young woman with Thalassemia Major, currently enrolled in a PhD program at the University of Delhi studying memoirs of women with chronic illnesses. She has been working in the disability sector through the Javed-Abidi Fellowship Program and has been a Research consultant with clients like The World Bank.",
      quote: "Disability and Illness Narratives extend beyond the walls of clinics and hospitals. They travel with us everywhere.",
      color: "purple" as const,
      imageFirst: false,
      image: "/team/aarti.png",
    },
    {
      name: "Shashank Pandey",
      role: "Legal and Policy Advisor",
      bio: "Shashank, a former Research Fellow at Vidhi, specializes in legal and policy matters concerning climate and environment. As a Javed Abidi Fellow at NCPEDP, he focused on inclusivity and accessibility issues, particularly political exclusion of disabled individuals. He holds a BA LLB from Dr. Ram Manohar Lohia National Law University.",
      quote: "Disability as a concept needs broadened understanding among people around us.",
      color: "yellow" as const,
      imageFirst: true,
      image: "/team/pandey.png",
    },
  ];

  const colorClasses = {
    yellow: "section-yellow",
    purple: "section-purple",
  };

  return (
    <div>
      <section className="section-charcoal py-24">
        <div className="container-section text-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl mb-6 text-primary">Our Team</h1>
          <p className="text-xl sm:text-2xl opacity-80">The people behind the movement</p>
        </div>
      </section>

      {members.map((member) => (
        <section key={member.name} className={`${colorClasses[member.color]} py-20`}>
          <div className="container-section">
            <div
              className={`flex flex-col ${
                member.imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              } items-stretch gap-12 max-w-6xl mx-auto`}
            >
              {/* Large square image placeholder */}
              <div className="w-full md:w-[480px] flex-shrink-0">
                <div className="aspect-square bg-background/30 rounded-lg overflow-hidden border-2 border-charcoal/10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-center flex-1">
                <h2 className="text-4xl sm:text-5xl mb-3">{member.name}</h2>
                <p className="text-base sm:text-lg font-display tracking-wide opacity-70 mb-8 normal-case">
                  {member.role}
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-8">{member.bio}</p>
                <blockquote className="italic text-base sm:text-lg opacity-80 border-l-4 border-charcoal/30 pl-6">
                  "{member.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Team;
