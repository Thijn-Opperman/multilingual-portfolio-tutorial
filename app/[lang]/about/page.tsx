import { Metadata } from "next";
import { getTranslations, validateLanguage } from "../../translations";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang);

  return {
    title: t.about.title,
    description: t.about.description,
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang).about;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">{t.content.heading}</span>
        </h1>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.content.paragraph1}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.content.paragraph2}
        </p>

        <div className="pt-8 flex justify-center">
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-linear-to-br from-primary to-primary/80 text-white p-6 rounded-xl text-center">
          <div className="text-4xl font-bold mb-2">{t.experience.years}</div>
          <div className="text-sm opacity-90">{t.experience.yearsLabel}</div>
        </div>
        <div className="bg-linear-to-br from-secondary to-secondary/80 text-white p-6 rounded-xl text-center">
          <div className="text-4xl font-bold mb-2">{t.experience.projects}</div>
          <div className="text-sm opacity-90">{t.experience.projectsLabel}</div>
        </div>
        <div className="bg-linear-to-br from-accent to-accent/80 text-white p-6 rounded-xl text-center">
          <div className="text-4xl font-bold mb-2">
            {t.experience.satisfaction}
          </div>
          <div className="text-sm opacity-90">
            {t.experience.satisfactionLabel}
          </div>
        </div>
      </div>
    </div>
  );
}