import { ArrowRight, Heart, Mail, Sparkles } from "lucide-react";
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
              disability—thank you for believing with us.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:info@believeintheinvisible.org?subject=Donation%20confirmation"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Confirm your donation <Mail size={18} />
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

      {/* Bank + QR */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Bank details</h2>
                <p className="mt-3 text-foreground/80 text-base leading-relaxed">
                  Use these details for a direct transfer. Please keep a note of your transaction reference for your
                  records.
                </p>
                <dl className="mt-8 space-y-4">
                  {bankRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-border/50 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm font-semibold text-muted-foreground sm:w-40 shrink-0">{row.label}</dt>
                      <dd className="text-base text-foreground font-medium break-words">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl border border-primary/25 bg-primary/5 p-7 sm:p-8">
                <p className="text-foreground font-semibold text-base sm:text-lg leading-relaxed">
                  All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-8 shadow-sm lg:sticky lg:top-28">
                <div className="flex items-center gap-2 text-foreground font-bold text-lg sm:text-xl">
                  <Heart className="h-5 w-5 text-primary shrink-0" aria-hidden />
                  Scan to donate
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If your banking app supports UPI or QR payments for this account, scan the code below.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="rounded-2xl border border-border/70 bg-background p-4 sm:p-5 shadow-inner">
                    <img
                      src="/shareqr.png"
                      alt="QR code to donate to Believe in the Invisible"
                      className="w-full max-w-[280px] h-auto mx-auto"
                      width={280}
                      height={280}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-10 relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-background to-secondary/25 p-7 sm:p-10">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
            <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-secondary/35 blur-3xl" aria-hidden />
            <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
              <Mail className="h-5 w-5 text-primary shrink-0 sm:mt-1" aria-hidden />
              <p className="text-foreground/85 text-base sm:text-lg leading-relaxed flex-1 min-w-0">
                We kindly request that you send a confirmation email to{" "}
                <a
                  href="mailto:info@believeintheinvisible.org?subject=Donation%20confirmation"
                  className="font-semibold text-primary underline underline-offset-2 hover:opacity-90 break-all sm:break-normal"
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
