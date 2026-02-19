import { useEffect, useRef, useState } from "react";

interface ScrollHighlightTextProps {
  text: string;
}

const ScrollHighlightText = ({ text }: ScrollHighlightTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start highlighting when section enters viewport, complete when it's centered
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const current = rect.top;
      
      if (current > start) {
        setProgress(0);
      } else if (current < end) {
        setProgress(1);
      } else {
        setProgress((start - current) / (start - end));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split into words
  const words = text.split(" ");
  const totalWords = words.length;

  return (
    <div ref={containerRef} className="py-20 bg-background">
      <div className="container-section max-w-5xl">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight tracking-wide">
          {words.map((word, i) => {
            const wordProgress = i / totalWords;
            const isHighlighted = wordProgress < progress;
            
            return (
              <span
                key={i}
                className={`transition-colors duration-300 ${
                  isHighlighted
                    ? "text-foreground"
                    : "text-muted-foreground/30"
                }`}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ScrollHighlightText;
