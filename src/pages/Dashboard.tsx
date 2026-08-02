import React from 'react'
import { motion } from 'framer-motion'
import StatCard from '../components/StatCard'
import { useTranslation } from 'react-i18next'

const Dashboard: React.FC = () => {
  const { t } = useTranslation()

  const stats = [
    { title: 'Total Roads', value: 28, icon: '🛣️', trend: 12 },
    { title: 'Countries', value: 10, icon: '🌍', trend: 0 },
    { title: 'Total Revenue', value: '€2,458,320', icon: '💰', trend: 28 },
    { title: 'Active Users', value: '8,420', icon: '👥', trend: 42 },
  ]

  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-8 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {t('dashboard.title')}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <motion.div
        className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">📊 Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm">Top Country</p>
            <p className="text-2xl font-bold text-blue-400">🇫🇷 France</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm">Avg. Price/km</p>
            <p className="text-2xl font-bold text-green-400">€0.098</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm">Total KM</p>
            <p className="text-2xl font-bold text-purple-400">8,247</p>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm">Monthly Growth</p>
            <p className="text-2xl font-bold text-orange-400">+18%</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
