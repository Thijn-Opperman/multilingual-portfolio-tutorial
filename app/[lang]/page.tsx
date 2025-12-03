import { Metadata } from "next";
import Link from "next/link";
import { getTranslations, validateLanguage } from "../translations";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang);

  return {
    title: t.home.title,
    description: t.home.description,
  };
}

export default async function HomePage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang).home;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="text-gray-900">{t.hero.greeting}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="pt-8">
          <Link
            href={`/${lang}/skills`}
            className="inline-block bg-primary text-white 
                     px-8 py-4 rounded-full font-semibold text-lg
                     hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            {t.hero.cta}
          </Link>
        </div>
      </div>
      <div className="mt-32 grid md:grid-cols-3 gap-8">
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {t.featureCards.card1title}
          </h3>
          <p className="text-gray-600">{t.featureCards.card1description}</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-secondary">
            {t.featureCards.card2title}
          </h3>
          <p className="text-gray-600">{t.featureCards.card2description}</p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2 text-accent">
            {t.featureCards.card3title}
          </h3>
          <p className="text-gray-600">{t.featureCards.card3description}</p>
        </div>
      </div>
    </div>
  );
}
