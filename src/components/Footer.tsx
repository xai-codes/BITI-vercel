import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-section py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* About */}
          <div className="lg:col-span-4">
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">About BITI</h3>
            <p className="text-base leading-relaxed text-charcoal-foreground/95">
              A women-led non-profit redefining the disability narrative around invisible disabilities through storytelling, art, and advocacy.
            </p>
            <p className="text-base leading-relaxed text-charcoal-foreground/90 mt-4">
              Founded and driven by leaders with lived experience, we bridge the gap between societal perception and the reality of invisible disabilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 lg:justify-self-center lg:pl-6">
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-base justify-items-start">
              {[
                { label: "Home", path: "/" },
                { label: "Our Team", path: "/team" },
                { label: "Our Work", path: "/work" },
                { label: "Our Achievements", path: "/achievements" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Resources", path: "/resources" },
                { label: "Blogs", path: "/blogs" },
                { label: "Donate", path: "/donate" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-4 lg:justify-self-end lg:text-right">
            <h3 className="text-xl sm:text-2xl mb-5 text-primary">Connect</h3>
            <div className="flex flex-wrap gap-4 mb-6 lg:justify-end">
              <a
                href="https://www.linkedin.com/company/believe-in-the-invisible/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/believeintheinvisible/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaH8ZQGJP21An5oZwN0Z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="https://x.com/BelieveInvisibl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="X (Twitter)"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://youtube.com/@believeintheinvisible?si=FqEAQLyHjIuzFBqg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
            </div>
            <ul className="mt-6 space-y-3 text-base lg:ml-auto lg:max-w-md">
              <li>
                <a
                  href="https://www.linkedin.com/company/believe-in-the-invisible/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  LinkedIn: Believe In The Invisible
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/believeintheinvisible/?locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  Instagram: believeintheinvisible
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VaH8ZQGJP21An5oZwN0Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  WhatsApp Channel: Believe In The Invisible
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/BelieveInvisibl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  X (Twitter): BelieveInvisibl
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@believeintheinvisible?si=FqEAQLyHjIuzFBqg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                >
                  YouTube: @believeintheinvisible
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-foreground/10 mt-14 pt-8 flex flex-col items-center text-center gap-4">
          <p className="text-base sm:text-lg text-charcoal-foreground/80 leading-relaxed max-w-2xl">
            Designed and built by{" "}
            <a
              href="https://commsforacause.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/90 hover:underline underline-offset-2 transition-colors"
            >
              C4AC Labs
            </a>
            .
          </p>
          <p className="text-sm sm:text-base text-charcoal-foreground/75">
            © {new Date().getFullYear()} Believe In The Invisible. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
