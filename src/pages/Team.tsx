import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const members = [
    {
      name: "Anjali Vyas",
      role: "Co-Founder, Advocacy and Sensitisation Lead",
      bio: "Anjali Vyas is a disability rights advocate and social entrepreneur with over a decade of experience in advocacy, policy, and education. As a person living with Multiple Sclerosis, she brings both professional expertise and firsthand perspective to her work on invisible disabilities. She has played an active role in shaping advocacy through her work with the Multiple Sclerosis Society of India, including efforts that supported the launch of India’s National Registry on MS, while also advancing awareness and inclusion through training, storytelling, and community-led initiatives. Anjali holds fellowships from NCPEDP's Javed Abidi Fellowship on Disability and the U.S. Department of State's International Visitor Leadership Program (IVLP). She has contributed to national disability policy including the PM Daksh portal and led the development of India's first accessible IELTS curriculum for persons with disabilities under the Ministry of Social Justice & Empowerment.",
      quote: "The world operates on a 'what you see' mentality, but what is excluded is a whole spectrum of experiences.",
      color: "yellow" as const,
      image: "/team/anjali.png",
    },
    {
      name: "Aarti Batra",
      role: "Co-Founder, Research and Programming Lead",
      bio: "Aarti Batra is a researcher, disability advocate, and co-Founder of Believe in the Invisible (BITI), working at the intersection of disability studies, health humanities, and public policy, with a focus on invisible disabilities and chronic illness. A PhD scholar at the University of Delhi, her research explores illness narratives, epistemic justice, and storytelling as a tool for knowledge-building and change. Alongside her academic work, she has experience in disability inclusion, public health, and community-based advocacy. At BITI, Aarti leads on research, knowledge-building, and program design. Her work emphasises participatory and arts-based approaches, creating spaces where people with invisible disabilities can articulate their experiences on their own terms.",
      quote: "Disability and Illness Narratives extend beyond the walls of clinics and hospitals. They travel with us everywhere.",
      color: "purple" as const,
      image: "/team/aarti.png",
    },
    {
      name: "Shashank Pandey",
      role: "Legal and Policy Advisor",
      bio: "A lawyer and disability rights advocate, Shashank works to strengthen political participation of persons with disabilities. He has collaborated with ECI, Vidhi Centre for Legal Policy, Lok Sabha Secretariat, and has represented India in international dialogues, including the IFES Kathmandu Declaration.",
      quote: "Disability as a concept needs broadened understanding among people around us.",
      color: "yellow" as const,
      image: "/team/pandey.png",
    },
  ];

  const colorClasses = {
    yellow: "section-yellow",
    purple: "section-purple",
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden section-charcoal border-b border-border/20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 -left-40 h-96 w-96 sm:h-[28rem] sm:w-[28rem] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute top-8 -right-48 h-[26rem] w-[26rem] sm:h-[32rem] sm:w-[32rem] rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.55)_2px,transparent_2px)] [background-size:30px_30px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),transparent_45%,rgba(0,0,0,0.25))]" />
        </div>

        <div className="container-section relative z-10 py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                Our team
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              The people behind the movement
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Women-led, lived-experience driven, and committed to systemic inclusion meet the team building BITI.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Contact us <ArrowRight size={18} />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-charcoal-foreground px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                Support the mission <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="py-16 md:py-20">
        <div className="container-section">
          <div className="space-y-14 md:space-y-18 max-w-7xl mx-auto">
            {members.map((member, idx) => {
              const imageLeft = idx % 2 === 0;
              const sectionBg = member.color === "yellow" ? "bg-primary/10" : "bg-secondary/15";

              return (
                <div
                  key={member.name}
                  className={`relative overflow-hidden rounded-3xl border border-border/70 ${sectionBg} p-7 sm:p-10 md:p-12`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/25 blur-3xl" />
                    <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(rgba(0,0,0,0.55)_2px,transparent_2px)] [background-size:28px_28px]" />
                  </div>

                  <div
                    className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start ${
                      imageLeft ? "" : ""
                    }`}
                  >
                    <div className={`md:col-span-4 ${imageLeft ? "md:order-1" : "md:order-2"}`}>
                      <div className="rounded-2xl overflow-hidden border border-border/70 bg-background/40 shadow-[0_16px_32px_rgba(0,0,0,0.12),0_4px_0_rgba(0,0,0,0.12)]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-auto object-contain p-1 sm:p-2 hover:scale-[1.01] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className={`md:col-span-8 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.18)]">
                        {member.name}
                      </h2>
                      <p className="mt-3 text-sm sm:text-base font-display tracking-[0.14em] uppercase text-foreground/70">
                        {member.role}
                      </p>

                      <p className="mt-6 text-base sm:text-lg text-foreground/85 leading-relaxed">{member.bio}</p>

                      <blockquote className="mt-8 rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                        <p className="text-foreground/85 italic text-base sm:text-lg leading-relaxed">“{member.quote}”</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
