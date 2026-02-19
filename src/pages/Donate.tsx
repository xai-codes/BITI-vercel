import { Heart, ArrowRight } from "lucide-react";
import ScrollHighlightText from "@/components/ScrollHighlightText";

const Donate = () => {
  return (
    <div>
      <section className="section-charcoal py-20">
        <div className="container-section text-center">
          <Heart size={48} className="mx-auto mb-6 text-primary" />
          <h1 className="text-4xl sm:text-6xl lg:text-8xl mb-6 text-primary">Support Our Cause</h1>
          <p className="text-xl text-charcoal-foreground/80">Every contribution fuels the movement</p>
        </div>
      </section>

      <ScrollHighlightText text="Your donation helps us continue our mission to dismantle the stigma surrounding invisible disabilities. Every contribution — big or small — empowers advocacy, fuels research, and builds a more inclusive world for millions whose challenges remain unseen." />

      <section className="section-yellow py-20">
        <div className="container-section max-w-4xl">
          <h2 className="text-3xl sm:text-5xl mb-12 text-center">How Your Donation Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Advocacy & Awareness", desc: "Fund campaigns that amplify the voices of people with invisible disabilities across India and globally." },
              { title: "Research & Training", desc: "Support development of accessible training materials, research reports, and policy recommendations." },
              { title: "Community Building", desc: "Enable peer support networks, workshops, and events that foster connection and empowerment." },
            ].map((item) => (
              <div key={item.title} className="bg-primary-foreground/10 p-8 rounded-xl text-center">
                <h3 className="text-xl sm:text-2xl mb-4 normal-case">{item.title}</h3>
                <p className="text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-section text-center max-w-2xl">
          <h2 className="text-3xl sm:text-5xl mb-8">Make a Donation</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            To donate, please reach out to us directly via email or scan the QR code below. We'll provide you with bank transfer details and acknowledge your contribution.
          </p>

          <a
            href="mailto:believeintheinvisible2022@gmail.com?subject=Donation Inquiry"
            className="inline-flex items-center gap-2 bg-charcoal text-charcoal-foreground px-10 py-5 font-display text-xl tracking-wide hover:opacity-90 transition-opacity rounded-lg mb-10"
          >
            Contact Us to Donate <ArrowRight size={22} />
          </a>

          <div className="mt-8">
            <p className="text-sm font-display tracking-wide opacity-70 mb-4">Or scan the QR code</p>
            <div className="flex justify-center">
              <div className="w-40 h-40 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground border-2 border-foreground/10">
                Donation QR
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
