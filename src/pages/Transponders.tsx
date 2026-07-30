import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Transponders: React.FC = () => {
  const { t } = useTranslation()

  const items = [
    { id: 1, name: 'European Multi-Country OBU', status: 'Active', shipment: 'Delivered' },
    { id: 2, name: 'German LKW-Maut OBU', status: 'Active', shipment: 'In Transit' },
    { id: 3, name: 'French Liber-t', status: 'Pending', shipment: 'Processing' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">{t('menu.transponders')}</h1>

      <motion.div
        className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700">
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Name</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Shipment</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <motion.tr
                key={item.id}
                className="border-b border-gray-700 hover:bg-gray-700/50 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td className="px-6 py-4 text-white">{item.name}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">{item.shipment}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default Transponders
