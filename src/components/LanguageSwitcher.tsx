import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'pl', flag: '🇵🇱', name: 'Polski' },
    { code: 'cs', flag: '🇨🇿', name: 'Čeština' },
    { code: 'hu', flag: '🇭🇺', name: 'Magyar' },
  ]

  const [open, setOpen] = React.useState(false)
  const current = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl hover:scale-110 transition"
        title={current.name}
      >
        {current.flag}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-2 grid grid-cols-4 gap-2 w-40 border border-gray-700 z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                localStorage.setItem('language', lang.code)
                setOpen(false)
              }}
              className={`p-2 rounded text-center text-lg ${
                i18n.language === lang.code 
                  ? 'bg-blue-500' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              title={lang.name}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
