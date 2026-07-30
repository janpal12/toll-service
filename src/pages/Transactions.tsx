import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Transactions: React.FC = () => {
  const { t } = useTranslation()

  const transactions = [
    { id: 1, date: '2026-07-30', amount: 156.50, type: 'Commission', status: 'Completed' },
    { id: 2, date: '2026-07-29', amount: 284.75, type: 'Toll Payment', status: 'Completed' },
    { id: 3, date: '2026-07-28', amount: 95.00, type: 'Transponder', status: 'Pending' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white">{t('menu.transactions')}</h1>

      <motion.div
        className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700">
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Date</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Amount</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Type</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <motion.tr
                key={tx.id}
                className="border-b border-gray-700 hover:bg-gray-700/50 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td className="px-6 py-4 text-white">{tx.date}</td>
                <td className="px-6 py-4 text-green-400 font-semibold">€{tx.amount}</td>
                <td className="px-6 py-4 text-gray-300">{tx.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tx.status === 'Completed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default Transactions
