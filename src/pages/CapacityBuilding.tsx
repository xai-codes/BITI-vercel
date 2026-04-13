import { ArrowRight, GraduationCap, Handshake, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                Our work
              </span>
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

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
                <h2 className="text-2xl sm:text-3xl text-foreground font-bold">
                  National Centre for Promotion of Employment for Disabled People (NCPEDP)
                </h2>
                <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                  Believe in the Invisible (BITI) conducted a hybrid capacity-building training for the Javed Abidi Fellowship (Cohort 2.0) at
                  NCPEDP. The session focused on cross-disability sensitisation and digital storytelling for advocacy, equipping emerging
                  disability leaders with tools to frame lived experiences into compelling, policy-oriented narratives.
                </p>
                <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                  The workshop strengthened fellows’ understanding of inclusive language, intersectionality, and strategic communication within
                  the broader disability movement.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={ncpedpPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-border/80 bg-background/70 px-5 py-3 font-display font-semibold tracking-wide hover:bg-background transition-colors"
                  >
                    View LinkedIn post
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
                <h2 className="text-2xl sm:text-3xl text-foreground font-bold">Fortune Institute of International Business (FIIB)</h2>
                <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                  Through a partnership with the Fortune Institute of International Business (FIIB), BITI hosted postgraduate students under
                  the Social Internship Program (SIP). Over 15 days, interns engaged in field visits, in-person strategy sessions, and virtual
                  training on the RPwD Act, while working across BITI’s three verticals—Research, Operations, and Social Media.
                </p>
                <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                  This collaboration strengthened youth engagement in disability advocacy and enabled students to apply management skills to
                  meaningful social impact work.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl text-foreground font-bold mb-6">What this enables</h3>
                <div className="space-y-4">
                  {[
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
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.06),0_3px_0_rgba(0,0,0,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-foreground font-bold">{item.title}</p>
                          <p className="mt-2 text-foreground/80 leading-relaxed text-sm sm:text-base">{item.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-border/70 bg-muted/30 p-6">
                  <p className="text-foreground font-semibold">Interested in a training or partnership?</p>
                  <p className="mt-2 text-foreground/75 leading-relaxed">
                    Tell us your context and goals—we’ll tailor a capacity-building engagement.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display font-semibold tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Contact BITI <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
            <img
              src={bigImage}
              alt="Capacity building and academic partnerships"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapacityBuilding;

