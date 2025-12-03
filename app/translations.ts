// Define supported languages
export type Language = "nl" | "en" | "de" | "fr" | "es";

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
        projects: string;
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
        projects: string;
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
        projects: string;
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
    projects: {
      title: string;
      description: string;
      nav: {
        home: string;
        about: string;
        skills: string;
        projects: string;
        contact: string;
      };
      languageSelector: {
        label: string;
      };
      content: {
        heading: string;
        projects: {
          project1: {
            title: string;
            description: string;
            tech: string;
          };
          project2: {
            title: string;
            description: string;
            tech: string;
          };
          project3: {
            title: string;
            description: string;
            tech: string;
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
        projects: string;
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
        projects: "Projecten",
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
        projects: "Projecten",
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
        projects: "Projecten",
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
        projects: "Projecten",
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
        location: "Amsterdam, Nederland",
      },
    },
    projects: {
      title: "Projecten - Mijn Portfolio",
      description: "Bekijk mijn recente projecten en werk",
      nav: {
        home: "Home",
        about: "Over Mij",
        skills: "Vaardigheden",
        projects: "Projecten",
        contact: "Contact",
      },
      languageSelector: {
        label: "Taal",
      },
      content: {
        heading: "Mijn Projecten",
        projects: {
          project1: {
            title: "E-commerce Platform",
            description: "Volledig responsief e-commerce platform gebouwd met Next.js en Stripe integratie. Bevat product catalogus, winkelwagen, checkout proces en admin dashboard.",
            tech: "Next.js, TypeScript, Tailwind CSS, Stripe, PostgreSQL",
          },
          project2: {
            title: "Task Management App",
            description: "Moderne task management applicatie met real-time updates, team collaboratie en project tracking. Gebouwd met React en Firebase voor real-time synchronisatie.",
            tech: "React, Firebase, Material-UI, Redux",
          },
          project3: {
            title: "Portfolio Website",
            description: "Meertalige portfolio website met moderne UI/UX design. Volledig geoptimaliseerd voor SEO en performance met Next.js 16 en Tailwind CSS v4.",
            tech: "Next.js, TypeScript, Tailwind CSS, i18n",
          },
        },
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
        projects: "Projects",
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
        projects: "Projects",
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
        projects: "Projects",
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
        projects: "Projects",
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
        location: "Amsterdam, Netherlands",
      },
    },
    projects: {
      title: "Projects - My Portfolio",
      description: "View my recent projects and work",
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      languageSelector: {
        label: "Language",
      },
      content: {
        heading: "My Projects",
        projects: {
          project1: {
            title: "E-commerce Platform",
            description: "Fully responsive e-commerce platform built with Next.js and Stripe integration. Features product catalog, shopping cart, checkout process and admin dashboard.",
            tech: "Next.js, TypeScript, Tailwind CSS, Stripe, PostgreSQL",
          },
          project2: {
            title: "Task Management App",
            description: "Modern task management application with real-time updates, team collaboration and project tracking. Built with React and Firebase for real-time synchronization.",
            tech: "React, Firebase, Material-UI, Redux",
          },
          project3: {
            title: "Portfolio Website",
            description: "Multilingual portfolio website with modern UI/UX design. Fully optimized for SEO and performance with Next.js 16 and Tailwind CSS v4.",
            tech: "Next.js, TypeScript, Tailwind CSS, i18n",
          },
        },
      },
    },
  },
  de: {
    home: {
      title: "Startseite - Mein Portfolio",
      description: "Willkommen auf meiner Portfolio-Website",
      nav: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
      },
      languageSelector: {
        label: "Sprache",
      },
      hero: {
        greeting: "Hallo, ich bin Front-End-Entwickler",
        subtitle:
          "Ich erstelle moderne, responsive Websites mit Next.js und Tailwind CSS",
        cta: "Meine Arbeit ansehen",
      },
      featureCards: {
        card1title: "Modernes Design",
        card1description:
          "Schöne, responsive Benutzeroberflächen mit Tailwind CSS v4",
        card2title: "Schnelle Leistung",
        card2description:
          "Optimiert mit Next.js 16 für blitzschnelle Seitenladezeiten",
        card3title: "Mehrsprachig",
        card3description:
          "Vollständige Unterstützung für mehrere Sprachen mit einfachem Wechsel",
      },
    },
    about: {
      title: "Über mich - Mein Portfolio",
      description: "Erfahren Sie mehr über mich und meinen Hintergrund",
      nav: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
      },
      languageSelector: {
        label: "Sprache",
      },
      content: {
        heading: "Über mich",
        paragraph1:
          "Ich bin ein leidenschaftlicher Front-End-Entwickler, der gerne moderne, benutzerfreundliche und visuell ansprechende Web-Erlebnisse erstellt. Mit einem Auge für Details und einem starken Fokus auf Benutzerfreundlichkeit übersetze ich komplexe Ideen in übersichtliche, responsive Benutzeroberflächen, die sich gut anfühlen.",
        paragraph2:
          "Aus Neugier erkunde ich ständig neue Technologien wie Next.js, React und Tailwind CSS, um schnelle, skalierbare und stilvolle Webanwendungen zu entwickeln. Ich glaube, dass gutes Design und solider Code Hand in Hand gehen, und das spiegelt sich in jedem Projekt wider, an dem ich arbeite.",
      },
      experience: {
        years: "5+",
        yearsLabel: "Jahre Erfahrung",
        projects: "50+",
        projectsLabel: "Abgeschlossene Projekte",
        satisfaction: "100%",
        satisfactionLabel: "Kundenzufriedenheit",
      },
    },
    skills: {
      title: "Fähigkeiten - Mein Portfolio",
      description: "Meine technischen Fähigkeiten und Expertise",
      nav: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
      },
      languageSelector: {
        label: "Sprache",
      },
      content: {
        heading: "Meine Fähigkeiten",
        categories: {
          frontend: {
            title: "Front-End-Entwicklung",
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
            title: "Back-End-Entwicklung",
            skills: ["Node.js", "Axios", "PostgreSQL", "MongoDB"],
          },
          tools: {
            title: "Tools & Technologien",
            skills: ["GitHub", "Cursor", "Figma", "Vercel"],
          },
        },
      },
    },
    contact: {
      title: "Kontakt - Mein Portfolio",
      description: "Nehmen Sie Kontakt mit mir auf",
      nav: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
      },
      languageSelector: {
        label: "Sprache",
      },
      content: {
        heading: "Kontakt aufnehmen",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        locationLabel: "Standort",
        email: "info@fontys.nl",
        phone: "+31 6 12345678",
        location: "Berlin, Deutschland",
      },
    },
    projects: {
      title: "Projekte - Mein Portfolio",
      description: "Sehen Sie meine neuesten Projekte und Arbeiten",
      nav: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
      },
      languageSelector: {
        label: "Sprache",
      },
      content: {
        heading: "Meine Projekte",
        projects: {
          project1: {
            title: "E-Commerce-Plattform",
            description: "Vollständig responsive E-Commerce-Plattform mit Next.js und Stripe-Integration. Enthält Produktkatalog, Warenkorb, Checkout-Prozess und Admin-Dashboard.",
            tech: "Next.js, TypeScript, Tailwind CSS, Stripe, PostgreSQL",
          },
          project2: {
            title: "Aufgabenverwaltungs-App",
            description: "Moderne Aufgabenverwaltungsanwendung mit Echtzeit-Updates, Team-Kollaboration und Projektverfolgung. Erstellt mit React und Firebase für Echtzeit-Synchronisation.",
            tech: "React, Firebase, Material-UI, Redux",
          },
          project3: {
            title: "Portfolio-Website",
            description: "Mehrsprachige Portfolio-Website mit modernem UI/UX-Design. Vollständig optimiert für SEO und Performance mit Next.js 16 und Tailwind CSS v4.",
            tech: "Next.js, TypeScript, Tailwind CSS, i18n",
          },
        },
      },
    },
  },
  fr: {
    home: {
      title: "Accueil - Mon Portfolio",
      description: "Bienvenue sur mon site portfolio",
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      languageSelector: {
        label: "Langue",
      },
      hero: {
        greeting: "Bonjour, je suis développeur Front-End",
        subtitle:
          "Je crée des sites web modernes et responsives avec Next.js et Tailwind CSS",
        cta: "Voir mon travail",
      },
      featureCards: {
        card1title: "Design Moderne",
        card1description:
          "De belles interfaces responsives construites avec Tailwind CSS v4",
        card2title: "Performance Rapide",
        card2description:
          "Optimisé avec Next.js 16 pour des chargements de page ultra-rapides",
        card3title: "Multilingue",
        card3description:
          "Support complet pour plusieurs langues avec changement facile",
      },
    },
    about: {
      title: "À propos - Mon Portfolio",
      description: "En savoir plus sur moi et mon parcours",
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      languageSelector: {
        label: "Langue",
      },
      content: {
        heading: "À propos de moi",
        paragraph1:
          "Je suis un développeur front-end passionné qui aime créer des expériences web propres, modernes et intuitives. Avec un fort accent sur les détails et la convivialité, j'aime transformer des idées complexes en interfaces élégantes et responsives qui semblent sans effort à utiliser.",
        paragraph2:
          "Poussé par la curiosité, j'explore toujours de nouvelles technologies comme Next.js, React et Tailwind CSS pour créer des applications web rapides, évolutives et visuellement attrayantes. Je crois que le bon design et le code solide vont de pair, et je vise à apporter cet équilibre à chaque projet sur lequel je travaille.",
      },
      experience: {
        years: "5+",
        yearsLabel: "Années d'expérience",
        projects: "50+",
        projectsLabel: "Projets terminés",
        satisfaction: "100%",
        satisfactionLabel: "Satisfaction client",
      },
    },
    skills: {
      title: "Compétences - Mon Portfolio",
      description: "Mes compétences techniques et mon expertise",
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      languageSelector: {
        label: "Langue",
      },
      content: {
        heading: "Mes compétences",
        categories: {
          frontend: {
            title: "Développement Front-End",
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
            title: "Développement Back-End",
            skills: ["Node.js", "Axios", "PostgreSQL", "MongoDB"],
          },
          tools: {
            title: "Outils & Technologies",
            skills: ["GitHub", "Cursor", "Figma", "Vercel"],
          },
        },
      },
    },
    contact: {
      title: "Contact - Mon Portfolio",
      description: "Entrer en contact avec moi",
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      languageSelector: {
        label: "Langue",
      },
      content: {
        heading: "Entrer en contact",
        emailLabel: "E-mail",
        phoneLabel: "Téléphone",
        locationLabel: "Localisation",
        email: "info@fontys.nl",
        phone: "+31 6 12345678",
        location: "Paris, France",
      },
    },
    projects: {
      title: "Projets - Mon Portfolio",
      description: "Voir mes projets récents et mon travail",
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
      },
      languageSelector: {
        label: "Langue",
      },
      content: {
        heading: "Mes Projets",
        projects: {
          project1: {
            title: "Plateforme E-commerce",
            description: "Plateforme e-commerce entièrement responsive construite avec Next.js et intégration Stripe. Comprend catalogue de produits, panier, processus de paiement et tableau de bord administrateur.",
            tech: "Next.js, TypeScript, Tailwind CSS, Stripe, PostgreSQL",
          },
          project2: {
            title: "Application de Gestion de Tâches",
            description: "Application moderne de gestion de tâches avec mises à jour en temps réel, collaboration d'équipe et suivi de projet. Construite avec React et Firebase pour la synchronisation en temps réel.",
            tech: "React, Firebase, Material-UI, Redux",
          },
          project3: {
            title: "Site Portfolio",
            description: "Site portfolio multilingue avec un design UI/UX moderne. Entièrement optimisé pour le SEO et les performances avec Next.js 16 et Tailwind CSS v4.",
            tech: "Next.js, TypeScript, Tailwind CSS, i18n",
          },
        },
      },
    },
  },
  es: {
    home: {
      title: "Inicio - Mi Portfolio",
      description: "Bienvenido a mi sitio web de portfolio",
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageSelector: {
        label: "Idioma",
      },
      hero: {
        greeting: "Hola, soy Desarrollador Front-End",
        subtitle:
          "Diseño y desarrollo sitios web rápidos, modernos y responsivos que se ven geniales en cualquier dispositivo. Con un enfoque en código limpio y experiencias de usuario fluidas, construyo aplicaciones web usando Next.js, React y Tailwind CSS que combinan rendimiento y estilo.",
        cta: "Explorar Mis Habilidades",
      },
      featureCards: {
        card1title: "Diseño Moderno",
        card1description:
          "Interfaces hermosas y responsivas construidas con Tailwind CSS v4",
        card2title: "Rendimiento Rápido",
        card2description:
          "Optimizado con Next.js 16 para cargas de página ultrarrápidas",
        card3title: "Multilingüe",
        card3description:
          "Soporte completo para múltiples idiomas con cambio fácil",
      },
    },
    about: {
      title: "Sobre Mí - Mi Portfolio",
      description: "Aprende más sobre mí y mi experiencia",
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageSelector: {
        label: "Idioma",
      },
      content: {
        heading: "Sobre Mí",
        paragraph1:
          "Soy un desarrollador front-end apasionado que ama crear experiencias web limpias, modernas e intuitivas. Con un fuerte enfoque en los detalles y la usabilidad, disfruto transformando ideas complejas en interfaces elegantes y responsivas que se sienten sin esfuerzo de usar.",
        paragraph2:
          "Impulsado por la curiosidad, siempre estoy explorando nuevas tecnologías como Next.js, React y Tailwind CSS para construir aplicaciones web rápidas, escalables y visualmente atractivas. Creo que el gran diseño y el código sólido van de la mano, y me esfuerzo por llevar ese equilibrio a cada proyecto en el que trabajo.",
      },
      experience: {
        years: "5+",
        yearsLabel: "Años de Experiencia",
        projects: "50+",
        projectsLabel: "Proyectos Completados",
        satisfaction: "100%",
        satisfactionLabel: "Satisfacción del Cliente",
      },
    },
    skills: {
      title: "Habilidades - Mi Portfolio",
      description: "Mis habilidades técnicas y experiencia",
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageSelector: {
        label: "Idioma",
      },
      content: {
        heading: "Mis Habilidades",
        categories: {
          frontend: {
            title: "Desarrollo Front-End",
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
            title: "Desarrollo Back-End",
            skills: ["Node.js", "Axios", "PostgreSQL", "MongoDB"],
          },
          tools: {
            title: "Herramientas y Tecnologías",
            skills: ["GitHub", "Cursor", "Figma", "Vercel"],
          },
        },
      },
    },
    projects: {
      title: "Proyectos - Mi Portfolio",
      description: "Ver mis proyectos recientes y trabajo",
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageSelector: {
        label: "Idioma",
      },
      content: {
        heading: "Mis Proyectos",
        projects: {
          project1: {
            title: "Plataforma E-commerce",
            description: "Plataforma de comercio electrónico completamente responsive construida con Next.js e integración de Stripe. Incluye catálogo de productos, carrito de compras, proceso de pago y panel de administración.",
            tech: "Next.js, TypeScript, Tailwind CSS, Stripe, PostgreSQL",
          },
          project2: {
            title: "Aplicación de Gestión de Tareas",
            description: "Aplicación moderna de gestión de tareas con actualizaciones en tiempo real, colaboración en equipo y seguimiento de proyectos. Construida con React y Firebase para sincronización en tiempo real.",
            tech: "React, Firebase, Material-UI, Redux",
          },
          project3: {
            title: "Sitio Web Portfolio",
            description: "Sitio web de portfolio multilingüe con diseño UI/UX moderno. Completamente optimizado para SEO y rendimiento con Next.js 16 y Tailwind CSS v4.",
            tech: "Next.js, TypeScript, Tailwind CSS, i18n",
          },
        },
      },
    },
    contact: {
      title: "Contacto - Mi Portfolio",
      description: "Ponerse en contacto conmigo",
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageSelector: {
        label: "Idioma",
      },
      content: {
        heading: "Ponerse en Contacto",
        emailLabel: "Correo Electrónico",
        phoneLabel: "Teléfono",
        locationLabel: "Ubicación",
        email: "contacto@ejemplo.com",
        phone: "+34 6 12345678",
        location: "Madrid, España",
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
  if (lang === "nl" || lang === "en" || lang === "de" || lang === "fr" || lang === "es") {
    return lang;
  }
  return "nl"; // Default fallback
}