import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUs from './en-us/en-us';
import ptBr from './pt-br/pt-br';

const resources = {
  en: enUs,
  pt: ptBr
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;