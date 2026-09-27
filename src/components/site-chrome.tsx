import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/lib/i18n";

const languageOptions: Array<{ code: Language; name: string; flag: string }> = [
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-header-line bg-header/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-2xl text-header-foreground" aria-label={t.nav.homeAria}>
          ΠΕ-ΠΑ
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8" aria-label={t.nav.aria}>
          <Link
            to="/menu"
            activeProps={{ className: "text-brand" }}
            className="font-mono text-[0.65rem] uppercase tracking-widest text-header-muted transition-colors hover:text-header-foreground sm:text-xs"
          >
            {t.nav.menu}
          </Link>
          <Link
            to="/"
            hash="visit"
            className="font-mono text-[0.65rem] uppercase tracking-widest text-header-muted transition-colors hover:text-header-foreground sm:text-xs"
          >
            {t.nav.visit}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                className="group h-auto gap-1.5 rounded-full border border-header-line px-2 py-1 font-mono font-normal text-header-muted shadow-none hover:bg-transparent hover:text-brand data-[state=open]:text-brand"
                aria-label={t.languageMenuLabel}
              >
                <span className="text-base leading-none" aria-hidden="true">{t.languageFlag}</span>
                <span className="text-[10px] normal-case">{t.languageName}</span>
                <ChevronDown className="size-3 transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={4}
              className="w-40 min-w-40 overflow-hidden rounded-xl border-header-line bg-header/95 p-0 font-mono text-header-foreground shadow-xl backdrop-blur-md"
            >
              {languageOptions.map((option) => (
                <DropdownMenuItem
                  key={option.code}
                  onSelect={() => setLanguage(option.code)}
                  className={language === option.code
                    ? "cursor-pointer gap-2.5 rounded-none px-3 py-2 text-brand focus:bg-hero-wash focus:text-brand"
                    : "cursor-pointer gap-2.5 rounded-none px-3 py-2 text-header-muted focus:bg-hero-wash focus:text-header-foreground"}
                >
                  <span className="text-base leading-none" aria-hidden="true">{option.flag}</span>
                  <span className="text-xs">{option.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ showLinks = false }: { showLinks?: boolean }) {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-9 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <Link to="/" className="font-display text-4xl">ΠΕ-ΠΑ</Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-footer-muted">
              {t.footer.copy}
            </p>
          </div>
          {showLinks ? (
            <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-footer-muted">
              <a href="https://www.facebook.com/pages/Σουβλάκι-ΠεΠα/118480514967032" target="_blank" rel="noreferrer">Facebook</a>
              <a href="mailto:souvlakipepa@gmail.com">Email</a>
               <a href="tel:+302431030302">{t.footer.call}</a>
            </div>
          ) : null}
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-footer-line pt-6 font-mono text-[0.65rem] uppercase tracking-wider text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ΠΕ-ΠΑ · {t.footer.address}</span>
          <span className="w-fit rounded-full border border-footer-line px-3 py-1.5">★ Google Maps 4.2/5</span>
        </div>
      </div>
    </footer>
  );
}