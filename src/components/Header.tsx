import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className="bg-gray-950 border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">{t('title')}</h1>
      <div className="flex items-center space-x-6">
        <LanguageSwitcher />
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
      </div>
    </header>
  )
}

export default Header
