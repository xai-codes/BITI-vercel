import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { leaderTestimonials } from "@/data/leaderTestimonials";

const Testimonials = () => {
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
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                Testimonials
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Testimonials from the leaders
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Endorsements that strengthen credibility—and widen the circle of belief for invisible disability.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Connect with BITI <ArrowRight size={18} />
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-charcoal-foreground px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                See our achievements <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="container-section max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
                <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
                  Further solidifying their credibility, &quot;Believe in the Invisible&quot; also garnered support from several notable figures.
                  Among them are Mr. Praveen P. Ambashta, Deputy Chief Commissioner for PWD at the Chief Commissioner’s office, Delhi and Mr.
                  Guruprasad Pawaskar, the Disability Commissioner of Goa, whose endorsement highlights the campaign&apos;s significance and impact
                  within the disability advocacy community. Additionally, Dr. T. Sumathy, a respected Member of Parliament, has lent her support,
                  further emphasizing the initiative&apos;s importance on a national level.
                </p>
                <p className="mt-5 text-foreground/85 text-base sm:text-lg leading-relaxed">
                  These endorsements from prominent figures in both governmental and legislative positions reinforce the relevance and effectiveness
                  in raising awareness and advocating for the rights of people with invisible disabilities. Their backing not only enhances the
                  movement&apos;s visibility but also validates its mission to create a more inclusive and understanding society.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-border/70 bg-muted/25 p-7 sm:p-8">
                <h2 className="text-xl sm:text-2xl text-foreground font-bold mb-4">Leaders who supported BITI</h2>
                <ul className="space-y-4 text-foreground/85 text-sm sm:text-base leading-relaxed">
                  <li>
                    <span className="font-semibold text-foreground">Mr. Praveen P. Ambashta</span>
                    <div className="text-muted-foreground">Deputy Chief Commissioner for PWD, Chief Commissioner’s office, Delhi</div>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Mr. Guruprasad Pawaskar</span>
                    <div className="text-muted-foreground">Disability Commissioner of Goa</div>
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Dr. T. Sumathy</span>
                    <div className="text-muted-foreground">Member of Parliament</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leader portraits */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-20 bg-muted/15">
        <div className="container-section max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {leaderTestimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border/70 bg-card shadow-sm overflow-hidden"
              >
                <img
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="p-5 sm:p-6">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
