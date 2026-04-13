import { ArrowRight, Mail, Sparkles } from "lucide-react";

const STORY_FORM = "https://forms.gle/LkVgyVU1EzofobnD7";
const CONNECT_EMAIL = "connect@believeintheinvisible.org";

const Blogs = () => {
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
                Blogs
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Voices of the Invisible
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/90 leading-relaxed font-medium">
              Real stories. Honest conversations. Invisible experiences, made visible.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-3xl">
          <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-10 shadow-sm space-y-6 text-foreground/85 text-base sm:text-lg leading-relaxed">
            <p className="text-foreground font-semibold text-lg sm:text-xl leading-snug">
              Your story matters—even if it feels incomplete, messy, or hard to put into words.
            </p>
            <p>
              At Believe in the Invisible, we are creating a space for real, honest voices around invisible disabilities.
            </p>
            <p>
              Whether you are living with a condition, supporting someone, or simply navigating your own journey, we
              would love to hear from you.
            </p>
            <p className="text-foreground font-medium">You don&apos;t have to be a writer. You just have to be real.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-section max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-background to-secondary/25 p-8 sm:p-10 md:p-12">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-secondary/35 blur-3xl" aria-hidden />

            <div className="relative space-y-6">
              <p className="text-foreground/90 text-base sm:text-lg leading-relaxed">
                Write to us at{" "}
                <a
                  href={`mailto:${CONNECT_EMAIL}?subject=Story%20for%20Voices%20of%20the%20Invisible`}
                  className="font-semibold text-primary underline underline-offset-2 hover:opacity-90 break-all sm:break-normal"
                >
                  {CONNECT_EMAIL}
                </a>{" "}
                or{" "}
                <a
                  href={STORY_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-2 hover:opacity-90"
                >
                  share your story with us here
                </a>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${CONNECT_EMAIL}?subject=Story%20for%20Voices%20of%20the%20Invisible`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Email us <Mail size={18} />
                </a>
                <a
                  href={STORY_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/70 px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-background transition-colors"
                >
                  Share your story <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
