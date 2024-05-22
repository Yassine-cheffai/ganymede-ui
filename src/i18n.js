import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Reserve a private lesson": "Reserve a private lesson",
          Login: "Login",
          "Sign up": "Sign up",
          "Welcome to FoxFit, Your Online Sport Platform":
            "Welcome to FoxFit, Your Online Sport Platform",
          "Book an online course": "Book an online course",
          Specialities: "Specialities",
          Description: "Description",
          "Create Account": "Create Account",
          "First Name": "First Name",
          "Last Name": "Last Name",
          Email: "Email",
          Password: "Password",
          "Validate Password": "Validate Password",
          Create: "Create",
        },
      },
      fr: {
        translation: {
          "Reserve a private lesson": "Réserver un cours privé",
          Login: "Se connecter",
          "Sign up": "S'inscrire",
          "Welcome to FoxFit, Your Online Sport Platform":
            "Bienvenue sur FoxFit, Votre Plateforme de Sport en Ligne",
          "Book an online course": "Réserver un cours en ligne",
          Specialities: "Spécialités",
          Description: "Description",
          "Create Account": "Créer un compte",
          "First Name": "Prénom",
          "Last Name": "Nom",
          Email: "Email",
          Password: "Mot de passe",
          "Validate Password": "Valider le mot de passe",
          Create: "Créer",
        },
      },
    },
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

// i18n.changeLanguage("fr");
