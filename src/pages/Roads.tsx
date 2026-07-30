import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { v4 as uuid } from 'uuid'

interface Road {
  id: string
  country: string
  name: string
  price: number
  operator: string
}

const Roads: React.FC = () => {
  const { t } = useTranslation()
  const [roads, setRoads] = useState<Road[]>([
    { id: uuid(), country: 'FR', name: 'A6 Paris-Lyon', price: 0.095, operator: 'VINCI' },
    { id: uuid(), country: 'DE', name: 'A1 Autobahn', price: 0.33, operator: 'Toll Collect' },
    { id: uuid(), country: 'PL', name: 'A2 Warsaw-Gdansk', price: 0.28, operator: 'e-TOLL' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ country: '', name: '', price: 0, operator: '' })

  const handleAdd = () => {
    if (formData.country && formData.name && formData.price) {
      setRoads([...roads, { id: uuid(), ...formData }])
      setFormData({ country: '', name: '', price: 0, operator: '' })
      setIsModalOpen(false)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">{t('roads.title')}</h1>
        <Button label={t('roads.addRoad')} onClick={() => setIsModalOpen(true)} />
      </div>

      <motion.div
        className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700">
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Country</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Name</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Price (€/km)</th>
              <th className="px-6 py-4 text-left text-gray-300 font-semibold">Operator</th>
            </tr>
          </thead>
          <tbody>
            {roads.map((road) => (
              <motion.tr
                key={road.id}
                className="border-b border-gray-700 hover:bg-gray-700/50 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td className="px-6 py-4 text-white font-semibold">{road.country}</td>
                <td className="px-6 py-4 text-gray-300">{road.name}</td>
                <td className="px-6 py-4 text-green-400 font-semibold">{road.price}</td>
                <td className="px-6 py-4 text-gray-300">{road.operator}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        title={t('roads.addRoad')}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t('roads.country')}
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder={t('roads.name')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder={t('roads.price')}
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
        </div>
      </Modal>
    </div>
  )
}

export default Roads
