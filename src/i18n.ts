import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import ku from "./locales/ku.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ku: { translation: ku },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Set initial direction and font based on detected language
const lang = i18n.language?.startsWith("en") ? "en" : i18n.language;
document.documentElement.dir = !lang || lang.startsWith("en") ? "ltr" : "rtl";
document.documentElement.lang = lang || "en";
if (lang === "ar" || lang === "ku") {
  document.documentElement.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
} else {
  document.documentElement.style.fontFamily = "";
}

export default i18n;
