import { ArrowRight, BookOpenCheck, GraduationCap, Landmark, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AccessibleIelts = () => {
  const reportUrl = "https://drive.google.com/file/d/1RnSRtaXpXNoW1_EjSMEzbHBkEUtH8Jrf/view?usp=sharing";

  const images = [
    {
      src: "/our-work/IELTS/IELTS%20for%20PWDs.png",
      alt: "Accessible IELTS for PWDs presented to Ms. Manmeet Nanda, IAS, Joint Secretary, DEPwD",
      caption: "Accessible IELTS for PWDs – presented to Ms. Manmeet Nanda, IAS, Joint Secretary, DEPwD.",
    },
    {
      src: "/our-work/IELTS/IELTS%20FOR%20ALL.png",
      alt: "IELTS FOR ALL handbook launch at the International Purple Fest, Goa – October 2025",
      caption:
        "IELTS FOR ALL: Handbook launch by Hon’ble Secretary, DEPWD, IAS Rajesh Aggarwal at the International Purple Fest, Goa - October 2025",
    },
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
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                Our work
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Accessible IELTS for Persons with Disabilities
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Expanding Pathways to Global Education
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Download report <ArrowRight size={18} />
              </a>
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
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-4">
                Accessible IELTS for Persons with Disabilities
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">
                A structured initiative to make IELTS preparation inclusive.
              </h2>

              <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
                Believe in the Invisible led India’s first structured initiative on Accessible IELTS Training for Persons with Disabilities,
                supported by the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice &amp; Empowerment,
                Government of India.
              </p>
              <p className="mt-5 text-foreground/85 text-base sm:text-lg leading-relaxed">
                The project was designed to address a critical gap: while English proficiency tests such as IELTS are gateways to higher
                education and global mobility, accessible preparatory training for persons with disabilities remains limited. BITI developed a
                practical, inclusive training framework tailored to diverse learning needs, integrating reasonable accommodation principles,
                adaptive teaching methods, and inclusive assessment strategies.
              </p>
              <p className="mt-5 text-foreground/85 text-base sm:text-lg leading-relaxed">
                Using a Train-the-Trainer (TTT) model, we built capacity within three National Institutes to deliver accessible,
                disability-informed IELTS preparation — ensuring the impact is institutional, not incidental.
              </p>

              <div className="mt-8 rounded-3xl border border-border/70 bg-muted/25 p-7 sm:p-8">
                <p className="text-foreground font-bold text-xl mb-2">Download the full project report</p>
                <p className="text-foreground/75 leading-relaxed">
                  Read about our methodology, MEL findings, participant testimonials, and recommendations for national scaling.
                </p>
                <div className="mt-5">
                  <a
                    href={reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Download report <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl text-foreground font-bold mb-6">Project at a Glance</h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "3 National Institutes engaged",
                      icon: <Landmark className="h-5 w-5" aria-hidden />,
                      body: "AYJNISHD (Mumbai), NIEPID (Secunderabad), ISLRTC (Delhi)",
                    },
                    {
                      title: "6 Trainers certified",
                      icon: <GraduationCap className="h-5 w-5" aria-hidden />,
                      body: "Through the Train-the-Trainer (TTT) programme",
                    },
                    {
                      title: "10 Students with Disabilities trained",
                      icon: <BookOpenCheck className="h-5 w-5" aria-hidden />,
                      body: "As co-participants in the programme",
                    },
                    {
                      title: "India’s first accessible IELTS Training Handbook",
                      icon: <BookOpenCheck className="h-5 w-5" aria-hidden />,
                      body: "Launched at the International Purple Fest, Goa (October 2025) by Shri Rajesh Aggarwal, IAS, Secretary, DEPwD",
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic first */}
      <section className="py-16 md:py-20 bg-muted/25 border-y border-border/60">
        <div className="container-section max-w-6xl">
          <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-4">A Historic First</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">
            IELTS For All
          </h2>
          <p className="text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
            India’s first government-recognised IELTS Training Handbook for Persons with Disabilities and their trainers — covers all four IELTS
            Academic skills: Listening, Reading, Writing, and Speaking, with disability-specific strategies and accessible materials
            throughout.
          </p>
          <p className="mt-5 text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
            This initiative marks a significant step toward inclusive education reform—ensuring that persons with disabilities are not excluded
            from global academic and professional opportunities due to inaccessible preparatory systems.
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-4">Moments</p>
          <h2 className="text-3xl sm:text-4xl text-foreground font-bold tracking-tight mb-8">
            Project highlights
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {images.map((img) => (
              <figure
                key={img.src}
                className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-contain" loading="lazy" />
                <figcaption className="p-5 text-sm sm:text-base text-foreground/80 leading-relaxed">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-background to-secondary/25 p-9 sm:p-12 overflow-hidden relative">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" aria-hidden />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight">
                  Want to scale accessible prep?
                </h2>
                <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Partner with BITI to build disability-informed training systems that are institutional, practical, and sustainable.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Contact us <ArrowRight size={18} />
                </Link>
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/70 px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-background transition-colors"
                >
                  Download report <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibleIelts;

