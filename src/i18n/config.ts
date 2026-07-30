import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: 'Toll Road EU - Admin Panel',
      menu: {
        dashboard: 'Dashboard',
        roads: 'Roads',
        operators: 'Operators',
        transponders: 'Transponders',
        transactions: 'Transactions',
        payment: 'Payment',
        settings: 'Settings',
      },
      dashboard: {
        title: 'Dashboard',
        stats: 'Statistics',
        totalRoads: 'Total Roads',
        totalOperators: 'Operators',
        totalRevenue: 'Revenue',
        totalTransactions: 'Transactions',
      },
      roads: {
        title: 'Toll Roads',
        addRoad: 'Add Road',
        country: 'Country',
        name: 'Name',
        price: 'Price (€/km)',
      },
      payment: {
        title: 'Payment Settings',
        stripeKey: 'Stripe Key',
        commission: 'Commission (%)',
        cardNumber: 'Card Number',
        expiry: 'Expiry Date',
        cvc: 'CVC',
        pay: 'Pay Now',
      }
    }
  },
  de: {
    translation: {
      title: 'Toll Road EU - Admin-Panel',
      menu: {
        dashboard: 'Dashboard',
        roads: 'Straßen',
        operators: 'Betreiber',
        transponders: 'Transpondern',
        transactions: 'Transaktionen',
        payment: 'Zahlung',
        settings: 'Einstellungen',
      },
      dashboard: {
        title: 'Dashboard',
        stats: 'Statistiken',
        totalRoads: 'Gesamt Straßen',
        totalOperators: 'Betreiber',
        totalRevenue: 'Umsatz',
        totalTransactions: 'Transaktionen',
      },
      roads: {
        title: 'Mautstraßen',
        addRoad: 'Straße hinzufügen',
        country: 'Land',
        name: 'Name',
        price: 'Preis (€/km)',
      },
      payment: {
        title: 'Zahlungseinstellungen',
        stripeKey: 'Stripe-Schlüssel',
        commission: 'Provision (%)',
        cardNumber: 'Kartennummer',
        expiry: 'Ablaufdatum',
        cvc: 'CVC',
        pay: 'Jetzt zahlen',
      }
    }
  },
  fr: {
    translation: {
      title: 'Toll Road EU - Panneau Admin',
      menu: {
        dashboard: 'Tableau de bord',
        roads: 'Routes',
        operators: 'Opérateurs',
        transponders: 'Transpondeurs',
        transactions: 'Transactions',
        payment: 'Paiement',
        settings: 'Paramètres',
      },
      dashboard: {
        title: 'Tableau de bord',
        stats: 'Statistiques',
        totalRoads: 'Total Routes',
        totalOperators: 'Opérateurs',
        totalRevenue: 'Revenu',
        totalTransactions: 'Transactions',
      },
      roads: {
        title: 'Routes à péage',
        addRoad: 'Ajouter une route',
        country: 'Pays',
        name: 'Nom',
        price: 'Prix (€/km)',
      },
      payment: {
        title: 'Paramètres de paiement',
        stripeKey: 'Clé Stripe',
        commission: 'Commission (%)',
        cardNumber: 'Numéro de carte',
        expiry: 'Date d\'expiration',
        cvc: 'CVC',
        pay: 'Payer maintenant',
      }
    }
  },
  es: {
    translation: {
      title: 'Toll Road EU - Panel de Admin',
      menu: {
        dashboard: 'Panel',
        roads: 'Carreteras',
        operators: 'Operadores',
        transponders: 'Transpondedores',
        transactions: 'Transacciones',
        payment: 'Pago',
        settings: 'Configuración',
      },
      dashboard: {
        title: 'Panel',
        stats: 'Estadísticas',
        totalRoads: 'Total Carreteras',
        totalOperators: 'Operadores',
        totalRevenue: 'Ingresos',
        totalTransactions: 'Transacciones',
      },
      roads: {
        title: 'Carreteras de peaje',
        addRoad: 'Agregar carretera',
        country: 'País',
        name: 'Nombre',
        price: 'Precio (€/km)',
      },
      payment: {
        title: 'Configuración de pago',
        stripeKey: 'Clave Stripe',
        commission: 'Comisión (%)',
        cardNumber: 'Número de tarjeta',
        expiry: 'Fecha de vencimiento',
        cvc: 'CVC',
        pay: 'Pagar ahora',
      }
    }
  },
  pl: {
    translation: {
      title: 'Toll Road EU - Panel Admina',
      menu: {
        dashboard: 'Pulpit nawigacyjny',
        roads: 'Drogi',
        operators: 'Operatorzy',
        transponders: 'Transpondery',
        transactions: 'Transakcje',
        payment: 'Płatność',
        settings: 'Ustawienia',
      },
      dashboard: {
        title: 'Pulpit nawigacyjny',
        stats: 'Statystyka',
        totalRoads: 'Razem Dróg',
        totalOperators: 'Operatorzy',
        totalRevenue: 'Przychód',
        totalTransactions: 'Transakcje',
      },
      roads: {
        title: 'Drogi płatne',
        addRoad: 'Dodaj drogę',
        country: 'Kraj',
        name: 'Nazwa',
        price: 'Cena (€/km)',
      },
      payment: {
        title: 'Ustawienia płatności',
        stripeKey: 'Klucz Stripe',
        commission: 'Prowizja (%)',
        cardNumber: 'Numer karty',
        expiry: 'Data ważności',
        cvc: 'CVC',
        pay: 'Zapłać teraz',
      }
    }
  },
  it: {
    translation: {
      title: 'Toll Road EU - Pannello Admin',
      menu: {
        dashboard: 'Pannello di controllo',
        roads: 'Strade',
        operators: 'Operatori',
        transponders: 'Transponder',
        transactions: 'Transazioni',
        payment: 'Pagamento',
        settings: 'Impostazioni',
      },
      dashboard: {
        title: 'Pannello di controllo',
        stats: 'Statistiche',
        totalRoads: 'Totale Strade',
        totalOperators: 'Operatori',
        totalRevenue: 'Ricavi',
        totalTransactions: 'Transazioni',
      },
      roads: {
        title: 'Strade a pedaggio',
        addRoad: 'Aggiungi strada',
        country: 'Paese',
        name: 'Nome',
        price: 'Prezzo (€/km)',
      },
      payment: {
        title: 'Impostazioni di pagamento',
        stripeKey: 'Chiave Stripe',
        commission: 'Commissione (%)',
        cardNumber: 'Numero di carta',
        expiry: 'Data di scadenza',
        cvc: 'CVC',
        pay: 'Paga ora',
      }
    }
  },
  cs: {
    translation: {
      title: 'Toll Road EU - Panel Administrátora',
      menu: {
        dashboard: 'Přehled',
        roads: 'Cesty',
        operators: 'Operátoři',
        transponders: 'Transpondery',
        transactions: 'Transakce',
        payment: 'Platba',
        settings: 'Nastavení',
      },
      dashboard: {
        title: 'Přehled',
        stats: 'Statistika',
        totalRoads: 'Celkem Cest',
        totalOperators: 'Operátoři',
        totalRevenue: 'Příjmy',
        totalTransactions: 'Transakce',
      },
      roads: {
        title: 'Zpoplatněné cesty',
        addRoad: 'Přidat cestu',
        country: 'Země',
        name: 'Název',
        price: 'Cena (€/km)',
      },
      payment: {
        title: 'Nastavení platby',
        stripeKey: 'Klíč Stripe',
        commission: 'Provize (%)',
        cardNumber: 'Číslo karty',
        expiry: 'Datum vypršení',
        cvc: 'CVC',
        pay: 'Zaplaťte nyní',
      }
    }
  },
  hu: {
    translation: {
      title: 'Toll Road EU - Admin Felület',
      menu: {
        dashboard: 'Irányítópult',
        roads: 'Utak',
        operators: 'Operátorok',
        transponders: 'Transzponderek',
        transactions: 'Tranzakciók',
        payment: 'Fizetés',
        settings: 'Beállítások',
      },
      dashboard: {
        title: 'Irányítópult',
        stats: 'Statisztika',
        totalRoads: 'Összes Út',
        totalOperators: 'Operátorok',
        totalRevenue: 'Bevétel',
        totalTransactions: 'Tranzakciók',
      },
      roads: {
        title: 'Díjúthatások',
        addRoad: 'Út hozzáadása',
        country: 'Ország',
        name: 'Név',
        price: 'Ár (€/km)',
      },
      payment: {
        title: 'Fizetési beállítások',
        stripeKey: 'Stripe kulcs',
        commission: 'Jutalék (%)',
        cardNumber: 'Kártya száma',
        expiry: 'Lejárati dátum',
        cvc: 'CVC',
        pay: 'Fizetés most',
      }
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
