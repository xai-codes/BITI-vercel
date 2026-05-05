import { ArrowRight, BriefcaseBusiness, GraduationCap, Handshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const WorkplaceInclusion = () => {
  const links = {
    capgemini:
      "https://www.linkedin.com/posts/shalini-sinha-6895a820_getthefutureyouwant-4positivefutures-neurodiversityatcapgemini-activity-7373994947936571392-1ZBe?utm_source=share&utm_medium=member_desktop&rcm=ACoAABCijfkB_HVHqhGc_k8BnCC0LBkBI-NCKbM",
    wipro:
      "https://www.linkedin.com/posts/believe-in-the-invisible_idpd2024-invisibledisabilities-inclusionatwork-ugcPost-7269964385102569473-sVm-?utm_source=share&utm_medium=member_desktop&rcm=ACoAABCijfkB_HVHqhGc_k8BnCC0LBkBI-NCKbM",
    crcGoi:
      "https://www.linkedin.com/posts/anjali-vyas-76157179_disabilityemploymentawarenessmonth-rpwd-equalopportunity-activity-7125024082986745858-J8EC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABCijfkB_HVHqhGc_k8BnCC0LBkBI-NCKbM",
  } as const;

  const posters = [
    { src: "/our-work/posters/HRAI.jpg", alt: "HRAI session poster" },
    { src: "/our-work/posters/TATA.jpg", alt: "Tata Steel Foundation session poster" },
    { src: "/our-work/posters/Extentia.jpg", alt: "Extentia session poster" },
  ] as const;

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
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-200" aria-hidden />
              <span className="work-kicker-hero">Our work</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Workplace Inclusion & Employer Engagement
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Shifting workplace conversations from compliance to culture by bringing lived experience into professional spaces.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Work with us <ArrowRight size={18} />
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

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="work-kicker mb-4">Workplace Inclusion & Employer Engagement</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">
                Building workplaces where invisible disabilities are understood and accommodated.
              </h2>
              <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
                Believe in the Invisible actively works with corporates, industry bodies, and institutions to build a deeper understanding of
                invisible disabilities in the workplace. Through curated sensitisation sessions, masterclasses, and panel discussions, BITI
                brings lived experience into professional spaces, shifting conversations from compliance to culture.
              </p>
              <p className="mt-5 text-foreground/85 text-base sm:text-lg leading-relaxed">
                We have engaged with organisations and platforms including Tata Steel Foundation, Extentia, HRAI (HR Association of India),{" "}
                <a
                  href={links.capgemini}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-950 underline underline-offset-2 hover:opacity-90"
                >
                  Capgemini
                </a>
                ,{" "}
                <a
                  href={links.wipro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-950 underline underline-offset-2 hover:opacity-90"
                >
                  WIPRO
                </a>
                ,{" "}
                <a
                  href={links.crcGoi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-950 underline underline-offset-2 hover:opacity-90"
                >
                  Composite Regional centres for Rehabilitation and Skill development of PWDs (GOI)
                </a>{" "}
                and industry collaborations among others. These sessions focus on understanding invisible disabilities, challenging workplace
                myths, reasonable accommodation, inclusive hiring practices, and the role of leadership in fostering psychologically safe
                environments.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl text-foreground font-bold mb-6">What we deliver</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Employer Sensitisation Sessions",
                      icon: <Handshake className="h-5 w-5" aria-hidden />,
                      body: "Lived-experience led conversations that challenge myths and build understanding.",
                    },
                    {
                      title: "Corporate Masterclasses",
                      icon: <GraduationCap className="h-5 w-5" aria-hidden />,
                      body: "Practical sessions on disclosure, accommodation, psychologically safe teams, and inclusive hiring.",
                    },
                    {
                      title: "Industry & HR Body Collaborations",
                      icon: <BriefcaseBusiness className="h-5 w-5" aria-hidden />,
                      body: "Partnerships that move inclusion from policy into everyday practice.",
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
                  <p className="text-foreground font-semibold">Want to host a session?</p>
                  <p className="mt-2 text-foreground/75 leading-relaxed">
                    Write to us and we’ll tailor a session for your context and team size.
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
        </div>
      </section>

      {/* Session highlights */}
      <section className="py-16 md:py-20 bg-muted/25 border-t border-border/60">
        <div className="container-section max-w-6xl">
          <h2 className="text-3xl sm:text-4xl text-foreground font-bold tracking-tight mb-8">Session highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posters.map((p) => (
              <div
                key={p.src}
                className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]"
              >
                <img src={p.src} alt={p.alt} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkplaceInclusion;

