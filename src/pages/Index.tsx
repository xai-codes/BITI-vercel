import { Link } from "react-router-dom";
import { ArrowRight, Users, Scale, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";
import flowerImg from "/flower.png";
import TestimonialSlider from "@/components/TestimonialSlider";
import ScrollHighlightText from "@/components/ScrollHighlightText";
import EventsSlider from "@/components/EventsSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useCallback } from "react";

// ── Cursor arrow canvas hook ───────────────────────────────────────────────
const useCursorArrow = (targetRef: React.RefObject<HTMLElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animFrameRef = useRef<number>(0);

  const drawArrow = useCallback(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const target = targetRef.current;
    const { x: x0, y: y0 } = mousePosRef.current;

    if (!ctx || !canvas || !target || x0 === null || y0 === null) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rect = target.getBoundingClientRect();

    // Get canvas position to offset mouse coords correctly
    const canvasRect = canvas.getBoundingClientRect();
    const mx = x0 - canvasRect.left;
    const my = y0 - canvasRect.top;

    const cx = rect.left - canvasRect.left + rect.width / 2;
    const cy = rect.top - canvasRect.top + rect.height / 2;

    const dx = cx - mx;
    const dy = cy - my;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Fade zones:
    // - Too close (inside image bounds ~80px): fade to 0
    // - Close range (80–250px): fade in from 0 → full
    // - Medium/far (250px+): full opacity
    const tooCloseRadius = 80;
    const fadeInEnd = 250;

    let opacity = 0;
    if (dist <= tooCloseRadius) {
      opacity = 0; // fully hidden when overlapping image
    } else if (dist <= fadeInEnd) {
      // fade in as cursor moves away from image
      opacity = (dist - tooCloseRadius) / (fadeInEnd - tooCloseRadius);
    } else {
      opacity = 1.0;
    }

    if (opacity <= 0.01) return;

    // Arrow tip — stop short of the image edge
    const a = Math.atan2(dy, dx);
    const edgePadding = Math.max(rect.width, rect.height) / 2 + 14;
    const x1 = cx - Math.cos(a) * edgePadding;
    const y1 = cy - Math.sin(a) * edgePadding;

    // Curved control point
    const midX = (mx + x1) / 2;
    const midY = (my + y1) / 2;
    const curveOffset = Math.min(180, dist * 0.4);
    const t = Math.max(-1, Math.min(1, (my - y1) / 200));
    const controlX = midX;
    const controlY = midY + curveOffset * t;

    // Draw dashed curve
    ctx.save();
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.stroke();
    ctx.restore();

    // Draw arrowhead (solid, no dash)
    const headAngle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLen = 13;
    ctx.save();
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLen * Math.cos(headAngle - Math.PI / 6),
      y1 - headLen * Math.sin(headAngle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLen * Math.cos(headAngle + Math.PI / 6),
      y1 - headLen * Math.sin(headAngle + Math.PI / 6)
    );
    ctx.stroke();
    ctx.restore();
  }, [targetRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctxRef.current = canvas.getContext("2d");

    const resize = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mousePosRef.current = { x: null, y: null };
      const ctx = ctxRef.current;
      const c = canvasRef.current;
      if (ctx && c) ctx.clearRect(0, 0, c.width, c.height);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);
    resize();

    const loop = () => {
      drawArrow();
      animFrameRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawArrow]);

  return canvasRef;
};
// ──────────────────────────────────────────────────────────────────────────

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const flowerRef = useRef<HTMLImageElement>(null);
  const canvasRef = useCursorArrow(flowerRef as React.RefObject<HTMLElement>);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-charcoal/20 to-transparent" />
        </div>

        {/* Canvas scoped to hero section */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />

        <div className="container-section relative z-10 py-20 w-full">
          <div className="flex items-center justify-between gap-8 w-full">

            {/* LEFT: Text content */}
            <div className="max-w-2xl animate-fade-in">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-sm font-display tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Women-led Non-profit
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-none mb-6 text-primary">
                Believe In<br />The Invisible
              </h1>

              <p className="text-xl sm:text-2xl mb-4 text-charcoal-foreground/90 max-w-xl leading-relaxed">
                Redefining the disability narrative around invisible disabilities.
              </p>

              {/* Accent divider */}
              <div className="w-16 h-0.5 bg-primary rounded-full mb-6" />

              {/* Stat callout */}
              <p className="text-sm text-charcoal-foreground/70 font-display tracking-wide mb-8 max-w-sm">
                75% of people with disabilities have an invisible or non-apparent disability.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-display text-lg tracking-wide hover:opacity-90 transition-opacity"
                >
                  Explore Our Work <ArrowRight size={20} />
                </Link>
                <a
                  href="https://forms.gle/LkVgyVU1EzofobnD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 font-display text-lg tracking-wide hover:opacity-90 transition-opacity"
                >
                  Share Your Story
                </a>
              </div>
            </div>

            {/* RIGHT: Flower — cursor arrow points here */}
            <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
              <img
                ref={flowerRef}
                src={flowerImg}
                alt="Decorative flower"
                className="w-80 h-80 xl:w-[26rem] xl:h-[26rem] object-contain"
                style={{
                  filter: "drop-shadow(0 0 48px rgba(255,255,255,0.18))",
                  animation: "floatHero 6s ease-in-out infinite",
                }}
              />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
          <span className="text-charcoal-foreground text-xs font-display tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-charcoal-foreground/60" />
        </div>

        <style>{`
          @keyframes floatHero {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33%       { transform: translateY(-14px) rotate(1.5deg); }
            66%       { transform: translateY(-6px) rotate(-1deg); }
          }
        `}</style>
      </section>

      {/* ABOUT - SCROLL HIGHLIGHT TEXT */}
      <ScrollHighlightText text="Believe in the Invisible (BITI) is a women-led non-profit redefining the disability narrative. Founded and driven by leaders with lived experience, we bridge the gap between societal perception and the reality of invisible disabilities through storytelling, art, and advocacy." />

      <div className="bg-background pb-6 text-center">
        <ScrollReveal>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-display text-xl tracking-wide text-foreground hover:text-primary transition-colors"
          >
            Learn More About Us <ArrowRight size={20} />
          </Link>
        </ScrollReveal>
      </div>

      {/* MISSION */}
      <section className="section-yellow py-20">
        <div className="container-section">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl mb-10 text-center">Our Mission</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Inclusive Employment", desc: "Sensitizing global workplaces to hidden needs." },
              { icon: Scale, title: "Policy Reform", desc: "Driving legislative recognition and reasonable accommodation." },
              { icon: Heart, title: "Social Equity", desc: "Highlighting how disability intersects with gender, education, and healthcare." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="bg-primary-foreground/10 p-8 rounded-lg text-center">
                  <item.icon size={40} className="mx-auto mb-4" />
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="py-20 bg-background">
        <div className="container-section">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl sm:text-5xl">Our Work</h2>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-display text-lg tracking-wide hover:text-primary transition-colors"
              >
                View All <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ScrollReveal delay={0}>
              <div className="group bg-muted rounded-xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/our-work/biti-camp.jpg" 
                    alt="Believe in the Invisible Campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm font-display tracking-widest text-primary">2022</span>
                  <h3 className="text-2xl sm:text-3xl mt-2 mb-3 normal-case">Believe in the Invisible Campaign</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The flagship campaign that started it all — amplifying voices of people living with invisible disabilities through storytelling and art.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="group bg-muted rounded-xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/our-work/care-is-bel.jpg" 
                    alt="Caring is Believing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm font-display tracking-widest text-primary">2023</span>
                  <h3 className="text-2xl sm:text-3xl mt-2 mb-3 normal-case">Caring is Believing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A caregivers-focused initiative spotlighting the unsung heroes behind invisible disability support systems.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Disability Pride in Progress", year: "2025", desc: "Celebrating disability culture, identity, and pride through community-driven events.", image: "/our-work/disable-pride-in-prog.jpg" },
              { title: "Disabled Love Series", year: "", desc: "Exploring love, intimacy, and relationships through the lens of disability.", image: "/our-work/disable-love-series.png" },
              { title: "Pain Awareness Month", year: "", desc: "Raising visibility for chronic pain conditions and invisible suffering.", image: "/our-work/pain-month.jpg" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="group bg-muted rounded-xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    {item.year && <span className="text-xs font-display tracking-widest text-primary">{item.year}</span>}
                    <h3 className="text-lg mt-1 normal-case">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS AUTO-SLIDER */}
      <ScrollReveal>
        <EventsSlider />
      </ScrollReveal>

      {/* ACHIEVEMENTS PREVIEW */}
      <section className="py-20 bg-background">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl mb-6">Achievements</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="aspect-[3/1] max-w-2xl mx-auto bg-muted rounded-lg mb-8 overflow-hidden">
              <img 
                src="/achievements/achievements.jpg" 
                alt="BITI Achievements"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {["Accessible IELTS Initiative", "Micro-seed Grant", "C4AC RE:ACT Lab", "Featured at Kalaneri Art Gallery"].map((item, i) => (
              <ScrollReveal key={item} delay={i * 100}>
                <div className="bg-primary/20 p-4 rounded-lg text-sm font-display tracking-wide">{item}</div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 font-display text-lg tracking-wide hover:text-primary transition-colors"
            >
              View Achievements <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIAL AUTO-SLIDER */}
      <ScrollReveal>
        <TestimonialSlider />
      </ScrollReveal>

      {/* TEAM PREVIEW */}
      <section className="py-20 bg-background">
        <div className="container-section text-center">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl mb-10">Our Team</h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Anjali Vyas", role: "Co-Founder, Advocacy Lead", image: "/team/anjali.png" },
              { name: "Aarti Batra", role: "Co-Founder, Research Lead", image: "/team/aarti.png" },
              { name: "Shashank Pandey", role: "Legal & Policy Advisor", image: "/team/pandey.png" },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 150}>
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-charcoal/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-base normal-case">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 font-display text-lg tracking-wide hover:text-primary transition-colors"
              >
                Meet The Team <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SHARE YOUR STORY - SCROLL HIGHLIGHT */}
      <ScrollReveal>
        <section className="section-yellow py-10">
          <div className="container-section text-center max-w-4xl">
            <h2 className="text-4xl sm:text-6xl mb-8">SHARE YOUR STORY !!</h2>
          </div>
        </section>
      </ScrollReveal>

      <div className="bg-primary text-primary-foreground">
        <ScrollHighlightText text="According to Global Disability Inclusion, LLC, 75% of people with disabilities have an invisible or non-apparent disability. Undisclosed invisible disabilities remain hidden, fueling misconceptions and societal barriers. Join us in raising awareness by sharing your experiences. Your voice can make a difference!" />
      </div>

      {/* SHARE YOUR STORY - BUTTON + QR + FLOWER */}
      <section className="section-yellow py-16">
        <div className="container-section max-w-5xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-12">

            {/* LEFT: Button */}
            <ScrollReveal delay={0} className="flex-1 flex justify-center">
              <a
                href="https://forms.gle/LkVgyVU1EzofobnD7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-3 bg-charcoal text-charcoal-foreground px-10 py-6 font-display text-xl tracking-wide hover:opacity-90 transition-opacity rounded-xl"
              >
                Share Your Story <ArrowRight size={24} />
              </a>
            </ScrollReveal>

            {/* MIDDLE: QR Code */}
            <ScrollReveal delay={100} className="flex-1 flex flex-col items-center gap-3">
              <p className="text-sm font-display tracking-wide opacity-70">Or scan the QR code below!</p>
              <div className="w-48 h-48 bg-background/30 rounded-2xl overflow-hidden border-2 border-charcoal/20">
                <img 
                  src="/shareqr.png" 
                  alt="Share Your Story QR Code"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </ScrollReveal>

            {/* RIGHT: Flower */}
            <ScrollReveal delay={200} className="flex-1 flex justify-center">
              <img
                src={flowerImg}
                alt="Decorative flower"
                className="w-56 h-56 object-contain drop-shadow-lg"
              />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* FLOATING DONATE BUTTON */}
     <Link
  to="/donate"
  className="
    fixed bottom-4 right-4 sm:bottom-8 sm:right-8
    z-50
    bg-primary text-primary-foreground
    px-4 py-2 sm:px-6 sm:py-4
    rounded-full
    font-display
    text-sm sm:text-lg
    tracking-wide
    shadow-lg
    hover:scale-105
    transition-transform
    flex items-center gap-2
    animate-fade-in
  "
>
  <Heart size={16} className="sm:w-5 sm:h-5" />
  <span className="hidden xs:inline sm:inline">Donate Now</span>
</Link>

    </div>
  );
};

export default Index;