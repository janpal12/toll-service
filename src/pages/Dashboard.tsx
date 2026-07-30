import React from 'react'
import { motion } from 'framer-motion'
import StatCard from '../components/StatCard'
import { useTranslation } from 'react-i18next'

const Dashboard: React.FC = () => {
  const { t } = useTranslation()

  const stats = [
    { title: t('dashboard.totalRoads'), value: 156, icon: '🛣️', trend: 12 },
    { title: t('dashboard.totalOperators'), value: 24, icon: '🏢', trend: 5 },
    { title: t('dashboard.totalRevenue'), value: '€284,500', icon: '💰', trend: 28 },
    { title: t('dashboard.totalTransactions'), value: '12,458', icon: '💳', trend: 42 },
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
    </div>
  )
}

export default Dashboard
