import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const bankRows = [
  { label: "Account Name", value: "Believe in the Invisible Forum" },
  { label: "Bank", value: "State Bank of India" },
  { label: "Account Number", value: "43177028731" },
  { label: "IFSC Code", value: "SBIN0016532" },
  { label: "Branch", value: "Sector-38, Gurgaon branch" },
] as const;

const Donate = () => {
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
                Donate us
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Support the movement
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              To donate, please find our bank details below. Every contribution strengthens advocacy for invisible
              disability thank you for believing with us.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@believeintheinvisible.org?subject=Donation%20confirmation"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Confirm your donation <Mail size={18} aria-hidden />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 text-charcoal-foreground px-7 py-4 font-display text-base font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                Contact us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bank details */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-7xl mx-auto">
          <div className="max-w-6xl space-y-6">
            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Bank details</h2>
              <p className="mt-3 text-foreground/80 text-base sm:text-lg leading-relaxed max-w-4xl">
                Use these details for a direct transfer. Please keep a note of your transaction reference for your
                records.
              </p>
              <dl className="mt-8 space-y-4">
                {bankRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm font-semibold text-foreground/70 sm:w-44 shrink-0">{row.label}</dt>
                    <dd className="text-base sm:text-lg text-foreground font-medium break-words">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-primary/25 bg-primary/5 p-7 sm:p-8">
              <p className="text-foreground font-semibold text-base sm:text-lg leading-relaxed max-w-4xl">
                All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-10 max-w-6xl relative overflow-hidden rounded-3xl border-2 border-blue-950/25 bg-blue-950/[0.07] p-7 sm:p-10">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-950/10 blur-3xl" aria-hidden />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-blue-950/5 blur-3xl" aria-hidden />
            <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-950/15 text-blue-950 sm:mt-0.5">
                <Mail className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-blue-950 text-base sm:text-lg leading-relaxed flex-1 min-w-0 font-medium">
                We kindly request that you send a confirmation email to{" "}
                <a
                  href="mailto:info@believeintheinvisible.org?subject=Donation%20confirmation"
                  className="font-bold text-blue-950 underline decoration-2 decoration-blue-950/50 underline-offset-[3px] hover:decoration-blue-950 break-all sm:break-normal"
                >
                  info@believeintheinvisible.org
                </a>{" "}
                after making the donation, so we can acknowledge your generous support for our records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
