import { Link } from "react-router-dom";
import { Linkedin, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-section py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">About BITI</h3>
            <p className="text-base leading-relaxed opacity-80">
              A women-led non-profit redefining the disability narrative around invisible disabilities through storytelling, art, and advocacy.
            </p>
            <p className="text-base leading-relaxed opacity-70 mt-4">
              Founded and driven by leaders with lived experience, we bridge the gap between societal perception and the reality of invisible disabilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">Quick Links</h3>
            <ul className="space-y-3 text-base">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Our Work", path: "/work" },
                { label: "Events", path: "/events" },
                { label: "Achievements", path: "/achievements" },
                { label: "Resources", path: "/resources" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Team", path: "/team" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/company/believeintheinvisible"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/believeintheinvisible"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://wa.me/919818534862"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <Phone size={22} />
              </a>
            </div>
            <p className="text-base opacity-70">
              Reach out to us on social media or WhatsApp. We'd love to hear from you!
            </p>
          </div>

          {/* QR Codes */}
          <div>
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">Scan to Connect</h3>
            <div className="flex gap-4">
              <div className="w-28 h-28 bg-charcoal-foreground/10 rounded-lg overflow-hidden border border-charcoal-foreground/20">
                <img 
                  src="/linkedinqr.png" 
                  alt="LinkedIn QR Code"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="w-28 h-28 bg-charcoal-foreground/10 rounded-lg overflow-hidden border border-charcoal-foreground/20">
                <img 
                  src="/instaqr.png" 
                  alt="Instagram QR Code"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-foreground/10 mt-14 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Believe In The Invisible. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
