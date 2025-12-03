// Define supported languages
export type Language = "nl" | "en";

// Type definition for all translations
export type Translations = {
  [key in Language]: {
    home: {
      title: string;
      description: string;
      nav: {
        home: string;
        about: string;
        skills: string;
        contact: string;
      };
      languageSelector: {
        label: string;
      };
      hero: {
        greeting: string;
        subtitle: string;
        cta: string;
      };
      featureCards: {
        card1title: string;
        card1description: string;
        card2title: string;
        card2description: string;
        card3title: string;
        card3description: string;
      };
    };
    about: {
      title: string;
      description: string;
      nav: {
        home: string;
        about: string;
        skills: string;
        contact: string;
      };
      languageSelector: {
        label: string;
      };
      content: {
        heading: string;
        paragraph1: string;
        paragraph2: string;
      };
      experience: {
        years: string;
        yearsLabel: string;
        projects: string;
        projectsLabel: string;
        satisfaction: string;
        satisfactionLabel: string;
      };
    };
    skills: {
      title: string;
      description: string;
      nav: {
        home: string;
        about: string;
        skills: string;
        contact: string;
      };
      languageSelector: {
        label: string;
      };
      content: {
        heading: string;
        categories: {
          frontend: {
            title: string;
            skills: string[];
          };
          backend: {
            title: string;
            skills: string[];
          };
          tools: {
            title: string;
            skills: string[];
          };
        };
      };
    };
    contact: {
      title: string;
      description: string;
      nav: {
        home: string;
        about: string;
        skills: string;
        contact: string;
      };
      languageSelector: {
        label: string;
      };
      content: {
        heading: string;
        emailLabel: string;
        phoneLabel: string;
        locationLabel: string;
        email: string;
        phone: string;
        location: string;
      };
    };
  };
};

// All translations - Dutch and English
export const translations: Translations = {
  nl: {
    home: {
      title: "Home - Mijn Portfolio",
      description: "Welkom op mijn portfolio website",
      nav: {
        home: "Home",
        about: "Over Mij",
        skills: "Vaardigheden",
        contact: "Contact",
      },
      languageSelector: {
        label: "Taal",
      },
      hero: {
        greeting: "Hallo, ik ben een Front End Developer",
        subtitle:
          "Ik ontwerp en ontwikkel snelle, moderne en responsieve websites die op elk apparaat tot hun recht komen. Met een focus op nette code en een soepele gebruikerservaring bouw ik webapplicaties met Next.js, React en Tailwind CSS die prestaties en design perfect combineren. Mijn doel is om ideeën te vertalen naar elegante digitale ervaringen die niet alleen goed werken, maar ook prettig aanvoelen.",
        cta: "Ontdek Mijn Vaardigheden",
      },
      featureCards: {
        card1title: "Moderne Ontwerp",
        card1description:
          "Prachtige, responsieve interfaces gebouwd met Tailwind CSS v4",
        card2title: "Snelle Prestaties",
        card2description:
          "Geoptimaliseerd met Next.js 16 voor snelle pagina-loads",
        card3title: "Meertalig",
        card3description:
          "Volledige ondersteuning voor meerdere talen met eenvoudige schakeling",
      },
    },
    about: {
      title: "Over Mij - Mijn Portfolio",
      description: "Leer meer over mij en mijn achtergrond",
      nav: {
        home: "Home",
        about: "Over Mij",
        skills: "Vaardigheden",
        contact: "Contact",
      },
      languageSelector: {
        label: "Taal",
      },
      content: {
        heading: "Over Mij",
        paragraph1:
          "Ik ben een gepassioneerde front-end developer die graag moderne, gebruiksvriendelijke en visueel aantrekkelijke webervaringen creëert. Met oog voor detail en een sterke focus op gebruiksgemak vertaal ik complexe ideeën naar overzichtelijke, responsieve interfaces die prettig aanvoelen.",
        paragraph2:
          "Uit nieuwsgierigheid blijf ik voortdurend nieuwe technologieën verkennen, zoals Next.js, React en Tailwind CSS, om snelle, schaalbare en stijlvolle webapplicaties te ontwikkelen. Ik geloof dat goed design en sterke code hand in hand gaan, en dat zie je terug in elk project waar ik aan werk.",
      },
      experience: {
        years: "5+",
        yearsLabel: "Jaren Ervaring",
        projects: "50+",
        projectsLabel: "Projecten Voltooid",
        satisfaction: "100%",
        satisfactionLabel: "Klanttevredenheid",
      },
    },
    skills: {
      title: "Vaardigheden - Mijn Portfolio",
      description: "Mijn technische vaardigheden en expertise",
      nav: {
        home: "Home",
        about: "Over Mij",
        skills: "Vaardigheden",
        contact: "Contact",
      },
      languageSelector: {
        label: "Taal",
      },
      content: {
        heading: "Mijn Vaardigheden",
        categories: {
          frontend: {
            title: "Front End Development",
            skills: [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
            ],
          },
          backend: {
            title: "Back End Development",
            skills: ["Node.js", "Axios", "PostgreSQL", "MongoDB"],
          },
          tools: {
            title: "Tools & Technologieën",
            skills: ["GitHub", "Cursor", "Figma", "Vercel"],
          },
        },
      },
    },
    contact: {
      title: "Contact - Mijn Portfolio",
      description: "Neem contact met me op",
      nav: {
        home: "Home",
        about: "Over Mij",
        skills: "Vaardigheden",
        contact: "Contact",
      },
      languageSelector: {
        label: "Taal",
      },
      content: {
        heading: "Neem Contact Op",
        emailLabel: "E-mail",
        phoneLabel: "Telefoon",
        locationLabel: "Locatie",
        email: "info@fontys.nl",
        phone: "+31 6 12345678",
        location: "Tilburg, Nederland",
      },
    },
  },
  en: {
    home: {
      title: "Home - My Portfolio",
      description: "Welcome to my portfolio website",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        contact: "Contact",
      },
      languageSelector: {
        label: "Language",
      },
      hero: {
        greeting: "Hello, I'm a Front End Developer",
        subtitle:
          "I design and develop fast, modern, and responsive websites that look great on any device. With a focus on clean code and smooth user experiences, I build web applications using Next.js, React, and Tailwind CSS that combine performance and style. My goal is to turn ideas into elegant digital experiences that not only work well, but feel right.",
        cta: "Explore My Skills",
      },
      featureCards: {
        card1title: "Modern Design",
        card1description:
          "Beautiful, responsive interfaces built with Tailwind CSS v4",
        card2title: "Fast Performance",
        card2description:
          "Optimized with Next.js 16 for lightning-fast page loads",
        card3title: "Multilingual",
        card3description:
          "Full support for multiple languages with easy switching",
      },
    },
    about: {
      title: "About - My Portfolio",
      description: "Learn more about me and my background",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        contact: "Contact",
      },
      languageSelector: {
        label: "Language",
      },
      content: {
        heading: "About Me",
        paragraph1:
          "I'm a passionate front-end developer who loves creating clean, modern, and intuitive web experiences. With a strong focus on detail and usability, I enjoy turning complex ideas into elegant, responsive interfaces that feel effortless to use.",
        paragraph2:
          "Driven by curiosity, I'm always exploring new technologies like Next.js, React, and Tailwind CSS to build fast, scalable, and visually appealing web applications. I believe great design and solid code go hand in hand, and I aim to bring that balance to every project I work on.",
      },
      experience: {
        years: "5+",
        yearsLabel: "Years Experience",
        projects: "50+",
        projectsLabel: "Projects Completed",
        satisfaction: "100%",
        satisfactionLabel: "Client Satisfaction",
      },
    },
    skills: {
      title: "Skills - My Portfolio",
      description: "My technical skills and expertise",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        contact: "Contact",
      },
      languageSelector: {
        label: "Language",
      },
      content: {
        heading: "My Skills",
        categories: {
          frontend: {
            title: "Front End Development",
            skills: [
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML5",
              "CSS3",
            ],
          },
          backend: {
            title: "Back End Development",
            skills: ["Node.js", "Axios", "PostgreSQL", "MongoDB"],
          },
          tools: {
            title: "Tools & Technologies",
            skills: ["GitHub", "Cursor", "Figma", "Vercel"],
          },
        },
      },
    },
    contact: {
      title: "Contact - My Portfolio",
      description: "Get in touch with me",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        contact: "Contact",
      },
      languageSelector: {
        label: "Language",
      },
      content: {
        heading: "Get In Touch",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        email: "info@fontys.nl",
        phone: "+31 6 12345678",
        location: "Eindhoven, Netherlands",
      },
    },
  },
};

// Helper function to get translations for a language
export function getTranslations(lang: Language) {
  return translations[lang] || translations.nl;
}

// Validate and return a safe language code
export function validateLanguage(lang: string): Language {
  if (lang === "nl" || lang === "en") {
    return lang;
  }
  return "nl"; // Default to Dutch
}
