const Work = () => {
  const links = {
    compendiumPdf: "https://drive.google.com/file/d/1RUNleGySzwFzbvu6kZAlEOohbugBaVO9/view",
    caringAnnouncement: "https://drive.google.com/file/d/141NLFiEhKgmHCYUNZEdxAgX9VRMA9mJ-/view",
    disabledLoveVideo: "https://youtu.be/yBXNlzMJyH8?si=o25M4pMstWa1S8Jk",
    rishabhReel:
      "https://www.instagram.com/reel/DM4jeMyA_P1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  } as const;

  const media = {
    premRoop: "/our-work/1/Prem-Roop.png",
    roshni: "/our-work/1/Roshni.png",
    shruti: "/our-work/2/Shruti%20Pushkarna.png",
    kumudini: "/our-work/2/Kumudini.jpg",
    alexander: "/our-work/3/Alexander.jpg",
    sahil: "/our-work/3/sahil.jpg",
    amit: "/our-work/4/Amit.jpg",
    techVideo: "/our-work/5/Navigating%20Tech%20challenges%20.mp4",
    eyeVideo: "/our-work/5/Navigating%20Rare%20Eye%20disease%20.mp4",
    aminu: "/our-work/7/Aminu.jpg",
    vinayana: "/our-work/7/Vinayana%20Khurana.jpg",
  } as const;

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden section-charcoal border-b border-border/20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 -left-40 h-96 w-96 sm:h-[28rem] sm:w-[28rem] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute top-8 -right-48 h-[26rem] w-[26rem] sm:h-[32rem] sm:w-[32rem] rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.55)_2px,transparent_2px)] [background-size:30px_30px]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),transparent_45%,rgba(0,0,0,0.25))]" />
        </div>

        <div className="container-section relative z-10 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase drop-shadow-[0_1px_0_rgba(0,0,0,0.35)]">
              Our Work
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-foreground font-bold tracking-tight">
              Digital storytelling campaigns
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-charcoal-foreground/85 leading-relaxed">
              Narratives that make invisible disability visible—building empathy, shifting culture, and driving action.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-muted/35 border-b border-border/60">
        <div className="container-section max-w-6xl">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: "digital-storytelling-campaigns", title: "Digital Storytelling Campaigns" },
              { id: "workplace-inclusion-employer-engagement", title: "Workplace Inclusion & Employer Engagement" },
              { id: "accessible-ielts-persons-with-disabilities", title: "Accessible IELTS for Persons with Disabilities" },
              { id: "capacity-building-academic-partnerships", title: "Capacity Building & Academic Partnerships" },
              { id: "experiential-advocacy-public-engagement", title: "Experiential Advocacy & Public Engagement" },
              { id: "creative-advocacy", title: "Creative Advocacy" },
            ].map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="rounded-2xl border border-border/70 bg-background/70 px-5 py-4 hover:bg-background transition-colors"
              >
                <p className="text-foreground font-semibold">{area.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">Jump to section</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL STORYTELLING CAMPAIGNS */}
      <section id="digital-storytelling-campaigns" className="scroll-mt-28 py-16 md:py-20">
        <div className="container-section max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-4">
              Digital storytelling campaigns
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold tracking-tight mb-5">
              DIGITAL STORYTELLING CAMPAIGNS
            </h2>
          </div>

          {/* Believe in the Invisible */}
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold">
                  Believe in the Invisible: Compendium on Believe in the Invisible Campaign
                </h3>
                <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
                  At its inception, “Believe in the Invisible” was a brief yet impactful one-week campaign designed to amplify the voices and
                  experiences of people with invisible disabilities. By inviting personal stories, the campaign garnered a remarkable response,
                  shedding light on the often-overlooked challenges faced by this community.
                </p>
                <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
                  The Campaign created a platform for individuals to share their journeys, struggles, and triumphs, providing a deeper
                  understanding of the invisible obstacles they navigate daily. This initiative not only raised awareness but also built a sense
                  of solidarity and support among participants and the broader audience.
                </p>
              </div>

              <a
                href={links.compendiumPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 font-display font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 w-full lg:w-auto"
              >
                Download PDF
              </a>
            </div>

            <div className="mt-10">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-5">Narratives</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Premroop */}
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img
                        src={media.premRoop}
                        alt="Premroop Alwa"
                        className="w-full h-auto rounded-xl border border-border/70 bg-background object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">Premroop Alwa, Person with Hemophilia</h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “Hemophilia is a very complex disorder. If a person affected is on prophylaxis treatment from a very young age then his
                        Disability mostly is under control. In India we have only on demand treatment. It's very difficult to explain to people
                        that you can be fine one day and have an internal bleeding the next day… It's extremly difficult to make your employers,
                        colleagues or school to believe that you can be normal one day and you have a difficulty the very next day, sometimes by
                        the end of the day.”
                      </p>
                    </div>
                  </div>
                </article>

                {/* Roshni */}
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img
                        src={media.roshni}
                        alt="Roshni Chaudhari"
                        className="w-full h-auto rounded-xl border border-border/70 bg-background object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">
                        ROSHNI CHAUDHARI, Person with congenital heart disease (VSD)
                      </h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “I was diagnosed with a Congenital Heart Disease known as Ventricular Septal Defect (or VSD) and Pulmonary Hypertension
                        about 22 years ago… I’m sick and tired of hearing things like ‘you look so normal’… I get glared at when I take a
                        wheelchair… people think I’m a fraud because they’ve seen my legs working fine… The worst is when abled, regular people
                        try to compete with my symptoms… no, it’s really not the same!”
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Caring is Believing */}
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Caring is Believing: Announcement Post</h3>
                <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
                  Building on the momentum of the first Campaign, Believe in the Invisible, a subsequent campaign titled “Caring is Believing”
                  was launched in 2023. This extended initiative continued to spotlight narratives from diverse communities affected by
                  invisible disabilities, fostering empathy, understanding, and support.
                </p>
                <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
                  “Caring is Believing” featured narratives and perspectives of the communities who too are affected with invisible
                  disabilities. It encouraged allies and advocates to share their stories of support and care, highlighting the importance of a
                  compassionate and inclusive society. “Caring is Believing” aimed to create lasting change, empowering individuals and
                  communities to recognize, understand, and support those living with invisible disabilities.
                </p>
              </div>

              <a
                href={links.caringAnnouncement}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border/80 bg-background/70 px-6 py-3 font-display font-semibold tracking-wide hover:bg-background transition-colors w-full lg:w-auto"
              >
                View post
              </a>
            </div>

            <div className="mt-10">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-5">Narratives</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img
                        src={media.shruti}
                        alt="Shruti Pushkarna"
                        className="w-full h-auto rounded-xl border border-border/70 bg-background object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">SHRUTI PUSHKARNA, Disability Inclusion Advocate</h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “Caring for someone with a disability directly gives you a perspective into their challenges, the solutions, the
                        frustrations et cetera. You are able to better understand their responses and reactions to several things, people and
                        situations… Understanding people, their problems, caring for them, gives you immense perspective. Disability is only
                        incidental.”
                      </p>
                    </div>
                  </div>
                </article>
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img
                        src={media.kumudini}
                        alt="Kumudini Ethiraj"
                        className="w-full h-auto rounded-xl border border-border/70 bg-background object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">
                        KUMUDINI ETHIRAJ, Person with Inflammatory bowel disease
                      </h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “Believing is caring. Being a person with Crohn's, a type of Inflammatory Bowel Disease (IBD), all my life I have
                        struggled to make people understand what I was going through… I celebrated it for finally finding a name for my
                        struggles… Such invisible disabilities can affect one's ability to work, attend school, complete everyday tasks etc…
                        All these experiences gave birth to an entrepreneur in me and co-founded IBD Patient Support Foundation (India).”
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* DEAM */}
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold">
              Disability Employment Awareness Month (DEAM)
            </h3>
            <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
              During Disability Employment Awareness Month, BITI led a research-informed digital campaign focused on invisible disabilities and
              workplace inclusion. The campaign combined facts, data points, research findings, and real-life case studies to move the
              conversation beyond awareness toward accountability and action. Professionals living with invisible disabilities from India and
              internationally shared their workplace experiences—highlighting challenges around disclosure, accommodation, bias, and career
              progression.
            </p>

            <div className="mt-10">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-5">Narratives</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img
                        src={media.alexander}
                        alt="Alexander Ogheneruemu"
                        className="w-full h-auto rounded-xl border border-border/70 bg-background object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">
                        Alexander Ogheneruemu, Hard of hearing / neuro-divergent
                      </h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “I lost my hearing gradually at age 8… This really impacted my normal development trajectory… It wasn't until after a
                        couple decades… that I joined the Deaf community in Nigeria… joining the Deaf community was one of the best moves
                        towards slow, steady rehabilitation… As a person with disability, my experience with the regular 9-5 paid job is
                        nothing to write home about. Personally, I'm best suited to working from home/self employed system.”
                      </p>
                    </div>
                  </div>
                </article>
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img
                        src={media.sahil}
                        alt="Mohamin Sahil"
                        className="w-full h-auto rounded-xl border border-border/70 bg-background object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">Mohamin Sahil, Person with Stammer / stutter</h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “My stammer, an invisible disability, has had a significant impact on my experience in the workplace… Every time I walk
                        into a meeting or an interview, I’m not just thinking about what I have to say—I’m thinking about how I’m going to say
                        it… The stress of trying to appear ‘flawless’ often makes my stammer worse, creating a cycle of self-doubt and added
                        pressure that can be mentally exhausting.”
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Disabled Love */}
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Disabled Love</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
              Dating and relationships are integral parts of the human experience, offering companionship, love, and support. However, for
              people with disabilities, navigating the dating world can present unique challenges and opportunities. Disabilities, whether
              visible or invisible, can impact how individuals interact with potential partners and how they perceive themselves in romantic
              contexts. A 2017 survey by Scope found that 85% of adults aged 18 to 34 with a disability felt lonely, and one in eight had less
              than 30 minutes of daily interaction with others. Despite these challenges, many people with disabilities form successful and
              fulfilling relationships through adaptability, understanding, and open communication.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border/70 bg-background/60">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/yBXNlzMJyH8"
                    title="Meet Ayushmita and Rahul"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-foreground font-semibold mb-2">
                  1. Meet Ayushmita and Rahul, a couple who met on a dating app and with time experienced that love is beautiful
                </p>
                <a
                  href={links.disabledLoveVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-border/80 bg-background/70 px-5 py-3 font-display font-semibold tracking-wide hover:bg-background transition-colors"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border/70 bg-background/60 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7">
                  <h4 className="text-lg font-bold text-foreground">2. Amit Pallath, Person with Multiple Sclerosis</h4>
                  <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                    “People don't understand that I won't be able to exert myself… Although my disability is very visible nowadays, but this
                    wasn't the case 4 years ago… I'm not engaged in even trying for a date… because of the disappointment in myself… A
                    companion to talk to, or someone for intellectual stimulation is all that I ask for nowadays…”
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-border/70 bg-background">
                    <img src={media.amit} alt="Amit Pallath" className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Awareness Month */}
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Pain Awareness Month</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
              Chronic pain isn’t just a feeling; it’s a constant battle that affects countless lives which is often unseen and misunderstood
              due to its invisible nature. According to the 2016 Global Burden of Disease Study, Pain is one of the leading causes of
              disability worldwide, impacting millions of people in their daily lives.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
              Here’s what Heather has to say about her multiple invisible disabilities:
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border/70 bg-background/60 overflow-hidden">
                <div className="aspect-video bg-black/5">
                  <video src={media.techVideo} controls className="w-full h-full object-contain bg-black" />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-foreground">1. Navigating Tech challenges with invisible disabilities</p>
                </div>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/60 overflow-hidden">
                <div className="aspect-video bg-black/5">
                  <video src={media.eyeVideo} controls className="w-full h-full object-contain bg-black" />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-foreground">
                    2. Challenges of living with Acute Macular Retinopathy & other invisible disabilities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disability Pride in Progress */}
          <div className="mt-10 rounded-3xl border border-border/70 bg-card p-7 sm:p-9 shadow-sm">
            <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Disability Pride in Progress</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
              Our social media awareness campaign, ‘Disability Pride in Progress’ evolved into a landmark movement, achieving resounding
              success as it tackled the complex, non-linear journey of pride. Recognizing that pride isn't always easy or immediate, we created
              a powerful sanctuary for voices that often go unheard, especially those navigating chronic conditions and invisible disabilities.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">
              The campaign sparked a global dialogue, validating the “in-between” stages of self-acceptance and belonging. By reflecting on
              what had changed, what was still missing, and what pride looked like in the quiet moments of everyday life, we moved beyond
              traditional narratives to prove that simply being seen and believed is an act of revolution.
            </p>

            <div className="mt-10">
              <p className="text-primary font-display text-sm font-semibold tracking-[0.24em] uppercase mb-5">Narratives</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img src={media.aminu} alt="Aminu Aliyu" className="w-full h-auto rounded-xl object-contain" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">
                        Aminu Aliyu, Human Rights Advocate, Person with visual impairment
                      </h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “Disability pride means owning my experience without apology… adaptation is not a weakness – it’s a form of wisdom…
                        I’m still waiting for a shift from performative inclusion to genuine accessibility — where systems don’t just acknowledge
                        difference, but plan for it from the start…”
                      </p>
                    </div>
                  </div>
                </article>
                <article className="rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[0_10px_18px_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08)]">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="sm:w-40 shrink-0">
                      <img src={media.vinayana} alt="Vinayana Khurana" className="w-full h-auto rounded-xl object-contain" loading="lazy" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-foreground">
                        Vinayana Khurana, Content Creator, Person with Cerebral Palsy
                      </h4>
                      <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                        “Disability Pride, to me, means embracing my whole self without apology… rejecting shame and celebrating the strength,
                        resilience, and uniqueness that come with living differently… I am still waiting for true accessibility to be seen as a
                        basic right, not a privilege or afterthought…”
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              <div className="mt-8 rounded-2xl border border-border/70 bg-background/60 p-6">
                <p className="font-semibold text-foreground">
                  3. Rishabh Bitola, MD, Multiple Venture, Polio Survivor
                </p>
                <a
                  href={links.rishabhReel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-border/80 bg-background px-5 py-3 font-display font-semibold tracking-wide hover:bg-muted/40 transition-colors mt-4"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other work areas (placeholders for now) */}
      <section className="py-16 md:py-20 bg-muted/20 border-t border-border/60">
        <div className="container-section max-w-6xl space-y-12">
          {[
            { id: "workplace-inclusion-employer-engagement", title: "Workplace Inclusion & Employer Engagement" },
            { id: "accessible-ielts-persons-with-disabilities", title: "Accessible IELTS for Persons with Disabilities" },
            { id: "capacity-building-academic-partnerships", title: "Capacity Building & Academic Partnerships" },
            { id: "experiential-advocacy-public-engagement", title: "Experiential Advocacy & Public Engagement" },
            { id: "creative-advocacy", title: "Creative Advocacy" },
          ].map((area) => (
            <article key={area.id} id={area.id} className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl text-foreground mb-2 normal-case font-bold">{area.title}</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                Highlights from this focus area appear across our campaigns and programmes below.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
