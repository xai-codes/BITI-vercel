import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const MS_ZINE_INSTAGRAM = "https://www.instagram.com/p/DI89AYSCmF5";

const comicCarouselImages = [
  "DC certification.png",
  "join the dialogue.png",
  "INVISIBLE WILD.png",
  "understanding IVDs.png",
  "Beneath the Skin.png",
  "customer care1.png",
  "a day in life.png",
  "supermarket.png",
  "everyday solutions.png",
  "comic strip.jpeg",
  "customer care2.png",
  "reality of IVD.png",
].map(
  (file) =>
    `/our-work/Creative%20Advocacy/carousal/${encodeURIComponent(file)}`,
);

function ComicStripCarousel({
  onOpenImage,
  pauseAutoplay,
}: {
  onOpenImage: (src: string) => void;
  pauseAutoplay: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || pauseAutoplay) return;
    const id = window.setInterval(() => {
      api.scrollNext();
    }, 4500);
    return () => window.clearInterval(id);
  }, [api, pauseAutoplay]);

  return (
    <div className="mt-8 relative px-0 sm:px-10 md:px-12">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {comicCarouselImages.map((src, i) => (
            <CarouselItem key={src} className="pl-2 md:pl-4 basis-full sm:basis-4/5 md:basis-3/5 lg:basis-1/2">
              <button
                type="button"
                onClick={() => onOpenImage(src)}
                className="group block w-full text-left rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2"
              >
                <figure className="rounded-3xl overflow-hidden border border-border/70 bg-muted/30 shadow-[0_14px_28px_rgba(0,0,0,0.08)] transition-shadow group-hover:shadow-lg group-hover:ring-2 group-hover:ring-blue-950/35">
                  <img
                    src={src}
                    alt={`Comic strip or advocacy graphic ${i + 1}. Click to open full size.`}
                    className="w-full h-auto max-h-[min(70vh,520px)] object-contain object-center bg-background/80 cursor-zoom-in"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </figure>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="outline"
          className="!left-1 sm:!left-0 top-1/2 -translate-y-1/2 h-10 w-10 border-border bg-background/95 shadow-md z-10"
        />
        <CarouselNext
          variant="outline"
          className="!right-1 sm:!right-0 top-1/2 -translate-y-1/2 h-10 w-10 border-border bg-background/95 shadow-md z-10"
        />
      </Carousel>
      <p className="sr-only">Carousel advances automatically. Click a slide to view it full screen.</p>
    </div>
  );
}

const CreativeAdvocacy = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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
      <Dialog open={!!lightboxSrc} onOpenChange={(open) => !open && setLightboxSrc(null)}>
        <DialogContent className="max-w-[min(95vw,72rem)] w-full p-4 sm:p-6 gap-0 border-blue-950/20">
          <DialogTitle className="sr-only">Comic or graphic   full size</DialogTitle>
          {lightboxSrc ? (
            <img
              src={lightboxSrc}
              alt="Expanded comic or advocacy graphic"
              className="w-full max-h-[min(88vh,900px)] object-contain mx-auto rounded-lg"
            />
          ) : null}
        </DialogContent>
      </Dialog>

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
              Creative Advocacy
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Visual storytelling, zines, and art-based spaces that make invisible disability legible and build solidarity.
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
          <p className="work-kicker mb-4">Creative Advocacy</p>
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
            <button
              type="button"
              onClick={() => setLightboxSrc(images.comic1)}
              className="group text-left rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2"
            >
              <figure className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)] transition-shadow group-hover:ring-2 group-hover:ring-blue-950/35">
                <img
                  src={images.comic1}
                  alt="Comic strip on invisible disabilities 1. Click to enlarge."
                  className="w-full h-auto object-contain cursor-zoom-in"
                  loading="lazy"
                />
              </figure>
            </button>
            <button
              type="button"
              onClick={() => setLightboxSrc(images.comic2)}
              className="group text-left rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2"
            >
              <figure className="rounded-3xl overflow-hidden border border-border/70 bg-background/60 shadow-[0_14px_28px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)] transition-shadow group-hover:ring-2 group-hover:ring-blue-950/35">
                <img
                  src={images.comic2}
                  alt="Comic strip on invisible disabilities 2. Click to enlarge."
                  className="w-full h-auto object-contain cursor-zoom-in"
                  loading="lazy"
                />
              </figure>
            </button>
          </div>

          <div className="mt-10 max-w-3xl border-l-4 border-blue-950 bg-blue-950/[0.06] px-4 py-3.5 sm:px-5 sm:py-4">
            <p className="font-display text-sm sm:text-base font-semibold tracking-wide uppercase text-blue-950">
              Read comics comfortably
            </p>
            <p className="mt-1.5 text-sm sm:text-base text-blue-950/95 leading-relaxed font-medium">
              Click any comic above or any slide in the carousel below to open it full size easier to read small text and details.
            </p>
          </div>

          <ComicStripCarousel onOpenImage={setLightboxSrc} pauseAutoplay={!!lightboxSrc} />
        </div>
      </section>

      {/* Zine workshops */}
      <section className="py-16 md:py-20 bg-muted/25 border-y border-border/60">
        <div className="container-section max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold tracking-tight mb-3">Zine & Art-Based Workshops</h2>
          <p className="work-kicker mb-10">Zine workshops</p>

          <div className="space-y-10">
            {/* 1 MS Society */}
            <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl text-foreground font-bold">1. MS Society of India</h3>
                  <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                    On the occasion of World Multiple Sclerosis Day, BITI brought an{" "}
                    <a
                      href={MS_ZINE_INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary underline decoration-primary decoration-2 underline-offset-[5px] hover:decoration-primary/80 hover:text-primary/90 transition-colors"
                    >
                      online zine-making workshop
                    </a>{" "}
                    to the MS community to celebrate the global MS movement navigating MS together, with the powerful theme: &quot;My MS
                    Diagnosis.&quot; We folded paper, splashed colors, and stitched pieces of our journeys into handmade zines. It wasn’t just art
                    - it was a rebellion against invisibility. It was healing. It was freedom.
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
          <p className="work-kicker mb-4">Art therapy workshop</p>
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
