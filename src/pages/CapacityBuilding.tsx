import { ArrowRight, GraduationCap, Handshake, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const enableItems = [
  {
    title: "Cross-disability sensitisation",
    icon: <Users className="h-5 w-5" aria-hidden />,
    body: "Shared language, inclusive framing, and stronger movement-building across communities.",
  },
  {
    title: "Storytelling for advocacy",
    icon: <Handshake className="h-5 w-5" aria-hidden />,
    body: "Turning lived experience into compelling, policy-oriented narratives.",
  },
  {
    title: "Youth & academic engagement",
    icon: <GraduationCap className="h-5 w-5" aria-hidden />,
    body: "Practical learning that connects management skills to real-world disability inclusion work.",
  },
] as const;

const CapacityBuilding = () => {
  const ncpedpPost =
    "https://www.linkedin.com/posts/ncpedp_ncpedp-javed-abidi-fellowship-workshop-day-activity-7313093372330553344-wB3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAABCijfkB_HVHqhGc_k8BnCC0LBkBI-NCKbM";

  const bigImage = "/our-work/Capacity%20Building/Capacity%20Building.jpg";

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
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-200" aria-hidden />
              <span className="work-kicker-hero">Our work</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Capacity Building & Academic Partnerships
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Growing disability leadership, strengthening institutions, and building shared language for inclusion.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Partner with us <ArrowRight size={18} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-charcoal-foreground px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                Back to homepage <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main stories   wider column */}
      <section className="py-16 md:py-20">
        <div className="container-section">
          <div className="mx-auto max-w-6xl xl:max-w-7xl space-y-8">
            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 md:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-bold">
                National Centre for Promotion of Employment for Disabled People (NCPEDP)
              </h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                Believe in the Invisible (BITI) conducted a hybrid capacity-building training for the{" "}
                <a
                  href={ncpedpPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-950 underline underline-offset-2 hover:opacity-90"
                >
                  Javed Abidi Fellowship (Cohort 2.0)
                </a>{" "}
                at NCPEDP. The session focused on cross-disability sensitisation and digital storytelling for advocacy, equipping emerging
                disability leaders with tools to frame lived experiences into compelling, policy-oriented narratives.
              </p>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                The workshop strengthened fellows’ understanding of inclusive language, intersectionality, and strategic communication within
                the broader disability movement.
              </p>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 md:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-bold">
                Fortune Institute of International Business (FIIB)
              </h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                Through a partnership with the Fortune Institute of International Business (FIIB), BITI hosted postgraduate students under
                the Social Internship Program (SIP). Over 15 days, interns engaged in field visits, in-person strategy sessions, and virtual
                training on the RPwD Act, while working across BITI’s three verticals Research, Operations, and Social Media.
              </p>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                This collaboration strengthened youth engagement in disability advocacy and enabled students to apply management skills to
                meaningful social impact work.
              </p>

              <figure className="mt-8 rounded-2xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                <img
                  src={bigImage}
                  alt="FIIB Interns with BITI's team on the field visit at ASTHA"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <figcaption className="px-5 py-5 sm:py-6 text-center text-base sm:text-lg md:text-xl font-semibold text-foreground leading-snug border-t border-border/60 bg-card/80">
                  FIIB Interns with BITI&apos;s team on the field visit at ASTHA
                </figcaption>
              </figure>
            </div>

            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 md:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-bold">The Quantum Hub (TQH)</h2>
              <h3 className="mt-4 text-lg sm:text-xl md:text-2xl text-foreground font-semibold leading-snug">
                A session for the TQH fellows on Mapping Invisible Disability Across Social Worlds
              </h3>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                This participatory session explored invisible disability through a critical lens, examining how visibility is shaped by
                systems of power, policy, and social recognition. Moving beyond definitions, it engaged participants in reflecting on who gets
                counted, who is excluded, and how invisibility is produced across intersections of caste, class, gender, and geography.
                Through interactive discussions and case-based analysis of frameworks such as the UDID system, Census data, and the RPwD Act,
                the session foregrounded the lived and structural realities of invisibilized conditions.
              </p>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                Co-facilitated by Aarti Batra, Co-founder, Believe in the Invisible, and Harshita Kumari, Analyst at TQH.
              </p>

              <figure className="mt-8 rounded-2xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                <img
                  src="/our-work/Capacity%20Building/The-Quantum-Hub.jpg"
                  alt="The Quantum Hub fellows session with Believe in the Invisible"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* What this enables + partnership CTA */}
      <section className="py-16 md:py-24 border-t border-border/60 bg-muted/20">
        <div className="container-section max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-background to-secondary/25 p-9 sm:p-12 md:p-14">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-secondary/35 blur-3xl" aria-hidden />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-foreground font-bold tracking-tight">What this enables</h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                {enableItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-background/70 backdrop-blur-sm p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-foreground font-bold text-base sm:text-lg">{item.title}</p>
                        <p className="mt-2 text-foreground/80 leading-relaxed text-sm sm:text-base">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 md:mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-border/50 pt-10">
                <div className="max-w-2xl">
                  <p className="text-xl sm:text-2xl text-foreground font-bold">Interested in a training or partnership?</p>
                  <p className="mt-3 text-foreground/85 text-base sm:text-lg leading-relaxed">
                    Tell us your context and goals we’ll tailor a capacity-building engagement.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 shrink-0 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                  Contact BITI <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapacityBuilding;
