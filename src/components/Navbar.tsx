import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import bitiLogo from "/home/bitilogo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const workDropdownItems = [
  { label: "Digital Storytelling Campaigns", to: "/work#digital-storytelling-campaigns" },
  { label: "Workplace Inclusion & Employer Engagement", to: "/workplace-inclusion" },
  { label: "Accessible IELTS for Persons with Disabilities", to: "/accessible-ielts" },
  { label: "Capacity Building & Academic Partnerships", to: "/capacity-building" },
  { label: "Experiential Advocacy & Public Engagement", to: "/experiential-advocacy" },
  { label: "Creative Advocacy", to: "/creative-advocacy" },
];

const navAfterWork = [
  { label: "Our Achievements", path: "/achievements" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Resources", path: "/resources" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
  { label: "Donate", path: "/donate", cta: true as const },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setWorkOpen(false);
  }, [location.pathname, location.hash]);

  const linkClass = (active: boolean) =>
    cn(
      "relative px-3 py-2 text-base font-semibold font-display tracking-wide transition-colors duration-200 rounded-md",
      active ? "text-primary" : "text-charcoal-foreground/90 hover:text-charcoal-foreground",
    );

  const isWorkActive = location.pathname === "/work";

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 bg-charcoal text-charcoal-foreground border-b border-white/10",
        scrolled && "shadow-sm shadow-black/25",
      )}
    >
      <div className="w-full flex items-center justify-between min-h-[4.5rem] px-4 sm:px-6 lg:px-10 gap-4">
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
          <img
            src={bitiLogo}
            alt="BITI Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
          />
          <div className="hidden sm:flex flex-col leading-[1.05] min-w-0 pl-0.5">
            <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.1em] text-charcoal-foreground uppercase truncate">
              Believe In The Invisible
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center justify-end gap-0.5 flex-wrap max-w-[min(72rem,100%)]">
          <Link to="/" className={cn("group", linkClass(location.pathname === "/"))}>
            Home
            <span
              className={cn(
                "absolute bottom-0.5 left-3 right-3 h-px rounded-full bg-primary transition-all origin-center",
                location.pathname === "/" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100",
              )}
            />
          </Link>
          <Link to="/team" className={linkClass(location.pathname === "/team")}>
            Our Team
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-2 text-base font-semibold font-display tracking-wide rounded-md outline-none",
                isWorkActive ? "text-primary" : "text-charcoal-foreground/90 hover:text-charcoal-foreground",
              )}
            >
              Our Work
              <ChevronDown className="h-4 w-4 opacity-80" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[min(22rem,calc(100vw-2rem))] max-h-[min(24rem,70vh)] overflow-y-auto z-50 p-1.5"
            >
              {workDropdownItems.map((item) => (
                <DropdownMenuItem key={item.to} asChild className="cursor-pointer text-[15px] font-medium py-2.5">
                  <Link to={item.to}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navAfterWork.map((item) =>
            item.cta ? (
              <Link
                key={item.path}
                to={item.path}
                className="ml-1 px-5 py-2.5 bg-primary text-primary-foreground font-display text-base font-semibold tracking-wide hover:opacity-90 transition-opacity rounded-lg"
              >
                Donate
              </Link>
            ) : (
              <Link key={item.path} to={item.path} className={linkClass(location.pathname === item.path)}>
                {item.label}
              </Link>
            ),
          )}
        </div>

        <button
          type="button"
          className="xl:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-charcoal-foreground shrink-0"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "xl:hidden overflow-hidden transition-all duration-300 ease-in-out bg-charcoal border-t border-white/10 text-charcoal-foreground",
          open ? "max-h-[min(100vh,1000px)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="py-2 px-2 space-y-0.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={cn(
              "block px-4 py-3 rounded-lg text-base font-semibold font-display",
              location.pathname === "/" ? "bg-primary/15 text-primary" : "text-charcoal-foreground hover:bg-white/10",
            )}
          >
            Home
          </Link>
          <Link
            to="/team"
            onClick={() => setOpen(false)}
            className={cn(
              "block px-4 py-3 rounded-lg text-base font-semibold font-display",
              location.pathname === "/team" ? "bg-primary/15 text-primary" : "text-charcoal-foreground hover:bg-white/10",
            )}
          >
            Our Team
          </Link>

          <div className="rounded-lg border border-border/50 overflow-hidden">
            <button
              type="button"
              onClick={() => setWorkOpen(!workOpen)}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-semibold font-display text-left hover:bg-white/10"
              aria-expanded={workOpen}
            >
              Our Work
              <ChevronDown className={cn("h-5 w-5 transition-transform", workOpen && "rotate-180")} />
            </button>
            {workOpen && (
              <div className="bg-white/5 border-t border-white/10 py-1">
                {workDropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-2.5 text-[15px] font-medium text-charcoal-foreground/90 hover:bg-white/10 hover:text-charcoal-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navAfterWork.map((item) =>
            item.cta ? (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block mx-2 mt-2 text-left px-4 py-3 rounded-lg bg-primary text-primary-foreground font-display text-base font-semibold"
              >
                Donate
              </Link>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-semibold font-display",
                  location.pathname === item.path ? "bg-primary/15 text-primary" : "text-charcoal-foreground hover:bg-white/10",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
