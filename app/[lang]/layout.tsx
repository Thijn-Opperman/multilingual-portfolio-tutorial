import { getTranslations, validateLanguage } from "../translations";
import Navigation from "../components/Navigation";

export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }];
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang);

  const navItems = [
    { href: `/${lang}`, label: t.home.nav.home },
    { href: `/${lang}/about`, label: t.home.nav.about },
    { href: `/${lang}/skills`, label: t.home.nav.skills },
    { href: `/${lang}/contact`, label: t.home.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Navigation
        lang={lang}
        navItems={navItems}
        languageLabel={t.home.languageSelector.label}
      />
      <main>{children}</main>
    </div>
  );
}
