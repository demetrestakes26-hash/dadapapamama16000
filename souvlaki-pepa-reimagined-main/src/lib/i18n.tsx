import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "el" | "en" | "fr";

type FeaturedItem = { name: string; label: string; copy: string };
type MenuSection = { title: string; items: Array<[string, string, boolean?]> };

type Translation = {
  languageName: string;
  languageFlag: string;
  languageMenuLabel: string;
  nav: { menu: string; visit: string; aria: string; homeAria: string };
  home: {
    location: string;
    intro: string;
    viewMenu: string;
    findUs: string;
    menuTitle: string;
    charcoal: string;
    pickup: string;
    reviewsTitle: string;
    visitTitle: string;
    mapTitle: string;
    square: string;
    address: string;
    locationCopy: string;
    hours: string;
    directions: string;
    decemberOnly: string;
    days: [string, string, string, string];
    slogan: string;
    heroAlt: string;
    featured: FeaturedItem[];
    reviews: string[];
  };
  menuPage: {
    title: string;
    charcoal: string;
    pickup: string;
    back: string;
    sections: MenuSection[];
  };
  footer: { copy: string; call: string; address: string };
};

const sharedPrices = {
  skewers: ["2,00 €", "2,00 €", "2,00 €"],
  wrappedSkewers: ["4,00 €", "4,00 €", "4,00 €"],
  pitas: ["4,00 €", "4,50 €", "4,50 €", "8,50 €", "5,50 €"],
  extras: ["0,50 €", "1,00 €", "3,00 €"],
  drinks: ["1,50 €", "2,00 €", "2,00 €", "0,50 €"],
} as const;

export const translations: Record<Language, Translation> = {
  el: {
    languageName: "Ελληνικά",
    languageFlag: "🇬🇷",
    languageMenuLabel: "Επιλογή γλώσσας",
    nav: { menu: "Μενού", visit: "Επίσκεψη", aria: "Κύρια πλοήγηση", homeAria: "ΠΕ-ΠΑ αρχική" },
    home: {
      location: "Τρίκαλα · Ελλάδα",
      intro: "Παραδοσιακό σουβλάκι & γύρος στα κάρβουνα — στην κεντρική πλατεία των Τρικάλων.",
      viewMenu: "Δες το μενού",
      findUs: "Βρες μας",
      menuTitle: "Το Μενού",
      charcoal: "Στα κάρβουνα",
      pickup: "Μόνο παραλαβή. Πάρε τηλέφωνο ή πέρασε από το μαγαζί για παραγγελία.",
      reviewsTitle: "Τι λέει ο κόσμος",
      visitTitle: "Επίσκεψη",
      mapTitle: "Χάρτης για το Σουβλάκι ΠΕ-ΠΑ",
      square: "Κεντρική Πλατεία",
      address: "25ης Μαρτίου 1, Τρίκαλα 421 00",
      locationCopy: "Στην κεντρική πλατεία, δίπλα στο Σαράφη, κοντά στο ποτάμι.",
      hours: "Ωράριο",
      directions: "Οδηγίες",
      decemberOnly: "μόνο τον Δεκέμβριο",
      days: ["Δευ – Πέμ", "Παρ", "Σάβ", "Κυρ"],
      slogan: "“Πέτρος Ψήνει, Πάυλος Δίνει!!”",
      heroAlt: "Σουβλάκια που ψήνονται στα κάρβουνα",
      featured: [
        { name: "Γύρος Σε Πίτα", label: "TOP 🔥", copy: "Ο μοναδικός μας γύρος, ψημένος με τον παραδοσιακό τρόπο στα κάρβουνα." },
        { name: "Σουβλάκι Χοιρινό", label: "TOP 🔥", copy: "Φρέσκο ντόπιο χοιρινό, μαριναρισμένο με τα δικά μας μυρωδικά, σε πίτα ή ψωμάκι." },
        { name: "Σουβλάκι Κοτόπουλο", label: "Κλασικό", copy: "Ζουμερό κοτόπουλο από ντόπιες φάρμες, ψημένο με μεράκι." },
        { name: "Τοστιά", label: "Ξεχωριστό", copy: "Δύο πίτες με κασέρι." },
        { name: "Λουκάνικο", label: "Κλασικό", copy: "Παραδοσιακό χωριάτικο λουκάνικο, ψημένο στα κάρβουνα." },
      ],
      reviews: [
        "Ένα από τα καλύτερα σουβλατζίδικα στα Τρίκαλα. Οι τιμές είναι λογικές — πήγαινε να φας και θα μείνεις ευχαριστημένος.",
        "Υπέροχο μέρος με καταπληκτικό φαγητό — πολύ αυθεντικό, νόστιμο και οικονομικό.",
        "Ο καλύτερος γύρος που έχω φάει. Τρυφερό κοτόπουλο, υπέροχη μαγιονέζα και φιλικό προσωπικό.",
      ],
    },
    menuPage: {
      title: "Το Μενού", charcoal: "Στα κάρβουνα", pickup: "Μόνο παραλαβή. Πάρε τηλέφωνο ή πέρασε από το μαγαζί για παραγγελία.", back: "Επιστροφή",
      sections: [
        { title: "Σουβλάκια", items: [["Σουβλάκι Χοιρινό", sharedPrices.skewers[0], true], ["Σουβλάκι Κοτόπουλο", sharedPrices.skewers[1]], ["Λουκάνικο", sharedPrices.skewers[2]]] },
        { title: "Σουβλάκι σε πίτα", items: [["Σουβλάκι χοιρινό σε πίτα", sharedPrices.wrappedSkewers[0], true], ["Σουβλάκι κοτόπουλο σε πίτα", sharedPrices.wrappedSkewers[1]], ["Λουκάνικο σε πίτα", sharedPrices.wrappedSkewers[2]]] },
        { title: "Πίτες", items: [["Γύρος σε πίτα", sharedPrices.pitas[0], true], ["Γύρος σε πίτα διπλός", sharedPrices.pitas[1]], ["Γύρος σε ψωμάκι", sharedPrices.pitas[2]], ["Γύρος μερίδα", sharedPrices.pitas[3]], ["Τόστια", sharedPrices.pitas[4], true]] },
        { title: "Έξτρα", items: [["Έξτρα σως μικρό", sharedPrices.extras[0]], ["Έξτρα σως μεγάλο", sharedPrices.extras[1]], ["Πατατές μερίδα", sharedPrices.extras[2]]] },
        { title: "Ροφήματα", items: [["Αναψυκτικό 330ml", sharedPrices.drinks[0]], ["Αναψυκτικό 550ml", sharedPrices.drinks[1]], ["Μπύρα 330ml", sharedPrices.drinks[2]], ["Νερό 0,5l", sharedPrices.drinks[3]]] },
      ],
    },
    footer: { copy: "Παραδοσιακό σουβλάκι στα κάρβουνα · Κεντρική Πλατεία Τρικάλων.", call: "Κλήση", address: "25ης Μαρτίου 1 · Τρίκαλα" },
  },
  en: {
    languageName: "English",
    languageFlag: "🇬🇧",
    languageMenuLabel: "Select language",
    nav: { menu: "Menu", visit: "Visit", aria: "Main navigation", homeAria: "PE-PA home" },
    home: {
      location: "Trikala · Greece",
      intro: "Traditional souvlaki & charcoal-grilled gyros — in Trikala's central square.",
      viewMenu: "View the menu",
      findUs: "Find us",
      menuTitle: "The Menu",
      charcoal: "Charcoal grilled",
      pickup: "Pickup only. Call us or stop by the restaurant to place your order.",
      reviewsTitle: "What people say",
      visitTitle: "Visit",
      mapTitle: "Map to Souvlaki PE-PA",
      square: "Central Square",
      address: "1, 25th Martiou St, Trikala 421 00",
      locationCopy: "In the central square, next to Sarafis and close to the river.",
      hours: "Opening hours",
      directions: "Directions",
      decemberOnly: "December only",
      days: ["Mon – Thu", "Fri", "Sat", "Sun"],
      slogan: "“Petros grills, Pavlos serves!!”",
      heroAlt: "Souvlaki grilling over charcoal",
      featured: [
        { name: "Gyros in Pita", label: "TOP 🔥", copy: "Our one-of-a-kind gyros, traditionally grilled over charcoal." },
        { name: "Pork Souvlaki", label: "TOP 🔥", copy: "Fresh local pork, marinated with our own herbs, served in pita or bread." },
        { name: "Chicken Souvlaki", label: "Classic", copy: "Juicy chicken from local farms, carefully grilled." },
        { name: "Tostia", label: "Special", copy: "Two pitas with kasseri cheese." },
        { name: "Sausage", label: "Classic", copy: "Traditional country sausage, grilled over charcoal." },
      ],
      reviews: [
        "One of the best souvlaki spots in Trikala. Prices are reasonable — go eat and you will leave happy.",
        "A wonderful place with amazing food — very authentic, delicious and affordable.",
        "The best gyros I have ever had. Tender chicken, wonderful mayonnaise and friendly staff.",
      ],
    },
    menuPage: {
      title: "The Menu", charcoal: "Charcoal grilled", pickup: "Pickup only. Call us or stop by the restaurant to place your order.", back: "Back",
      sections: [
        { title: "Skewers", items: [["Pork souvlaki", sharedPrices.skewers[0], true], ["Chicken souvlaki", sharedPrices.skewers[1]], ["Sausage", sharedPrices.skewers[2]]] },
        { title: "Souvlaki in pita", items: [["Pork souvlaki in pita", sharedPrices.wrappedSkewers[0], true], ["Chicken souvlaki in pita", sharedPrices.wrappedSkewers[1]], ["Sausage in pita", sharedPrices.wrappedSkewers[2]]] },
        { title: "Pitas", items: [["Gyros in pita", sharedPrices.pitas[0], true], ["Double gyros in pita", sharedPrices.pitas[1]], ["Gyros in bread", sharedPrices.pitas[2]], ["Gyros portion", sharedPrices.pitas[3]], ["Tostia", sharedPrices.pitas[4], true]] },
        { title: "Extras", items: [["Small extra sauce", sharedPrices.extras[0]], ["Large extra sauce", sharedPrices.extras[1]], ["Portion of fries", sharedPrices.extras[2]]] },
        { title: "Drinks", items: [["Soft drink 330ml", sharedPrices.drinks[0]], ["Soft drink 550ml", sharedPrices.drinks[1]], ["Beer 330ml", sharedPrices.drinks[2]], ["Water 0.5l", sharedPrices.drinks[3]]] },
      ],
    },
    footer: { copy: "Traditional charcoal-grilled souvlaki · Trikala Central Square.", call: "Call", address: "1, 25th Martiou St · Trikala" },
  },
  fr: {
    languageName: "Français",
    languageFlag: "🇫🇷",
    languageMenuLabel: "Choisir la langue",
    nav: { menu: "Menu", visit: "Visiter", aria: "Navigation principale", homeAria: "Accueil PE-PA" },
    home: {
      location: "Trikala · Grèce",
      intro: "Souvlaki traditionnel & gyros grillé au charbon — sur la place centrale de Trikala.",
      viewMenu: "Voir le menu",
      findUs: "Nous trouver",
      menuTitle: "Le Menu",
      charcoal: "Grillé au charbon",
      pickup: "À emporter uniquement. Appelez-nous ou passez au restaurant pour commander.",
      reviewsTitle: "Ce qu'en disent nos clients",
      visitTitle: "Nous rendre visite",
      mapTitle: "Carte pour Souvlaki PE-PA",
      square: "Place Centrale",
      address: "1, rue 25is Martiou, Trikala 421 00",
      locationCopy: "Sur la place centrale, à côté de Sarafis et près de la rivière.",
      hours: "Horaires",
      directions: "Itinéraire",
      decemberOnly: "uniquement en décembre",
      days: ["Lun – Jeu", "Ven", "Sam", "Dim"],
      slogan: "« Petros grille, Pavlos sert !! »",
      heroAlt: "Souvlakis grillés au charbon",
      featured: [
        { name: "Gyros en Pita", label: "TOP 🔥", copy: "Notre gyros unique, grillé traditionnellement au charbon." },
        { name: "Souvlaki de Porc", label: "TOP 🔥", copy: "Porc local frais, mariné avec nos propres herbes, servi en pita ou dans du pain." },
        { name: "Souvlaki de Poulet", label: "Classique", copy: "Poulet juteux de fermes locales, grillé avec soin." },
        { name: "Tostia", label: "Spécial", copy: "Deux pitas au fromage kasseri." },
        { name: "Saucisse", label: "Classique", copy: "Saucisse de campagne traditionnelle, grillée au charbon." },
      ],
      reviews: [
        "L'une des meilleures adresses de souvlaki à Trikala. Les prix sont raisonnables — vous repartirez ravi.",
        "Un endroit merveilleux avec une cuisine excellente — authentique, délicieuse et abordable.",
        "Le meilleur gyros que j'aie jamais mangé. Poulet tendre, excellente mayonnaise et personnel accueillant.",
      ],
    },
    menuPage: {
      title: "Le Menu", charcoal: "Grillé au charbon", pickup: "À emporter uniquement. Appelez-nous ou passez au restaurant pour commander.", back: "Retour",
      sections: [
        { title: "Brochettes", items: [["Souvlaki de porc", sharedPrices.skewers[0], true], ["Souvlaki de poulet", sharedPrices.skewers[1]], ["Saucisse", sharedPrices.skewers[2]]] },
        { title: "Souvlaki en pita", items: [["Souvlaki de porc en pita", sharedPrices.wrappedSkewers[0], true], ["Souvlaki de poulet en pita", sharedPrices.wrappedSkewers[1]], ["Saucisse en pita", sharedPrices.wrappedSkewers[2]]] },
        { title: "Pitas", items: [["Gyros en pita", sharedPrices.pitas[0], true], ["Double gyros en pita", sharedPrices.pitas[1]], ["Gyros dans du pain", sharedPrices.pitas[2]], ["Assiette de gyros", sharedPrices.pitas[3]], ["Tostia", sharedPrices.pitas[4], true]] },
        { title: "Suppléments", items: [["Petite sauce supplémentaire", sharedPrices.extras[0]], ["Grande sauce supplémentaire", sharedPrices.extras[1]], ["Portion de frites", sharedPrices.extras[2]]] },
        { title: "Boissons", items: [["Boisson gazeuse 330ml", sharedPrices.drinks[0]], ["Boisson gazeuse 550ml", sharedPrices.drinks[1]], ["Bière 330ml", sharedPrices.drinks[2]], ["Eau 0,5l", sharedPrices.drinks[3]]] },
      ],
    },
    footer: { copy: "Souvlaki traditionnel grillé au charbon · Place centrale de Trikala.", call: "Appeler", address: "1, rue 25is Martiou · Trikala" },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("el");

  useEffect(() => {
    const saved = window.localStorage.getItem("pepa-language");
    if (saved === "el" || saved === "en" || saved === "fr") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage: (nextLanguage: Language) => {
      setLanguageState(nextLanguage);
      window.localStorage.setItem("pepa-language", nextLanguage);
    },
    t: translations[language],
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
