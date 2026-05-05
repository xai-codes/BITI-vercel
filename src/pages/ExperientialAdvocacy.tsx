import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ExperientialAdvocacy = () => {
  const links = {
    panel1:
      "https://www.linkedin.com/posts/believe-in-the-invisible_panel-discussion-journey-to-diagnosis-activity-7166046897055514624-Drr5?utm_source=share&utm_medium=member_desktop",
    panel2:
      "https://www.linkedin.com/posts/believe-in-the-invisible_certification-health-insurance-crises-activity-7167167649079083008-sALx?utm_source=share&utm_medium=member_desktop",
    panel3: "https://www.linkedin.com/feed/update/urn:li:activity:7166446721928032257",
    panel4: "https://www.linkedin.com/feed/update/urn:li:activity:7166775322946785280",
  } as const;

  const images = {
    purpleGoa: "/our-work/Experiential%20Advocacy/goa2.jpg",
    internationalPurpleFest: "/our-work/Experiential%20Advocacy/Purple-Fest-Goa.jpg",
    purpleDelhi: "/our-work/Experiential%20Advocacy/purple-fest-delhi.jpeg",
    purpleJallosh: "/our-work/Experiential%20Advocacy/Purple%20Jallosh.jpg",
    hushed: "/our-work/Experiential%20Advocacy/Hushed%20Impressions.jpg",
    narrative1: "/our-work/Experiential%20Advocacy/Narratives%20from%20the%20event/Post%20(5).png",
    narrative2: "/our-work/Experiential%20Advocacy/Narratives%20from%20the%20event/Post%20(6).png",
    narrative3: "/our-work/Experiential%20Advocacy/Narratives%20from%20the%20event/Post%20(7).png",
  } as const;

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
              Experiential Advocacy & Public Engagement
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Creating immersive, public-facing experiences that make invisible disability tangible and drive dialogue, empathy, and change.
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

      {/* Purple Fest */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <p className="work-kicker mb-4">International Purple Fest Goa & Delhi</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-8">
            Purple Fest
          </h2>

          <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold">International Purple Fest, Goa – 2024</h3>
            <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
              In 2024, Believe in the Invisible co-organised the National Conference on Invisible Disabilities at the International Purple
              Fest, Goa, which was the first conference in India on Invisible Disabilities. We moderated 4 of the most pertinent Panel
              discussions on Invisible disabilities:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Journey to Diagnosis & Treatment", href: links.panel1 },
                { label: "Certification & Health Insurance Crisis", href: links.panel2 },
                { label: "Climate Change, Disaster Management & Invisible Disability", href: links.panel3 },
                { label: "The unseen reality of Caregiving", href: links.panel4 },
              ].map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border/70 bg-background/60 px-5 py-4 hover:bg-background transition-colors"
                >
                  <p className="text-foreground font-semibold">{p.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Click to read more</p>
                </a>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6">
              <figure className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
                <img src={images.internationalPurpleFest} alt="International Purple Fest Goa" className="w-full h-auto object-contain" loading="lazy" />
              </figure>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Purple Fest, Delhi – Rashtrapati Bhavan</h3>
            <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
              Our work at the International Purple Fest Goa also got us an invitation to the Purple Fest – Delhi at the Rashtrapati Bhavan,
              where we presented our work yet again and received support from other disability organisations. We were largely visited by
              students with disabilities and executives from the Department of Empowerment of Persons with Disabilities. Participation in Purple
              Fest Delhi significantly broadened our network and alliances.
            </p>

            <div className="mt-8 rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
              <img src={images.purpleDelhi} alt="Purple Fest Delhi" className="w-full h-auto object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Zone */}
      <section className="py-16 md:py-20 bg-muted/25 border-y border-border/60">
        <div className="container-section max-w-6xl">
          <p className="work-kicker mb-4">Experience Zone</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">
            “Experience the Invisible”
          </h2>
          <p className="text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
            Believe in the Invisible curated immersive Experience Zones at International Purple Fest, Goa and Purple Jallosh, Pune, inviting
            participants to step into the everyday realities of invisible disabilities. Through thoughtfully designed simulations - such as
            blindfolded walks, balancing tasks, and dexterity challenges using everyday objects visitors engaged with sensory, cognitive, and
            physical barriers often overlooked in daily life. The initiative saw participation from persons with disabilities, employers, NGO
            representatives, and senior government officials, including the Secretary, Department of Empowerment of Persons with Disabilities,
            the PCMC Commissioner, and the Maharashtra State Commissioner.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <figure className="rounded-3xl overflow-hidden border border-border/70 bg-muted/40 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                <img
                  src={images.purpleGoa}
                  alt="Experience the Invisible at Purple Fest Goa"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </figure>
            <figure className="rounded-3xl overflow-hidden border border-border/70 bg-muted/40 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                <img
                  src={images.purpleJallosh}
                  alt="Experience the Invisible at Purple Jallosh"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Hushed Impressions */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <p className="work-kicker mb-4">Hushed Impressions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">
            Art, Stories & Sound as Resistance
          </h2>
          <p className="text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
            In May 2024, we hosted &quot;Hushed Impressions&quot; at Kunzum Bookstore, Delhi a vibrant physical event celebrating the intersection
            of disability, gender, and identity. This inaugural gathering brought together over 80 attendees for a powerful meld of art
            exhibitions, open-mic storytelling, and musical performances.
          </p>

          <div className="mt-8 rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
            <img src={images.hushed} alt="Hushed Impressions event" className="w-full h-auto object-contain" loading="lazy" />
          </div>

          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold mb-6">The event featured</h3>
            <ul className="space-y-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">Artist Showcase</span>: A platform for artists with visible and invisible
                disabilities to exhibit and sell their work.
              </li>
              <li>
                <span className="font-semibold text-foreground">Policy & Narrative</span>: A panel discussion on &quot;Disability Art and
                Storytelling as Bodies of Resistance,&quot; exploring how creative expression drives advocacy.
              </li>
              <li>
                <span className="font-semibold text-foreground">Inclusive Dialogue</span>: A diverse panel moderated by a leader with an
                invisible disability that engaged the LGBTQ+ community and broader social movements.
              </li>
            </ul>
            <p className="mt-6 text-foreground/85 text-base sm:text-lg leading-relaxed">
              &quot;Hushed Impressions&quot; proved that art is not just a medium for sensitization, but a vital tool for systemic change and
              collective healing.
            </p>
          </div>

          <div className="mt-12">
            <p className="work-kicker mb-4">Narratives from the event</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: images.narrative1, alt: "Narrative poster 1" },
                { src: images.narrative2, alt: "Narrative poster 2" },
                { src: images.narrative3, alt: "Narrative poster 3" },
              ].map((p) => (
                <div
                  key={p.src}
                  className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]"
                >
                  <img src={p.src} alt={p.alt} className="w-full h-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperientialAdvocacy;

