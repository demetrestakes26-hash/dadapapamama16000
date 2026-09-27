import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, MapPin, Phone } from "lucide-react";
import heroImage from "../assets/real-skewers-grill.jpg";
import gyrosImage from "../assets/real-gyros-grill.jpg";
import souvlakiImage from "../assets/real-souvlaki.jpg";
import { SiteFooter } from "../components/site-chrome";
import { useLanguage } from "../lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Σουβλάκι ΠΕ-ΠΑ · Ένα και μοναδικό" },
      { name: "description", content: "Παραδοσιακό σουβλάκι και γύρος στα κάρβουνα, στην κεντρική πλατεία των Τρικάλων." },
      { property: "og:title", content: "Σουβλάκι ΠΕ-ΠΑ · Ένα και μοναδικό" },
      { property: "og:description", content: "Παραδοσιακό σουβλάκι και γύρος στα κάρβουνα, στην κεντρική πλατεία των Τρικάλων." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();
  const featured = t.home.featured.map((item, index) => ({
    ...item,
    image: index === 0 ? gyrosImage : index === 1 ? souvlakiImage : undefined,
  }));

  return (
    <main>
      <section className="relative isolate min-h-[36rem] overflow-hidden sm:min-h-[34rem]">
        <img src={heroImage} alt={t.home.heroAlt} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[36rem] max-w-5xl items-center px-5 pb-10 pt-16 sm:min-h-[34rem] sm:px-8">
          <div className="max-w-xl text-hero-foreground">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand-soft">{t.home.location}</p>
            <h1 className="mt-5 font-display text-8xl leading-none sm:text-9xl">ΠΕ-ΠΑ</h1>
            <p className="mt-4 max-w-lg text-xl leading-7 text-hero-muted sm:text-2xl sm:leading-9">{t.home.intro}</p>
            <div className="mt-8 flex gap-3">
              <Link to="/menu" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5">{t.home.viewMenu}</Link>
              <Link to="/" hash="visit" className="rounded-full border border-hero-line px-6 py-3 text-sm font-medium transition-colors hover:bg-hero-wash">{t.home.findUs}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className="font-display text-5xl text-brand sm:text-6xl">{t.home.menuTitle}</h2>
            <span className="pb-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{t.home.charcoal}</span>
          </div>
          <div className="space-y-3">
            {featured.map((item) => (
              <article key={item.name} className="grid min-h-24 grid-cols-[auto_1fr_auto] gap-4 rounded-lg bg-menu-card p-3 text-menu-card-foreground sm:min-h-20 sm:items-center">
                {item.image ? <img src={item.image} alt="" className="h-24 w-24 rounded-md object-cover sm:h-16 sm:w-24" /> : <div className="hidden w-24 sm:block" />}
                <div className={item.image ? "" : "col-start-1 col-end-3 sm:col-start-2"}>
                  <h3 className="font-display text-xl text-brand sm:text-2xl">{item.name}</h3>
                  <p className="mt-1 text-sm leading-5 text-menu-card-muted sm:text-base">{item.copy}</p>
                </div>
                <span className="font-mono text-[0.65rem] uppercase text-menu-card-label">{item.label}</span>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{t.home.pickup}</p>
        </div>
      </section>

      <section className="border-t border-border bg-background px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl text-brand sm:text-5xl">{t.home.reviewsTitle}</h2>
            <span className="pb-1 font-mono text-[0.6rem] text-muted-foreground sm:text-[0.65rem]">Google Maps · 4.2/5</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.reviews.map((review) => (
              <blockquote key={review} className="flex min-h-64 flex-col rounded-lg bg-review p-6 text-review-foreground">
                <span className="font-display text-4xl leading-none text-brand">”</span>
                <p className="mt-4 text-sm leading-6">{review}</p>
                <span className="mt-auto pt-5 text-sm tracking-widest text-brand">★★★★★</span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-background px-5 pb-20 pt-12 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-7 font-display text-5xl text-brand sm:text-6xl">{t.home.visitTitle}</h2>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <iframe title={t.home.mapTitle} src="https://www.google.com/maps?q=%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9+%CE%A0%CE%B5%CE%A0%CE%B1,+25%CE%B7%CF%82+%CE%9C%CE%B1%CF%81%CF%84%CE%AF%CE%BF%CF%85+1,+%CE%A4%CF%81%CE%AF%CE%BA%CE%B1%CE%BB%CE%B1&output=embed" className="h-64 w-full border-0 sm:h-80" loading="lazy" />
            <div className="grid gap-10 p-6 sm:grid-cols-2 sm:p-8">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brand">{t.home.square}</p>
                <h3 className="mt-3 font-display text-3xl">{t.home.address}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.home.locationCopy}</p>
                <a href="tel:+302431030302" className="mt-7 flex items-center gap-3 font-display text-2xl text-brand"><Phone className="size-5" />2431 030302</a>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brand">{t.home.hours}</p>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
                  <dt>{t.home.days[0]}</dt><dd>10:00 – 13:00</dd>
                  <dt>{t.home.days[1]}</dt><dd>10:00 – 15:00</dd>
                  <dt>{t.home.days[2]}</dt><dd>11:45 – 15:00</dd>
                  <dt>{t.home.days[3]}</dt><dd>11:00 – 17:30 <span className="block text-xs text-muted-foreground">{t.home.decemberOnly}</span></dd>
                </dl>
                <a href="https://www.google.com/maps/search/?api=1&query=%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9+%CE%A0%CE%B5%CE%A0%CE%B1+%CE%A4%CF%81%CE%AF%CE%BA%CE%B1%CE%BB%CE%B1" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground">{t.home.directions} <ArrowDownRight className="size-4" /></a>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center font-display text-2xl text-brand sm:text-3xl">{t.home.slogan}</p>
        </div>
      </section>
      <SiteFooter showLinks />
    </main>
  );
}
