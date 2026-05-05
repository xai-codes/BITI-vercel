import {
  ArrowRight,
  CircleCheck,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { getEmailJsConfig } from "@/config/emailjs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  useEffect(() => {
    const { publicKey, ok } = getEmailJsConfig();
    if (ok) {
      emailjs.init({ publicKey });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { serviceId, templateId, publicKey, ok } = getEmailJsConfig();

    if (!ok) {
      toast.error(
        "Email is not configured. Create a `.env` file in the project root with VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY (see `.env.example`).",
      );
      return;
    }
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setForm({ name: "", email: "", message: "" });
      setSuccessDialogOpen(true);
    } catch (err) {
      console.error(err);
      const detail =
        err instanceof EmailJSResponseStatus
          ? err.text
          : err instanceof Error
            ? err.message
            : null;
      toast.error(
        detail
          ? `${detail} If this persists, confirm Service ID and Public Key are from the same EmailJS account and restart the dev server after editing .env.`
          : "Could not send your message. Please try email or phone instead.",
      );
    } finally {
      setSending(false);
    }
  };

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
                Contact
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Contact us
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              We’d love to hear from you. Reach out directly or send a message either way, we’ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-sm">
                <h2 className="text-2xl md:text-3xl text-foreground font-bold mb-6">Reach us</h2>

                <div className="space-y-6 text-base sm:text-lg">
                  <a
                    href="https://maps.google.com/?q=5/79,+Shivaji+Nagar,+Gurugram,+Basai+Road,+Haryana,+India+122001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-950/10 text-blue-950 flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground font-bold text-lg sm:text-xl">Registered Office</p>
                      <p className="mt-1 text-foreground/90 leading-relaxed break-words group-hover:text-blue-950 transition-colors">
                        5/79, Shivaji Nagar, Gurugram, Basai Road, Haryana, India – 122001
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/10 text-blue-950 flex items-center justify-center shrink-0">
                      <Phone size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground font-bold text-lg sm:text-xl">Phone</p>
                      <div className="mt-1 space-y-1">
                        <a href="tel:+919818534862" className="block text-foreground/90 hover:text-blue-950 transition-colors font-medium">
                          +91 9818534862
                        </a>
                        <a href="tel:+918668244276" className="block text-foreground/90 hover:text-blue-950 transition-colors font-medium">
                          +91 8668244276
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/10 text-blue-950 flex items-center justify-center shrink-0">
                      <Mail size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground font-bold text-lg sm:text-xl">Email</p>
                      <a
                        href="mailto:connect@believeintheinvisible.org"
                        className="mt-1 block text-foreground/90 hover:text-blue-950 transition-colors break-all font-medium"
                      >
                        connect@believeintheinvisible.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-display text-lg font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 w-full sm:w-auto"
                  >
                    Donate <ArrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-sm">
                <h2 className="text-xl md:text-2xl text-foreground font-bold mb-5">Follow</h2>
                <ul className="space-y-3.5 text-base text-foreground/85">
                  <li className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue-950 shrink-0" aria-hidden />
                    <a
                      href="https://www.linkedin.com/company/believe-in-the-invisible/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-950 transition-colors"
                    >
                      LinkedIn: Believe In The Invisible
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-blue-950 shrink-0" aria-hidden />
                    <a
                      href="https://www.instagram.com/believeintheinvisible/?locale=en_GB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-950 transition-colors"
                    >
                      Instagram: believeintheinvisible
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-blue-950 shrink-0" aria-hidden />
                    <a
                      href="https://whatsapp.com/channel/0029VaH8ZQGJP21An5oZwN0Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-950 transition-colors"
                    >
                      WhatsApp Channel: Believe In The Invisible
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-blue-950 shrink-0" aria-hidden />
                    <a
                      href="https://x.com/BelieveInvisibl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-950 transition-colors"
                    >
                      X (Twitter): BelieveInvisibl
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Youtube className="h-5 w-5 text-blue-950 shrink-0" aria-hidden />
                    <a
                      href="https://youtube.com/@believeintheinvisible?si=FqEAQLyHjIuzFBqg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-950 transition-colors break-all"
                    >
                      YouTube: @believeintheinvisible
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border/70 bg-card p-7 sm:p-8 shadow-sm">
                <h2 className="text-2xl text-foreground font-bold mb-2">Send a message</h2>
                <p className="text-foreground/75 leading-relaxed mb-7">
                  Send us a message below. Include as much detail as you can so we can respond faster.
                </p>

                <form ref={formRef} id="biti-contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-1 text-foreground/80">
                      Name
                    </label>
                    <input
                      id="name"
                      name="from_name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-blue-950/25 rounded-xl bg-background text-foreground placeholder:text-foreground/45 focus:border-blue-950 focus:ring-2 focus:ring-blue-950/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-1 text-foreground/80">
                      Email
                    </label>
                    <input
                      id="email"
                      name="from_email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-blue-950/25 rounded-xl bg-background text-foreground placeholder:text-foreground/45 focus:border-blue-950 focus:ring-2 focus:ring-blue-950/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-1 text-foreground/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      maxLength={1000}
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-blue-950/25 rounded-xl bg-background text-foreground placeholder:text-foreground/45 focus:border-blue-950 focus:ring-2 focus:ring-blue-950/20 outline-none resize-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-charcoal-foreground py-3 font-display text-lg tracking-wide hover:opacity-90 transition-opacity rounded-xl disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {sending ? "Sending…" : "Send message"} <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-12">
              <div className="rounded-2xl overflow-hidden border border-border/70 bg-card shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d76.98!3d28.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjAiTiA3NsKwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BITI Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <DialogContent className="sm:max-w-md border-border/80 p-8 text-center [&>button]:text-foreground/70">
          <div className="flex flex-col items-center gap-5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary ring-4 ring-primary/10"
              aria-hidden
            >
              <CircleCheck className="h-9 w-9" strokeWidth={2} />
            </div>
            <DialogHeader className="space-y-2 text-center sm:text-center">
              <DialogTitle className="text-xl font-bold tracking-tight">Message sent</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                Thank you for reaching out. We will get back to you soon.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="w-full flex-col gap-0 pt-1 sm:flex-row sm:justify-center">
              <Button
                type="button"
                className="w-full sm:w-auto min-w-[140px] rounded-xl font-display tracking-wide"
                onClick={() => setSuccessDialogOpen(false)}
              >
                Got it
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
