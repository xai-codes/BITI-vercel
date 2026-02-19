import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Accessible IELTS Training for Persons with Disabilities",
      desc: "Led a first-of-its-kind national initiative with support from the Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & Empowerment, Government of India.",
      details: "Resulted in an accessible IELTS Training Handbook and capacity-building of trainers across National Institutes. This initiative set a benchmark for inclusive testing practices in India and was recognized as a model for other countries to follow.",
      imageCount: 3,
    },
    {
      title: "C4AC RE:ACT Lab Pilot Program",
      desc: "Selected as one of three organizations in India for a prestigious 6-month pilot initiative funded by the Urgent Action Fund.",
      details: "Provided a dedicated micro-grant and expert accompaniment to fortify narrative strategy, visual identity, and digital security. The program helped BITI develop a robust communications framework and strengthen organizational resilience.",
      imageCount: 2,
    },
    {
      title: "Micro Seed Grant – GNYPWD",
      desc: "Recipient of the Micro-seed grant from the Global Network of Young Persons with Disabilities, a U.S.-based organization dedicated to empowering young people with disabilities.",
      details: "This grant supported advocacy efforts for individuals with invisible disabilities, enabling grassroots campaigns, awareness drives, and community building across multiple Indian states.",
      imageCount: 2,
    },
    {
      title: "Featured at Kalaneri Art Gallery",
      desc: "Prominently featured at the Rare Diseases Awareness Exhibition on March 3rd, 2024, at Jaipur's renowned Kalaneri Art Gallery.",
      details: "The exhibition illuminated the intricacies of rare diseases prevalent in the country, using art as a medium to educate and inspire empathy. BITI's contribution included interactive installations and storytelling panels.",
      imageCount: 4,
    },
    {
      title: "Featured by NGO Trinayani",
      desc: "Featured by NGO Trinayani in their film on invisible disabilities during the International Purple Fest Goa 2024.",
      details: "The film included real-life stories from people with invisible disabilities, bringing their experiences to a national and international audience. It was screened at multiple events and received widespread media coverage.",
      imageCount: 2,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <section className="section-yellow py-20">
        <div className="container-section text-center">
          <h1 className="text-4xl sm:text-6xl mb-4">Achievements</h1>
          <p className="text-lg opacity-80">Milestones of impact</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-section">
          <div className="aspect-[3/1] max-w-3xl mx-auto bg-muted rounded-lg mb-12 overflow-hidden">
            <img 
              src="/achievements/achievements.jpg" 
              alt="BITI Achievements"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl overflow-hidden ${i % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/20'}`}
              >
                {/* Main image placeholder */}
                <div className="aspect-[16/10] bg-muted flex items-center justify-center text-sm text-muted-foreground">
                  Replace with official image
                </div>

                <div className="p-8">
                  <h2 className="text-xl sm:text-2xl mb-3 normal-case">{item.title}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">{item.desc}</p>

                  {/* Dropdown */}
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center gap-2 font-display text-sm tracking-wide text-primary hover:opacity-80 transition-opacity"
                  >
                    {openIndex === i ? "Show Less" : "Read More"}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openIndex === i && (
                    <div className="mt-4 animate-fade-in">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.details}</p>
                      {/* Extra image placeholders */}
                      <div className="grid grid-cols-2 gap-3">
                        {Array.from({ length: item.imageCount }).map((_, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="aspect-square bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground"
                          >
                            Image {imgIdx + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
