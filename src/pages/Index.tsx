import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  HeartHandshake,
  Mail,
  MapPin,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import { DonateHeartLoader } from "@/components/DonateHeartLoader";
import heroBg from "@/assets/hero-bg.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollReveal(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const STORY_FORM = "https://forms.gle/LkVgyVU1EzofobnD7";

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-charcoal/55 to-primary/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,215,64,0.25),transparent_45%)]" />
        </div>

        <div className="container-section relative z-10 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                    Believe In The Invisible
                  </span>
                </div>

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground leading-[1.02] tracking-tight">
                  Make the unseen <span className="text-primary">impossible</span> to ignore.
                </h1>
                <p className="mt-6 text-base sm:text-lg md:text-xl text-charcoal-foreground/90 leading-relaxed max-w-2xl">
                Believe in the Invisible (BITI) is a women-led non-profit redefining the disability narrative. Founded and driven by leaders with lived experience, we bridge the gap between societal perception and the reality of invisible disabilities. Through the power of storytelling, art and advocacy, we amplify the voices of millions whose challenges remain unseen but whose impact is undeniable.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  >
                    Donate <ArrowRight size={20} />
                  </Link>
                  <a
                    href={STORY_FORM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 text-charcoal-foreground px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-white/10 transition-colors"
                  >
                    Share your story <ArrowRight size={20} />
                  </a>
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center gap-2 rounded-xl text-charcoal-foreground/90 px-3 py-4 font-display text-base font-semibold hover:text-primary transition-colors"
                  >
                    Explore our work <ArrowRight size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal delay={140} className="lg:pl-6 lg:mt-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 sm:p-7">
                  <h2 className="text-base sm:text-lg text-charcoal-foreground font-display font-semibold tracking-wide mb-5">
                    Reach us
                  </h2>
                  <div className="space-y-5 text-charcoal-foreground/90 text-sm sm:text-base leading-relaxed">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" aria-hidden />
                      <p className="break-words">
                        <span className="text-charcoal-foreground font-semibold">Registered office</span>
                        <br />
                        5/79, Shivaji Nagar, Gurugram, Basai Road, Haryana, India&nbsp;12200
                      </p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Mail className="w-5 h-5 shrink-0 mt-0.5 text-primary" aria-hidden />
                      <p>
                        <span className="text-charcoal-foreground font-semibold">Email</span>{" "}
                        <a
                          href="mailto:ho@believeintheinvisible.org"
                          className="underline decoration-primary/50 underline-offset-4 hover:text-primary transition-colors break-all"
                        >
                          ho@believeintheinvisible.org
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: "Storytelling", value: "Amplify" },
                      { label: "Advocacy", value: "Shift" },
                      { label: "Inclusion", value: "Build" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center flex flex-col items-center justify-center"
                      >
                        <p className="text-primary font-display text-base font-semibold tracking-wide drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                          {s.value}
                        </p>
                        <p className="mt-1 text-[12px] text-charcoal-foreground/80">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative overflow-hidden py-20 md:py-28 section-yellow border-t border-border/60">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 -left-40 h-96 w-96 sm:h-[28rem] sm:w-[28rem] rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute top-6 -right-48 h-[26rem] w-[26rem] sm:h-[32rem] sm:w-[32rem] rounded-full bg-primary-foreground/15 blur-3xl" />
          <div className="absolute -bottom-48 left-1/3 h-[30rem] w-[30rem] sm:h-[36rem] sm:w-[36rem] rounded-full bg-primary-foreground/12 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(0,0,0,0.65)_2px,transparent_2px)] [background-size:26px_26px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_40%,rgba(0,0,0,0.05))]" />
        </div>

        <div className="container-section relative z-10 max-w-5xl">
          <div className="max-w-3xl">
            <ScrollReveal>
             
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6">Our Mission</h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                We exist to dismantle the stigma surrounding non-visible impairments, including chronic illnesses and mental health conditions.
                By centering intersectionality, we advocate for systemic change across:
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <BriefcaseBusiness className="h-5 w-5" aria-hidden />,
                title: "Inclusive Employment",
                body: "Sensitizing global workplaces to hidden needs.",
              },
              {
                icon: <Scale className="h-5 w-5" aria-hidden />,
                title: "Policy Reform",
                body: "Driving legislative recognition and reasonable accommodation.",
              },
              {
                icon: <Users className="h-5 w-5" aria-hidden />,
                title: "Social Equity",
                body: "Highlighting how disability intersects with gender, education, and healthcare.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 110}>
                <div className="group relative h-full rounded-2xl border border-primary-foreground/18 bg-primary-foreground/10 backdrop-blur-sm p-8 shadow-[0_14px_28px_rgba(0,0,0,0.18),0_4px_0_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-70"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 35%, rgba(0,0,0,0) 100%)",
                    }}
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]" aria-hidden />
                  <div className="relative w-11 h-11 rounded-xl bg-primary-foreground/15 text-primary-foreground flex items-center justify-center shadow-[0_6px_14px_rgba(0,0,0,0.18),0_2px_0_rgba(0,0,0,0.18)]">
                    {card.icon}
                  </div>
                  <h3 className="relative mt-5 text-xl text-primary-foreground font-bold drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                    {card.title}
                  </h3>
                  <p className="relative mt-3 text-[15px] text-primary-foreground/90 leading-relaxed">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our journey */}
      <section className="py-20 md:py-28 bg-secondary/20 border-y border-border/50">
        <div className="container-section max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
              
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold drop-shadow-[0_3px_0_rgba(0,0,0,0.28)] mb-5">
                  Our Journey: From a Spark to a Movement
                </h2>
                <p className="text-foreground/85 text-lg leading-relaxed">What started as a digital heartbeat has evolved into a national catalyst for change.</p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="relative pl-10 sm:pl-12 border-l-2 border-primary/40 space-y-10">
                {[
                  {
                    era: "2022 | The Catalyst",
                    text: "Launched as a one-week campaign, Believe in the Invisible invited the world to see the unseen. The overwhelming response proved that the community was ready to be heard.",
                  },
                  {
                    era: "2023 | The Expansion",
                    text: "Our follow-up campaign, Caring is Believing, deepened the dialogue, fostering a global ecosystem of empathy and peer support.",
                  },
                  {
                    era: "Today | The Movement",
                    text: "Impact transformed us. What began as a series of stories is now a registered non-profit and a powerhouse platform for advocacy, training, and systemic inclusion.",
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.era} delay={i * 120}>
                    <div className="relative">
                      <span className="absolute -left-[2.5rem] sm:-left-[3.4rem] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                      <p className="mb-3">
                        <span className="inline-flex items-center rounded-full bg-primary/25 text-foreground px-3 py-1 text-sm sm:text-base font-display font-bold tracking-wide shadow-[0_3px_0_rgba(0,0,0,0.28)]">
                          {step.era}
                        </span>
                      </p>
                      <p className="text-foreground/85 leading-relaxed text-[17px]">{step.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-background to-secondary/25 p-10 sm:p-12">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-secondary/35 blur-3xl" aria-hidden />

              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground mb-5">Help someone feel believed.</h2>
                  <p className="text-foreground/85 text-lg leading-relaxed max-w-2xl">
                    Whether you donate, share your story, or partner with us—your action helps move invisible disability from doubt to dignity.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  >
                    Donate now <ArrowRight size={20} />
                  </Link>
                  <a
                    href={STORY_FORM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/70 px-8 py-4 font-display text-base font-semibold tracking-wide hover:bg-background transition-colors"
                  >
                    Share your story <ArrowRight size={20} />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl text-foreground/90 px-8 py-4 font-display text-base font-semibold hover:text-primary transition-colors"
                  >
                    Contact us <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Link
        to="/donate"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-lg shadow-primary/35 font-display text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-8 sm:right-8 sm:px-6 sm:text-base"
        aria-label="Donate to Believe in the Invisible"
      >
        <DonateHeartLoader />
        Donate
      </Link>
    </div>
  );
};

export default Index;
