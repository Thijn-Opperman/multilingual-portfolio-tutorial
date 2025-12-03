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
    title: t.skills.title,
    description: t.skills.description,
  };
}

export default async function SkillsPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang).skills;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">{t.content.heading}</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {t.content.categories.frontend.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {t.content.categories.frontend.skills.map((skill) => (
              <li key={skill} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {t.content.categories.backend.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {t.content.categories.backend.skills.map((skill) => (
              <li key={skill} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {t.content.categories.tools.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {t.content.categories.tools.skills.map((skill) => (
              <li key={skill} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
