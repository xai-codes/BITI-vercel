import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:believeintheinvisible2022@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    window.open(mailtoLink);
  };

  return (
    <div>
      <section className="section-yellow py-20">
        <div className="container-section text-center">
          <h1 className="text-4xl sm:text-6xl mb-4">Contact Us</h1>
          <p className="text-lg opacity-80">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <a
                href="https://maps.google.com/?q=5/79,+Shivaji+Nagar,+Gurugram,+Basai+Road,+Haryana,+India+122001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-display mb-1">Registered Office</h3>
                  <p className="text-base text-muted-foreground group-hover:text-primary transition-colors">
                    5/79, Shivaji Nagar, Gurugram, Basai Road, Haryana, India – 122001
                  </p>
                </div>
              </a>

              <a
                href="tel:+919818534862"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-display mb-1">Phone</h3>
                  <p className="text-base text-muted-foreground group-hover:text-primary transition-colors">+91 9818534862</p>
                  <a href="tel:+918668244276" className="text-base text-muted-foreground hover:text-primary transition-colors">+91 8668244276</a>
                </div>
              </a>

              <a
                href="mailto:believeintheinvisible2022@gmail.com"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-display mb-1">Email</h3>
                  <p className="text-base text-muted-foreground group-hover:text-primary transition-colors">believeintheinvisible2022@gmail.com</p>
                </div>
              </a>

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d76.98!3d28.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjAiTiA3NsKwNTgnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BITI Office Location"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-charcoal text-charcoal-foreground py-3 font-display text-lg tracking-wide hover:opacity-90 transition-opacity rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
