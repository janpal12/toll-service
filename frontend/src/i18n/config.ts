import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        roads: 'Toll Roads',
        dashboard: 'Dashboard',
        transponders: 'Transponders',
        trips: 'My Trips',
        about: 'About',
        faq: 'FAQ',
        contact: 'Contact',
      },
      auth: {
        login: 'Login',
        register: 'Register',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        firstName: 'First Name',
        lastName: 'Last Name',
        forgotPassword: 'Forgot Password?',
        rememberMe: 'Remember me',
      },
      footer: {
        about: 'European toll roads aggregator platform',
        company: 'Company',
        support: 'Support',
        legal: 'Legal',
      },
      home: {
        title: 'European Toll Roads Made Simple',
        subtitle: 'Calculate, pay, and manage your European toll roads in one place',
        cta: 'Get Started',
        features: 'Features',
        pricing: 'Pricing',
        faq: 'FAQ',
      },
    }
  },
  de: {
    translation: {
      nav: {
        roads: 'Mautstraßen',
        dashboard: 'Dashboard',
        transponders: 'Transpondern',
        trips: 'Meine Fahrten',
        about: 'Über uns',
        faq: 'Häufig gestellte Fragen',
        contact: 'Kontakt',
      },
      auth: {
        login: 'Anmelden',
        register: 'Registrieren',
        email: 'E-Mail',
        password: 'Passwort',
        confirmPassword: 'Passwort bestätigen',
        firstName: 'Vorname',
        lastName: 'Nachname',
        forgotPassword: 'Passwort vergessen?',
        rememberMe: 'Angemeldet bleiben',
      },
      footer: {
        about: 'Europäische Mautstraßen-Aggregator-Plattform',
        company: 'Unternehmen',
        support: 'Unterstützung',
        legal: 'Rechtliches',
      },
      home: {
        title: 'Europäische Mautstraßen leicht gemacht',
        subtitle: 'Berechnen, zahlen und verwalten Sie Ihre europäischen Mautstraßen an einem Ort',
        cta: 'Erste Schritte',
        features: 'Features',
        pricing: 'Preise',
        faq: 'Häufig gestellte Fragen',
      },
    }
  },
  fr: {
    translation: {
      nav: {
        roads: 'Routes à péage',
        dashboard: 'Tableau de bord',
        transponders: 'Transpondeurs',
        trips: 'Mes trajets',
        about: 'À propos',
        faq: 'FAQ',
        contact: 'Contact',
      },
      auth: {
        login: 'Connexion',
        register: 'Inscription',
        email: 'E-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        firstName: 'Prénom',
        lastName: 'Nom',
        forgotPassword: 'Mot de passe oublié?',
        rememberMe: 'Se souvenir de moi',
      },
      footer: {
        about: 'Plateforme agrégatrice de routes à péage européennes',
        company: 'Entreprise',
        support: 'Support',
        legal: 'Légal',
      },
      home: {
        title: 'Les routes à péage européennes simplifiées',
        subtitle: 'Calculez, payez et gérez vos routes à péage européennes au même endroit',
        cta: 'Commencer',
        features: 'Caractéristiques',
        pricing: 'Tarification',
        faq: 'FAQ',
      },
    }
  },
  es: {
    translation: {
      nav: {
        roads: 'Carreteras de peaje',
        dashboard: 'Panel de control',
        transponders: 'Transpondedores',
        trips: 'Mis viajes',
        about: 'Acerca de',
        faq: 'Preguntas frecuentes',
        contact: 'Contacto',
      },
      auth: {
        login: 'Iniciar sesión',
        register: 'Registrarse',
        email: 'Correo electrónico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        firstName: 'Nombre',
        lastName: 'Apellido',
        forgotPassword: '¿Olvidó su contraseña?',
        rememberMe: 'Recuérdame',
      },
      footer: {
        about: 'Plataforma agregadora de carreteras de peaje europeas',
        company: 'Empresa',
        support: 'Soporte',
        legal: 'Legal',
      },
      home: {
        title: 'Carreteras de peaje europeas simplificadas',
        subtitle: 'Calcule, pague y administre sus carreteras de peaje europeas en un solo lugar',
        cta: 'Comenzar',
        features: 'Características',
        pricing: 'Precios',
        faq: 'Preguntas frecuentes',
      },
    }
  },
  pl: {
    translation: {
      nav: {
        roads: 'Drogi płatne',
        dashboard: 'Pulpit nawigacyjny',
        transponders: 'Transpondery',
        trips: 'Moje podróże',
        about: 'O nas',
        faq: 'Często zadawane pytania',
        contact: 'Kontakt',
      },
      auth: {
        login: 'Zaloguj się',
        register: 'Zarejestruj się',
        email: 'Email',
        password: 'Hasło',
        confirmPassword: 'Potwierdź hasło',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        forgotPassword: 'Zapomniałeś hasła?',
        rememberMe: 'Zapamiętaj mnie',
      },
      footer: {
        about: 'Europejska platforma agregatora dróg płatnych',
        company: 'Firma',
        support: 'Wsparcie',
        legal: 'Prawo',
      },
      home: {
        title: 'Europejskie drogi płatne uproszczone',
        subtitle: 'Oblicz, zapłać i zarządzaj swoimi europejskimi drogami płatnymi w jednym miejscu',
        cta: 'Rozpocznij',
        features: 'Funkcje',
        pricing: 'Ceny',
        faq: 'Często zadawane pytania',
      },
    }
  },
  it: {
    translation: {
      nav: {
        roads: 'Strade a pedaggio',
        dashboard: 'Pannello di controllo',
        transponders: 'Transponder',
        trips: 'I miei viaggi',
        about: 'Chi siamo',
        faq: 'Domande frequenti',
        contact: 'Contatti',
      },
      auth: {
        login: 'Accedi',
        register: 'Registrati',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Conferma password',
        firstName: 'Nome',
        lastName: 'Cognome',
        forgotPassword: 'Password dimenticata?',
        rememberMe: 'Ricordami',
      },
      footer: {
        about: 'Piattaforma aggregatrice di strade a pedaggio europee',
        company: 'Azienda',
        support: 'Supporto',
        legal: 'Legale',
      },
      home: {
        title: 'Strade a pedaggio europee semplificate',
        subtitle: 'Calcola, paga e gestisci le tue strade a pedaggio europee in un unico posto',
        cta: 'Inizia',
        features: 'Caratteristiche',
        pricing: 'Prezzi',
        faq: 'Domande frequenti',
      },
    }
  },
  cs: {
    translation: {
      nav: {
        roads: 'Zpoplatněné cesty',
        dashboard: 'Přehled',
        transponders: 'Transpondery',
        trips: 'Moje cesty',
        about: 'O nás',
        faq: 'Často kladené otázky',
        contact: 'Kontakt',
      },
      auth: {
        login: 'Přihlásit se',
        register: 'Zaregistrovat se',
        email: 'Email',
        password: 'Heslo',
        confirmPassword: 'Potvrdit heslo',
        firstName: 'Jméno',
        lastName: 'Příjmení',
        forgotPassword: 'Zapomněli jste heslo?',
        rememberMe: 'Zapamatovat si mě',
      },
      footer: {
        about: 'Evropská platforma agregátoru zpoplatněných cest',
        company: 'Společnost',
        support: 'Podpora',
        legal: 'Právní',
      },
      home: {
        title: 'Evropské zpoplatněné cesty zjednodušeně',
        subtitle: 'Vypočítejte, zaplaťte a spravujte své evropské zpoplatněné cesty na jednom místě',
        cta: 'Začít',
        features: 'Vlastnosti',
        pricing: 'Ceny',
        faq: 'Často kladené otázky',
      },
    }
  },
  hu: {
    translation: {
      nav: {
        roads: 'Autópályák',
        dashboard: 'Irányítópult',
        transponders: 'Transzvonderek',
        trips: 'Utaim',
        about: 'Rólunk',
        faq: 'GYIK',
        contact: 'Elérhetőség',
      },
      auth: {
        login: 'Bejelentkezés',
        register: 'Regisztráció',
        email: 'E-mail',
        password: 'Jelszó',
        confirmPassword: 'Jelszó megerősítése',
        firstName: 'Keresztnév',
        lastName: 'Vezetéknév',
        forgotPassword: 'Elfelejtett jelszó?',
        rememberMe: 'Emlékezz rám',
      },
      footer: {
        about: 'Európai díjútügyleti aggregátor platform',
        company: 'Vállalat',
        support: 'Támogatás',
        legal: 'Jogi',
      },
      home: {
        title: 'Európai autópályák leegyszerűsítve',
        subtitle: 'Számítsa ki, fizesse meg és kezelje európai díjútjait egy helyen',
        cta: 'Kezdés',
        features: 'Funkciók',
        pricing: 'Díjak',
        faq: 'GYIK',
      },
    }
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || navigator.language.split('-')[0] || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
