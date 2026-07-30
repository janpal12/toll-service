import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Sidebar: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { path: '/', label: t('menu.dashboard'), icon: '📊' },
    { path: '/roads', label: t('menu.roads'), icon: '🛣️' },
    { path: '/operators', label: t('menu.operators'), icon: '🏢' },
    { path: '/transponders', label: t('menu.transponders'), icon: '📡' },
    { path: '/transactions', label: t('menu.transactions'), icon: '💳' },
    { path: '/payment', label: t('menu.payment'), icon: '💰' },
    { path: '/settings', label: t('menu.settings'), icon: '⚙️' },
  ]

  return (
    <motion.aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col`}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">TR</span>
        </div>
        {isOpen && <span className="text-white font-bold ml-3">TollRoad</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition"
        >
          {isOpen ? '‹' : '›'}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              location.pathname === item.path
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-gray-400 text-xs text-center">
        {isOpen && <p>v1.0.0</p>}
      </div>
    </motion.aside>
  )
}

export default Sidebar
