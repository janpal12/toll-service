import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  title: string
  value: string | number
  icon: string
  trend?: number
  color?: string
}

const StatCard: React.FC<CardProps> = ({ title, value, icon, trend, color = 'blue' }) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-${color}-500 transition`}
      whileHover={{ scale: 1.05, borderColor: `rgb(59, 130, 246)` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm mb-2">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {trend > 0 ? '+' : ''}{trend}%
            </p>
          )}
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </motion.div>
  )
}

export default StatCard
