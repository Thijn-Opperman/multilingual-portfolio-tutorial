import { Metadata } from "next";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { getTranslations, validateLanguage } from "../../translations";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang);

  return {
    title: t.contact.title,
    description: t.contact.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang: langParam } = await params;
  const lang = validateLanguage(langParam);
  const t = getTranslations(lang).contact;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">{t.content.heading}</span>
        </h1>
      </div>

      <div className="space-y-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all hover:scale-[1.02]">
          <div className="flex items-center">
            <FaEnvelope className="w-8 h-8 text-primary mr-8" />
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide">
                {t.content.emailLabel}
              </h3>
              <p className="text-xl font-semibold text-gray-800">
                {t.content.email}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all hover:scale-[1.02]">
          <div className="flex items-center">
            <FaPhone className="w-8 h-8 text-secondary mr-8" />
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide">
                {t.content.phoneLabel}
              </h3>
              <p className="text-xl font-semibold text-gray-800">
                {t.content.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all hover:scale-[1.02]">
          <div className="flex items-center">
            <FaLocationDot className="w-8 h-8 text-accent mr-8" />
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wide">
                {t.content.locationLabel}
              </h3>
              <p className="text-xl font-semibold text-gray-800">
                {t.content.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          {lang === "nl"
            ? "Klaar om samen te werken? Neem vandaag nog contact op!"
            : "Ready to work together? Get in touch today!"}
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block bg-primary text-white 
                   px-8 py-4 rounded-full font-semibold text-lg
                   hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          {lang === "nl" ? "Stuur Een Bericht" : "Send a Message"}
        </a>
      </div>
    </div>
  );
}
