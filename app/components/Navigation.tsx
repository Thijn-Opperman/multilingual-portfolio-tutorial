"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Language } from "../translations";

interface NavigationProps {
  lang: Language;
  navItems: {
    href: string;
    label: string;
  }[];
  languageLabel: string;
}

export default function Navigation({
  lang,
  navItems,
  languageLabel,
}: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = pathname.split("/").slice(2).join("/") || "";

  const changeLanguage = (newLang: string) => {
    const newPath = currentPage ? `/${newLang}/${currentPage}` : `/${newLang}`;
    router.push(newPath);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href={`/${lang}`}
            className="text-xl font-bold uppercase bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="relative">
              <label htmlFor="language-select" className="sr-only">
                {languageLabel}
              </label>
              <select
                id="language-select"
                value={lang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 
                         text-sm font-medium text-gray-700 hover:border-primary focus:outline-none 
                         focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer
                         transition-all"
              >
                <option value="nl">🇳🇱 Nederlands</option>
                <option value="en">🇬🇧 English</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="es">🇪🇸 Español</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <select
              value={lang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 
                       text-sm font-medium text-gray-700"
            >
              <option value="nl">🇳🇱 NL</option>
              <option value="en">🇬🇧 EN</option>
              <option value="de">🇩🇪 DE</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>
        </div>
        <div className="md:hidden pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
