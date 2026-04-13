import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CreativeAdvocacy = () => {
  const images = {
    comic1: "/our-work/Creative%20Advocacy/Comic%20Strips%20on%20Invisible%20Disabilities%201.jpg",
    comic2: "/our-work/Creative%20Advocacy/Comic%20Strips%20on%20Invisible%20Disabilities%202.jpg",
    msSociety: "/our-work/Creative%20Advocacy/MS%20Society%20of%20India.png",
    purpleFestZine: "/our-work/Creative%20Advocacy/International%20Purple%20Fest%20zine.jpg",
    orchvate: "/our-work/Creative%20Advocacy/Orchvate.png",
    artTherapy: "/our-work/Creative%20Advocacy/art-therapy.png",
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
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
                Our work
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Creative Advocacy
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Visual storytelling, zines, and art-based spaces that make invisible disability legible—and build solidarity.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Collaborate with us <ArrowRight size={18} />
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

      {/* Comic strips */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-4">Creative Advocacy</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">
            Comic Strips on Invisible Disabilities
          </h2>
          <p className="text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
            Comic strips and visual representation play a pivotal role in advocacy and storytelling, particularly when it comes to raising
            awareness about invisible disabilities. These creative mediums can communicate complex emotions, experiences, and challenges in a
            way that is accessible and engaging to a broad audience. Unlike traditional text-based content, comic strips and visual art leverage
            imagery and succinct dialogue to convey powerful narratives that resonate deeply with viewers. Believe in the Invisible’s innovative
            use of these mediums has significantly contributed to its mission of creating a more inclusive and understanding society.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
              <img src={images.comic1} alt="Comic strip on invisible disabilities 1" className="w-full h-auto object-contain" loading="lazy" />
            </figure>
            <figure className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
              <img src={images.comic2} alt="Comic strip on invisible disabilities 2" className="w-full h-auto object-contain" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* Zine workshops */}
      <section className="py-16 md:py-20 bg-muted/25 border-y border-border/60">
        <div className="container-section max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-3">Zine & Art-Based Workshops</h2>
          <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-10">Zine workshops</p>

          <div className="space-y-10">
            {/* 1 MS Society */}
            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl text-foreground font-bold">1. MS Society of India</h3>
                  <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                    On the occasion of World Multiple Sclerosis Day, BITI brought an online zine-making workshop to the MS community to celebrate
                    the global MS movement navigating MS together, with the powerful theme: &quot;My MS Diagnosis.&quot; We folded paper, splashed
                    colors, and stitched pieces of our journeys into handmade zines. It wasn’t just art - it was a rebellion against invisibility.
                    It was healing. It was freedom.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
                    <img src={images.msSociety} alt="MS Society of India zine workshop" className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Purple Fest Goa */}
            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 lg:order-1 order-2">
                  <div className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
                    <img
                      src={images.purpleFestZine}
                      alt="International Purple Fest Goa zine workshop"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:order-2 order-1">
                  <h3 className="text-2xl sm:text-3xl text-foreground font-bold">2. International Purple Fest, Goa</h3>
                  <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                    In collaboration with the Goa State Commission for Persons with Disabilities, we hosted a highly successful two-day
                    Zine-Making Workshop at the International Purple Fest Goa- 2025. Across six small-group batches, participants with
                    disabilities, chronic illnesses, caregivers, allies, used the medium of zines- handmade, self-published booklets, to reclaim
                    their narratives through collage, drawing, and writing. The workshop was a resounding success, creating a transformative space
                    for reflection and connection, and proving that creative storytelling is a powerful tool for personal and collective advocacy.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Orchvate */}
            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <h3 className="text-2xl sm:text-3xl text-foreground font-bold">3. Orchvate</h3>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
                Partnering with Orchvate, we delivered a virtual zine-making experience centered on neurodiversity and inclusive expression. This
                workshop empowered neurodivergent individuals to use visual storytelling as a tool for self-advocacy, helping them communicate
                their unique perspectives and strengths in a creative, low-pressure environment.
              </p>

              <div className="mt-8 rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
                <img src={images.orchvate} alt="Orchvate zine workshop" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art therapy */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-4">Art therapy workshop</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-6">Art therapy workshop</h2>
          <p className="text-foreground/85 text-base sm:text-lg leading-relaxed max-w-4xl">
            The virtual Art Therapy workshop emphasized on the communal aspect of art-making, encouraging people with disabilities (visible
            & invisible) to share their creations and experiences, thus fostering a sense of solidarity and mutual support. It provided a
            safe, supportive space for participants to explore and express their emotions and experience the therapeutic benefits of artistic
            expression, fostering personal growth and emotional well-being. The event included guided art activities & interactive sessions
            designed to inspire creativity and emotional expression. Through these activities, participants not only created art but also engaged
            in a process of self-discovery and emotional release.
          </p>

          <div className="mt-10 rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)]">
            <img src={images.artTherapy} alt="Art therapy workshop" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeAdvocacy;
