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
          "User Name": "User Name",
          Name: "Name",
          Email: "Email",
          Password: "Password",
          "Validate Password": "Validate Password",
          Create: "Create",
          "Password is not matching": "Password is not matching",
          "Verify the username, the username should not contains spaces":
            "Verify the username, the username should not contains spaces",
          "Failed to sign up": "Failed to sign up",
          "Verify the last name": "Verify the last name",
          "Verify the email": "Verify the email",
          "Verify the password, make sure that password is at least 6 characters long":
            "Verify the password, make sure that password is at least 6 characters long",
          "I'm a professor": "I'm a professor",
          "I'm a student": "I'm a student",
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
          "User Name": "Nom d'utilisateur",
          Name: "Nom",
          Email: "Email",
          Password: "Mot de passe",
          "Validate Password": "Valider le mot de passe",
          Create: "Créer",
          "Password is not matching": "Le mot de passe ne correspond pas",
          "Verify the username, the username should not contains spaces":
            "Vérifiez le nom d'utilisateur, le nom d'utilisateur ne doit pas contenir d'espaces",
          "Failed to sign up": "Échec de l'inscription",
          "Verify the last name": "Vérifiez le nom",
          "Verify the email": "Vérifiez l'e-mail",
          "Verify the password, make sure that password is at least 6 characters long":
            "Vérifiez le mot de passe, assurez-vous que ce mot de passe comporte au moins 6 caractères.",
          "I'm a professor": "Je suis un professeur",
          "I'm a student": "Je suis un étudiant",
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
