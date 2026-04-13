const Achievements = () => {
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
            <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
              Our Achievements
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Milestones of impact
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              A snapshot of programs, recognition, and collaborations that helped BITI grow and deepen its work.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <div className="space-y-8">
            {/* 1 */}
            <article className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-3">01</p>
              <h2 className="text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
                Accessible IELTS Training for Persons with Disabilities
              </h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                BITI led a first-of-its-kind{" "}
                <a
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2178048&reg=3&lang=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline decoration-foreground/90 decoration-2 underline-offset-4 hover:decoration-foreground hover:text-foreground transition-colors"
                >
                  national initiative
                </a>{" "}
                to make IELTS preparation accessible for Persons with Disabilities, with support from the Department of Empowerment of Persons
                with Disabilities, Ministry of Social Justice &amp; Empowerment, Government of India. The project resulted in an accessible IELTS
                Training Handbook, capacity-building of trainers across National Institutes, and the creation of inclusive, disability-responsive
                pathways to global education and employment.
              </p>
            </article>

            {/* 2 */}
            <article className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-3">02</p>
              <h2 className="text-2xl sm:text-3xl text-foreground font-bold tracking-tight">C4AC RE:ACT Lab Pilot Program</h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                Believe in the Invisible was selected as one of three organizations in India for a prestigious 6-month pilot initiative funded
                by the Urgent Action Fund. This grant provided BITI with a dedicated micro-grant and expert accompaniment to fortify our
                narrative strategy, visual identity, and digital security infrastructure.
              </p>
            </article>

            {/* 3 */}
            <article className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-3">03</p>
              <h2 className="text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
                Awarded a Micro seed Grant by GNYPWD
              </h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                Believe in the Invisible was a{" "}
                <a
                  href="https://www.linkedin.com/posts/believe-in-the-invisible_invisibledisabilities-hiddendisabilities-activity-7146572333049167872-m5RC?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline decoration-foreground/90 decoration-2 underline-offset-4 hover:decoration-foreground hover:text-foreground transition-colors"
                >
                  recipient of the Micro-seed grant from the Global Network of Young Persons with Disabilities
                </a>
                , a U.S.-based organization dedicated to empowering young people with disabilities. This grant supported the initiative's
                efforts to advocate for the rights of individuals with invisible disabilities and to foster leadership in creating a more
                inclusive world. The recognition and support from this esteemed organization further validated the movement's impact and its
                potential to drive meaningful change.
              </p>
            </article>

            {/* 4 */}
            <article className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-3">04</p>
              <h2 className="text-2xl sm:text-3xl text-foreground font-bold tracking-tight">Featured at Kalaneri Art Gallery</h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                Believe in the Invisible was prominently featured at the Rare Diseases Awareness Exhibition on March 3rd, 2024, at Jaipur's
                renowned{" "}
                <a
                  href="https://www.linkedin.com/company/kalaneri-art-gallery---india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline decoration-foreground/90 decoration-2 underline-offset-4 hover:decoration-foreground hover:text-foreground transition-colors"
                >
                  Kalaneri Art Gallery - India
                </a>
                . This exhibition, led by Mr. Vikas Bhatia, aimed to illuminate the intricacies of rare diseases prevalent in the country,
                offering comprehensive insights into symptoms, genetic mutations and available support groups.
              </p>
            </article>

            {/* 5 */}
            <article className="rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-3">05</p>
              <h2 className="text-2xl sm:text-3xl text-foreground font-bold tracking-tight">
                Featured by NGO Trinayani in their film on invisible disabilities
              </h2>
              <p className="mt-4 text-foreground/85 text-base sm:text-lg leading-relaxed">
                Believe in the Invisible was also featured by NGO Trinayani in their Film on Invisible{" "}
                <a
                  href="https://www.youtube.com/watch?v=fm217LHYUXE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline decoration-foreground/90 decoration-2 underline-offset-4 hover:decoration-foreground hover:text-foreground transition-colors"
                >
                  disabilities
                </a>{" "}
                during the International Purple Fest Goa 2024. The film included real-life stories from people with invisible disabilities,
                showcasing their experiences and challenges. Our co-founders; Anjali Vyas &amp; Aarti Batra were also the part of the video,
                sharing their personal journeys and further emphasizing on giving a voice to those with invisible disabilities.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
