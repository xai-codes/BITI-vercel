import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import ScrollHighlightText from "@/components/ScrollHighlightText";

const Resources = () => {
  const sections = [
    {
      title: "Laws & Policies",
      items: [
        { label: "Rights of Persons with Disabilities Act, 2016", url: "https://drive.google.com/file/d/1XPiR8tEmRN_d3Mdm7NhPDjRs0bWL-Lam/view?usp=sharing" },
        { label: "Revised Assessment Guidelines for Disability Assessment under the RPWD Act 2016", url: "https://drive.google.com/file/d/1FIaOzSv7c2NQEAqMl4ClsnHLvkI3USly/view?usp=sharing" },
      ],
    },
    {
      title: "News Articles",
      items: [
        { label: "India unveils three landmark initiatives at International Purple Fest in Goa", url: "https://www.msn.com/en-in/news/India/india-unveils-three-landmark-initiatives-at-international-purple-fest-in-goa/ar-AA1Ok0du?ocid=BingNewsVerp" },
        { label: "Purple Fest's biggest challenge: Make invisible disabilities of people visible", url: "https://timesofindia.indiatimes.com/city/goa/purple-fests-biggest-challenge-makeinvisible-disabilities-of-people-visible/articleshow/106617987.cms" },
        { label: "It's time for India to wake up to invisible disabilities", url: "https://www.weforum.org/agenda/2018/12/india-invisible-disabilities-autism-dyspraxia/" },
        { label: "GHIAL to help with hidden disabilities", url: "https://timesofindia.indiatimes.com/city/hyderabad/ghial-launches-hidden-disabilities-sunflower-programme/articleshow/112207700.cms" },
        { label: "Why employers can no longer ignore 'invisible' disabilities", url: "https://www.benefitnews.com/news/why-dei-efforts-should-extend-to-employees-with-disabilities" },
        { label: "Delhi airport tries to make travel bright & sunny for those with hidden disabilities", url: "https://timesofindia.indiatimes.com/city/delhi/delhi-airport-tries-to-make-travel-bright-sunny-for-those-with-hidden-disabilities/articleshow/105273411.cms" },
        { label: "Less than half of workers with mental health conditions disclose them to their employers", url: "https://www.business.com/articles/disclosing-mental-health-at-work/" },
        { label: "Most PhD students with hidden disabilities 'unhappy with support'", url: "https://www.timeshighereducation.com/news/most-phd-students-hidden-disabilities-unhappy-support" },
        { label: "The unsung heroes: 'Invisible disabilities remain overlooked in the domain of public policy'", url: "https://www.mid-day.com/lifestyle/health-and-fitness/article/does-the-government-overlook-neurodivergence-as-its-invisible-23344885" },
        { label: "Students deal with misconceptions of hidden disabilities", url: "https://thecampanile.org/29979/science-tech/students-deal-with-misconceptions-of-hidden-disabilities/" },
      ],
    },
    {
      title: "Knowledgebase",
      items: [
        { label: "Removing barriers for persons with invisible disabilities", url: "https://idronline.org/article/diversity-inclusion/removing-barriers-for-persons-with-invisible-disabilities/" },
        { label: "AXS chat on invisible disability with Anjali Vyas", url: "https://www.axschat.com/anjali-vyas-self-advocate-on-disability-rights/" },
        { label: "Baseline report on Employment Challenges of persons with invisible disabilities; MS & blood disorders", url: "https://drive.google.com/file/d/1kfrBChV6UmYDU2cqcD6Gpd7aMMGeNRLu/view?usp=drive_link" },
        { label: "How can Airports be more inclusive for people with invisible disabilities", url: "https://www.wvxu.org/show/cincinnati-edition/2024-09-10/airports-inclusive-invisible-disabilities" },
        { label: "Supporting Invisible disabilities in workplace", url: "https://www.shrm.org/in/topics-tools/news/all-things-work/invisible-disabilities" },
        { label: "Invisible Disabilities Should Not Mean Invisible Patients", url: "https://blogs.bmj.com/medical-humanities/2024/05/14/invisible-disabilities-should-not-mean-invisible-patients/" },
        { label: "9 Books About Invisible Disabilities", url: "https://electricliterature.com/9-books-about-invisible-disabilities/" },
        { label: "Breaking Invisible Barriers: The Intersection Of Disability And Gender-Based Violence", url: "https://feminisminindia.com/2024/09/10/breaking-invisible-barriers-the-intersection-of-disability-and-gender-based-violence/" },
        { label: "ESPN survey: Venues fall short on invisible disability needs", url: "https://www.espn.in/espn/story/_/id/41016241/espn-survey-venues-fall-short-invisible-disability-needs" },
        { label: "Treating Chronic Pain as Invisible Disability", url: "https://www.epw.in/journal/2024/22/commentary/treating-chronic-pain-invisible-disability.html?check_logged_in=1" },
        { label: "Medical Students with 'Invisible' Disabilities Are Improving Patient Care", url: "https://hms.harvard.edu/news/medical-students-invisible-disabilities-are-improving-patient-care" },
        { label: "Visible Vs. Invisible Disabilities: Why It Matters In The Workplace", url: "https://www.forbes.com/sites/dianewiniarski/2023/10/17/visible-vs-invisible-disabilities-why-it-matters-in-the-workplace/" },
        { label: "Persons with invisible disabilities face multiple forms of discrimination", url: "https://www.independent.com.mt/articles/2024-04-07/newspaper-opinions/Persons-with-invisible-disabilities-face-multiple-forms-of-discrimination-6736260000" },
      ],
    },
    {
      title: "Voices of Invisible Disabilities",
      items: [
        { label: "Nick Mayhugh talks 'invisible disabilities', the reason behind his iconic brain-scan hair design at Paris 2024", url: "https://olympics.com/en/news/nick-mayhugh-story-behind-iconic-brain-scan-hair-design" },
        { label: "People with invisible disabilities like me are routinely disbelieved — and it can have long-lasting effects", url: "https://www.abc.net.au/news/2022-11-30/invisible-disabilities-routinely-disbelieved/101420680" },
        { label: "Jessica-Jane Applegate shines light on invisible disabilities", url: "https://www.insidethegames.biz/articles/1148171/swimmer-applegate-shines-a-li" },
        { label: "Xbox leader for inclusive gaming opens up about her own hidden disability", url: "https://news.microsoft.com/source/features/diversity-inclusion/xbox-leader-for-inclusive-gaming-opens-up-about-her-own-hidden-disability/" },
        { label: "MS sufferer turns to Tik Tok to fill void in French support", url: "https://www.connexionfrance.com/magazine/ms-sufferer-turns-to-tik-tok-to-fill-void-in-french-support/664650" },
        { label: "Hidden Disabilities: Craigavon woman Leonie on life with Ulcerative Colitis", url: "https://armaghi.com/news/craigavon-news/hidden-disabilities-craigavon-woman-leonie-on-life-with-ulcerative-colitis/244820" },
        { label: "How Disability Awareness in Anime Taught Me to Embrace My Own Conditions", url: "https://www.crunchyroll.com/news/features/2024/5/16/disability-awareness-in-anime" },
        { label: "An 'invisible disability' is even harder when you're a kid", url: "https://www.inquirer.com/opinion/commentary/disability-invisible-awareness-teenager-migraine-20240411.html" },
        { label: "I have an invisible disability. Flying is extra stressful, and other travelers don't understand why", url: "https://www.businessinsider.com/mom-with-disability-bipolar-disorder-travel-abroad-stress-medication-2024-3?IR=T" },
        { label: "How A Man's Worst Headache Turned Into A Lifelong Invisible Disability", url: "https://www.forbes.com/sites/judystone/2024/02/28/how-a-mans-worst-headache-turned-into-a-lifelong-invisible-disability/" },
        { label: "Invisible Disability Reveals A Global Data Gap Across Economies", url: "https://www.forbes.com/sites/keelycatwells/2026/01/16/invisible-disability-reveals-a-global-data-gap-across-economies/" },
      ],
    },
  ];

  return (
    <div>
      <section className="section-charcoal py-20">
        <div className="container-section text-center">
          <h1 className="text-4xl sm:text-6xl mb-4 text-primary">Resources</h1>
        </div>
      </section>

      <ScrollHighlightText text="Explore the collection of resources focused on invisible disabilities, offering in-depth insights, research papers, advocacy toolkits, and support guides. Whether you're looking to better understand conditions like chronic pain, neurological disorders, or mental health challenges, these resources will equip you with the knowledge needed to create inclusive environments." />

      <section className="py-6 bg-background">
        <div className="container-section max-w-4xl text-center mb-12">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Discover expert articles, accommodations guidance, and news articles that empower the invisible disability community to navigate everyday life with greater support and awareness.
          </p>
        </div>

        <div className="container-section max-w-4xl">
          <Accordion type="multiple" defaultValue={["Laws & Policies"]} className="space-y-4">
            {sections.map((section) => (
              <AccordionItem key={section.title} value={section.title} className="border-2 border-foreground/10 rounded-lg px-6">
                <AccordionTrigger className="font-display text-xl sm:text-2xl tracking-wide">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4 pb-4">
                    {section.items.map((item, idx) => (
                      <li key={item.label} className="flex gap-3 items-start">
                        <span className="text-base font-display text-primary shrink-0">{idx + 1}.</span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline leading-relaxed inline-flex items-start gap-2"
                        >
                          {item.label}
                          <ExternalLink size={14} className="shrink-0 mt-1.5 opacity-60" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Resources;
