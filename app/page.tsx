import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(647) 225-7887";
const TEL = "tel:+16472257887";
const SMS = "sms:+16472257887";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Ideal%20construction%20solutions%20inc&query_place_id=ChIJpVImlIUXTmsR4f1FkoaLcMo";

const services = [
  { icon: "grid", name: "Stamped Concrete Driveways", text: "A stamped pattern pressed into fresh concrete gives your driveway the look of stone or pavers in one solid pour. It is the job Ideal is known for in Brampton, and customers say it completely changed how the front of their home looks from the street.", featured: true },
  { icon: "layers", name: "Exposed Aggregate Driveways", text: "The top layer is washed back to show the stone mixed into the concrete, giving a textured, grippy finish that hides wear well. Customers describe the result as fast, clean and professional." },
  { icon: "ruler", name: "Driveway Extensions", text: "Need room for another car? Karan widens and extends existing driveways so the new section lines up cleanly with the old, with the city permit handled the right way." },
  { icon: "home", name: "Backyard Concrete & Patios", text: "Concrete patios and pads that turn an unused backyard into space you actually use, plus side gullies and the narrow strips along the house that are hard to keep tidy." },
  { icon: "sprout", name: "Grass, Gravel & Stone Work", text: "Backyard landscaping around the concrete: fresh grass areas, gravel beds and stone work, laid out the way you want it so the whole yard comes together." },
  { icon: "route", name: "Walkways", text: "Concrete walkways from the driveway to the backyard or front door, so you are not cutting across the lawn or stepping around mud after rain." },
  { icon: "box", name: "Custom Garden Boxes", text: "Built-in garden boxes sized for your yard, a popular add-on when the crew is already on site for a driveway or walkway." },
];

const reviews = [
  { name: "Gurpreet", job: "Stamped concrete driveway", text: "The new stamped driveway completely upgraded the curb appeal of the house, and the job was finished on time." },
  { name: "Vaughn W.", job: "Repeat projects for family", text: "Karan extended both his mom's and his aunt's driveways, then added a backyard walkway and built garden boxes, following city permits the whole way." },
  { name: "Gurpartap B.", job: "Front and backyard concrete", text: "The crew was punctual and detailed, kept the site clean, and finished on the schedule they gave." },
  { name: "Dharminder S.", job: "Exposed aggregate driveway", text: "Fast work and great quality, with a clean, professional finish on the exposed aggregate." },
  { name: "Mandeep S.", job: "Backyard grass, gravel and stone", text: "Everything in the backyard turned out exactly the way he pictured it." },
  { name: "Shams-Ud D.", job: "Backyard and side gully concrete", text: "They arrived on time, worked full days, and left a smooth finish on the backyard and side gully." },
];

const steps = [
  { title: "Call or text Karan", text: "Tell him what you have in mind: a new driveway, an extension, a backyard pad or a walkway. Photos of the area help." },
  { title: "Site visit and quote", text: "Karan looks at the space, talks through stamped versus exposed aggregate, and gives you a clear quote and schedule." },
  { title: "Permits and prep", text: "Where the city needs a permit, it is handled first. Then the old surface is removed and the base is prepared." },
  { title: "Pour and finish", text: "The crew works full days to pour, stamp or expose, and finish the concrete on the schedule you agreed to." },
  { title: "Clean-up and walk-through", text: "The site is cleaned before the crew leaves, and you walk the finished job with Karan." },
];

const faqs = [
  { q: "Do you take care of city permits?", a: "Yes. Customers specifically mention that Karan follows city permits and protocols on driveway extensions and backyard work. If your project needs a permit, ask about it when you call and he will walk you through it." },
  { q: "What is the difference between stamped and exposed aggregate concrete?", a: "Stamped concrete has a pattern pressed into the surface so it looks like stone or pavers. Exposed aggregate has the top layer washed off to show the natural stone inside the mix, which gives a textured, slip-resistant finish. Ideal installs both, and Karan can show you which suits your home." },
  { q: "Which areas do you serve?", a: "Ideal Construction Solutions is based in Brampton and works across the Greater Toronto Area. Call to confirm your street if you are outside Brampton." },
  { q: "Can you extend my existing driveway instead of replacing it?", a: "Yes. Driveway extensions are one of the most common jobs, including adding width for another car. The new section is formed to meet the existing driveway cleanly." },
  { q: "Do you do backyard work too?", a: "Yes: backyard concrete pads and patios, side gullies, walkways to the backyard, grass, gravel and stone work, and custom garden boxes." },
  { q: "How do I get a quote?", a: `Call or text ${PHONE}. Describe the project, send a couple of photos if you can, and Karan will arrange a time to see the site and give you a quote.` },
  { q: "Will the crew clean up afterwards?", a: "Yes. Reviews consistently mention a clean site during and after the job." },
];

const gallery = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Ideal Construction Solutions Inc.",
  telephone: "+1-647-225-7887",
  image: "/images/photo1.jpg",
  areaServed: ["Brampton, ON", "Greater Toronto Area"],
  address: { "@type": "PostalAddress", addressLocality: "Brampton", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "66" },
  hasMap: MAPS,
  founder: { "@type": "Person", name: "Karan" },
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-[0.9375rem] text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving Brampton and the GTA</span>
          <span className="flex items-center gap-2"><Icon name="shield" className="h-4 w-4" /> Work done to city permits and protocols</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-6 px-5 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Ideal Construction Solutions, back to top">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-cta"><Icon name="layers" className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-heading text-xl font-bold uppercase text-brand-deep">Ideal Construction</span>
              <span className="block text-[0.8125rem] font-semibold text-muted">Concrete &amp; Landscaping · Brampton</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[1rem] font-semibold lg:flex">
            <a href="#services" className="hover:text-muted">Services</a>
            <a href="#reviews" className="hover:text-muted">Reviews</a>
            <a href="#work" className="hover:text-muted">Our Work</a>
            <a href="#about" className="hover:text-muted">About</a>
            <a href="#faq" className="hover:text-muted">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="num hidden font-heading text-xl font-semibold text-brand-deep xl:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden !min-h-12 md:inline-flex"><Icon name="phone" className="h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-lg bg-cta text-brand-deep md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <p className="rise eyebrow flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Brampton, Ontario</p>
              <h1 className="rise d1 mt-4 text-brand-deep">Stamped &amp; Exposed Aggregate Concrete Driveways in Brampton</h1>
              <p className="rise d2 mt-5 max-w-[34rem] text-[1.1875rem] text-muted">
                Driveways, driveway extensions, backyard concrete and walkways from Karan and the Ideal crew. Permits handled the right way, full working days on site, and a clean finish your neighbours will notice.
              </p>
              <div className="rise d3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-outline"><Icon name="text" className="h-5 w-5" /> Text Karan a photo</a>
              </div>
              <div className="rise d3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[1rem] font-semibold">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> <span className="num">5.0</span></span>
                <a href={MAPS} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:decoration-brand">66 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Owner-led by Karan</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Permit-aware</span>
              </div>
            </div>
            <div className="rise d2 relative">
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-35px_oklch(0.22_0.01_255/.6)]">
                <img src="/images/photo1.jpg" alt="Concrete driveway work by Ideal Construction Solutions in Brampton" className="aspect-[4/3] w-full object-cover" />
              </div>
              <figure className="absolute -bottom-8 left-4 right-4 rounded-xl border border-line bg-white p-5 shadow-lg sm:left-auto sm:right-6 sm:w-80">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-2 text-[1rem] leading-snug">&ldquo;Completely upgraded the curb appeal of the house, and done on time.&rdquo;</blockquote>
                <figcaption className="mt-2 text-[0.9375rem] font-semibold text-muted">Gurpreet · stamped driveway</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust Ideal" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              ["thumb", "5.0 on Google", "66 reviews"],
              ["shield", "City permits", "followed on every job"],
              ["clock", "Full days on site", "finished on schedule"],
              ["check", "Clean job site", "every day and at the end"],
            ].map(([i, a, b]) => (
              <li key={a} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-cta"><Icon name={i} /></span>
                <span className="leading-tight"><span className="block font-bold">{a}</span><span className="text-[0.9375rem] text-white/75">{b}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-2xl reveal">
              <p className="eyebrow">What we build</p>
              <h2 className="caps mt-2 text-brand-deep">Concrete driveways, patios and walkways</h2>
              <p className="mt-4 text-muted">Most jobs start at the driveway and often grow into the backyard. Here is what Ideal does, in plain terms.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-xl border bg-white p-7 ${s.featured ? "border-2 border-cta" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta px-3 py-1 text-[0.8125rem] font-bold text-brand-deep">Most requested</span>}
                  </div>
                  <h3 className="mt-5 text-brand-deep">{s.name}</h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] text-muted">{s.text}</p>
                  <a href={TEL} className="cardlink mt-5 inline-flex items-center gap-2 font-bold text-brand">Call about this <Icon name="arrow" className="arrow h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal mx-auto max-w-2xl text-center">
              <div className="flex justify-center"><Stars className="h-6 w-6" /></div>
              <h2 className="caps mt-3 text-brand-deep">Rated 5.0 from 66 Google reviews</h2>
              <p className="mt-3 text-muted">A few of the Brampton homeowners who hired Karan, in their own words, paraphrased.</p>
            </div>
            <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal mb-5 break-inside-avoid rounded-xl border border-line bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-lg text-white">{r.name[0]}</span>
                    <figcaption className="leading-tight"><span className="block font-bold">{r.name}</span><span className="text-[0.9375rem] text-muted">{r.job}</span></figcaption>
                  </div>
                  <Stars className="mt-4 h-4 w-4" />
                  <blockquote className="mt-2 text-[1.0625rem]">&ldquo;{r.text}&rdquo;</blockquote>
                  <p className="mt-3 text-[0.875rem] text-muted">Google review</p>
                </figure>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href={MAPS} target="_blank" rel="noopener" className="btn btn-outline">Read all reviews on Google <Icon name="arrow" className="arrow h-4 w-4" /></a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal overflow-hidden rounded-2xl">
              <img src="/images/photo2.jpg" alt="A finished concrete project by Ideal Construction Solutions" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]" loading="lazy" />
            </div>
            <div className="reveal">
              <p className="eyebrow">About Ideal</p>
              <h2 className="caps mt-2 text-brand-deep">Karan runs every job himself</h2>
              <p className="mt-5">Ideal Construction Solutions Inc. is a Brampton concrete and landscaping contractor led by Karan. The work is driveways first: stamped concrete, exposed aggregate and driveway extensions, plus backyard concrete, walkways, stone work and garden boxes.</p>
              <p className="mt-4">What homeowners notice is how the job is run. Karan is professional and upfront about permits, the crew turns up when it says it will and works full days, and the site is kept clean. Several customers have hired him more than once, and one sent him to his mother&rsquo;s and his aunt&rsquo;s homes after his own job.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["shield", "Permits done properly", "City permits and protocols are followed, not skipped."],
                  ["clock", "On time, full days", "Crews arrive on schedule and finish when promised."],
                  ["check", "Smooth, clean finish", "Detail work customers point out in reviews."],
                  ["repeat", "Repeat customers", "Families come back for the next project."],
                ].map(([i, t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cta/20 text-brand"><Icon name={i} className="h-5 w-5" /></span>
                    <span><span className="block font-bold">{t}</span><span className="text-[1rem] text-muted">{d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">How it works</p>
              <h2 className="caps mt-2 text-brand-deep">From first call to finished driveway</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-xl border border-line bg-white p-6">
                  <span className="num grid h-14 w-14 place-items-center rounded-lg bg-cta font-heading text-2xl font-bold text-brand-deep">{i + 1}</span>
                  <h3 className="mt-5 text-[1.1875rem] text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-[1rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="eyebrow">Our work</p>
                <h2 className="caps mt-2 text-brand-deep">Recent projects around Brampton</h2>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="cardlink inline-flex items-center gap-2 font-bold text-brand">More photos on Google <Icon name="arrow" className="arrow h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map((n, i) => (
                <div key={n} className={`zoom overflow-hidden rounded-xl bg-brand-soft ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <img src={`/images/photo${n}.jpg`} alt={`Ideal Construction Solutions project photo ${i + 1}`} loading="lazy" className="h-full min-h-40 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <p className="eyebrow">Service area</p>
              <h2 className="caps mt-2 text-brand-deep">Based in Brampton, working across the GTA</h2>
              <p className="mt-4 text-muted">Ideal works on homes throughout Brampton and takes projects across the Greater Toronto Area. Not sure if you are in range? Call and ask.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Brampton", "Greater Toronto Area"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" /> {t}</li>
                ))}
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" /> Check your area: {PHONE}</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of Brampton, Ontario" src="https://maps.google.com/maps?q=Brampton%2C%20ON&z=11&output=embed" className="h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="reveal">
              <p className="eyebrow">FAQ</p>
              <h2 className="caps mt-2 text-brand-deep">Questions before you call</h2>
              <p className="mt-4 text-muted">Don&rsquo;t see yours? Karan is happy to answer it on the phone.</p>
              <a href={TEL} className="cardlink mt-6 inline-flex items-center gap-2 font-bold text-brand"><Icon name="phone" className="h-5 w-5" /> {PHONE}</a>
            </div>
            <div className="reveal divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-start justify-between gap-6 text-[1.125rem] font-bold">
                    {f.q}
                    <span className="tog mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 max-w-[62ch] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-16 md:px-6 md:pb-24">
          <div className="reveal mx-auto grid max-w-[1200px] items-center gap-8 rounded-2xl bg-brand-deep px-7 py-12 text-white md:grid-cols-[1.4fr_1fr] md:px-14 md:py-16">
            <div>
              <h2 className="caps text-white">Ready for a driveway that turns heads?</h2>
              <p className="mt-4 max-w-xl text-white/80">Call or text Karan at {PHONE}. Send a photo of your driveway or backyard and he will set up a time to see it and give you a quote.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a href={TEL} className="btn btn-cta w-full md:w-auto"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn btn-ghost w-full md:w-auto"><Icon name="text" className="h-5 w-5" /> Text instead</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-tint pb-28 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-heading text-2xl font-bold uppercase text-brand-deep">Ideal Construction Solutions Inc.</p>
            <p className="mt-3 max-w-sm text-[1rem] text-muted">Concrete driveways, extensions, backyard concrete, walkways and garden boxes in Brampton and the GTA.</p>
            <a href={TEL} className="num mt-5 block font-heading text-2xl font-semibold text-brand-deep">{PHONE}</a>
            <p className="mt-1 text-[1rem] text-muted">Brampton, Ontario</p>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-1.5 text-[1rem] text-muted">
              {services.map((s) => <li key={s.name}><a href="#services" className="hover:text-ink">{s.name}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold">Find us</p>
            <ul className="mt-3 space-y-1.5 text-[1rem] text-muted">
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-ink">Google reviews (5.0, 66)</a></li>
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-ink">Directions</a></li>
              <li>Serving Brampton and the Greater Toronto Area</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-line px-5 pt-6 text-[0.9375rem] text-muted md:px-6">
          © {new Date().getFullYear()} Ideal Construction Solutions Inc. · Brampton, ON
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta !min-h-12"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-outline !min-h-12"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
