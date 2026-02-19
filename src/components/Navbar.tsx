import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import bitiLogo from "/bitilogo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Work", path: "/work" },
  { label: "Events", path: "/events" },
  { label: "Achievements", path: "/achievements" },
  { label: "Resources", path: "/resources" },
  { label: "Team", path: "/team" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
  { label: "Donate", path: "/donate" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 text-charcoal-foreground transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-charcoal"
        }`}
      >
        <div className="container-section flex items-center justify-between h-20">

          {/* ── LOGO ── */}
          <Link
            to="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/70 transition-all duration-300 group-hover:scale-105">
              <img
                src={bitiLogo}
                alt="BITI Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              {/* <span className="font-display text-sm tracking-[0.2em] text-primary">
                BITI
              </span> */}
              <span className="font-display text-xs tracking-widest text-charcoal-foreground/60 uppercase">
                Believe In The Invisible
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isDonate = link.label === "Donate";

              if (isDonate) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="ml-4 px-5 py-2 bg-primary text-primary-foreground font-display text-base tracking-wider hover:opacity-90 transition-opacity rounded-lg"
                  >
                    Donate
                  </Link>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-base font-display tracking-wide transition-colors duration-200 group ${
                    isActive
                      ? "text-primary"
                      : "text-charcoal-foreground/70 hover:text-charcoal-foreground"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-primary rounded-full transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-charcoal-foreground/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block transition-all duration-300 ${
                open ? "rotate-90 opacity-100" : "rotate-0 opacity-100"
              }`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </span>
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-charcoal-foreground/10 py-2">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              const isDonate = link.label === "Donate";
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3.5 text-base font-display tracking-wide transition-colors duration-150 ${
                    isDonate
                      ? "text-primary font-semibold"
                      : isActive
                      ? "text-primary bg-primary/5"
                      : "text-charcoal-foreground/80 hover:text-charcoal-foreground hover:bg-charcoal-foreground/5"
                  }`}
                  style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                >
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;