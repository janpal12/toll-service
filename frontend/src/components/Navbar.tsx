import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TR</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">TollRoad EU</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/roads" className="text-gray-300 hover:text-white transition">{t('nav.roads')}</Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition">{t('nav.dashboard')}</Link>
            <Link to="/transponders" className="text-gray-300 hover:text-white transition">{t('nav.transponders')}</Link>
            <Link to="/trips" className="text-gray-300 hover:text-white transition">{t('nav.trips')}</Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/login" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              {t('auth.login')}
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <span>☰</span>
          </button>
        </div>

        {isOpen && (
          <motion.div className="md:hidden pb-4 space-y-2" initial={{ height: 0 }} animate={{ height: 'auto' }}>
            <Link to="/roads" className="block text-gray-300 hover:text-white">{t('nav.roads')}</Link>
            <Link to="/dashboard" className="block text-gray-300 hover:text-white">{t('nav.dashboard')}</Link>
            <Link to="/transponders" className="block text-gray-300 hover:text-white">{t('nav.transponders')}</Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
