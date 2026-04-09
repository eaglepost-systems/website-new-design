import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

document.documentElement.dir = "ltr";
document.documentElement.lang = "en";
document.documentElement.style.fontFamily = "";

export default i18n;
