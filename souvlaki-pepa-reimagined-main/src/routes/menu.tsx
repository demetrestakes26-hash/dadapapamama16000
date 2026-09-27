import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "../components/site-chrome";
import { useLanguage } from "../lib/i18n";
import logoAsset from "../assets/pepa-logo-full.png.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Το Μενού · Σουβλάκι ΠΕ-ΠΑ" },
      { name: "description", content: "Δείτε το μενού και τις τιμές του Σουβλάκι ΠΕ-ΠΑ στα Τρίκαλα." },
      { property: "og:title", content: "Το Μενού · Σουβλάκι ΠΕ-ΠΑ" },
      { property: "og:description", content: "Σουβλάκια, πίτες, γύρος στα κάρβουνα και ροφήματα." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t } = useLanguage();

  return (
    <main className="relative">
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed top-1/2 left-1/2 z-0 w-[min(80vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      />
      <section className="relative z-10 bg-transparent px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-9 flex items-end justify-between">
            <h1 className="font-display text-5xl text-brand sm:text-6xl">{t.menuPage.title}</h1>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{t.menuPage.charcoal}</span>
          </div>
          <div className="space-y-10">
            {t.menuPage.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brand">{section.title}</h2>
                <div className="space-y-1">
                  {section.items.map(([name, price, top]) => (
                    <div key={String(name)} className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-transparent py-2 text-base sm:text-lg">
                      <p>{name} {top ? <span className="ml-1 font-mono text-[0.6rem] uppercase text-brand">TOP 🔥</span> : null}</p>
                      <span className="font-mono text-xs text-muted-foreground sm:text-sm">{price}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">{t.menuPage.pickup}</p>
          <Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"><ArrowLeft className="size-4" /> {t.menuPage.back}</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}