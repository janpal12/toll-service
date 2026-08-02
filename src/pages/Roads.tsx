import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'
import Button from '../components/Button'
import Modal from '../components/Modal'

interface Road {
  id: string
  country: string
  name: string
  price: number
  operator: string
  length: number
  currency: string
}

const Roads: React.FC = () => {
  const [roads, setRoads] = useState<Road[]>([
    { id: uuidv4(), country: '🇫🇷 France', name: 'A6 Paris - Lyon', price: 0.095, operator: 'VINCI', length: 427, currency: '€' },
    { id: uuidv4(), country: '🇫🇷 France', name: 'A7 Lyon - Marseille', price: 0.088, operator: 'VINCI', length: 298, currency: '€' },
    { id: uuidv4(), country: '🇫🇷 France', name: 'A1 Paris - Lille', price: 0.092, operator: 'SANEF', length: 215, currency: '€' },
    { id: uuidv4(), country: '🇫🇷 France', name: 'A9 Bordeaux - Spain', price: 0.085, operator: 'VINCI', length: 504, currency: '€' },
    { id: uuidv4(), country: '🇫🇷 France', name: 'A3 Paris - Reims', price: 0.090, operator: 'SANEF', length: 163, currency: '€' },
    { id: uuidv4(), country: '🇩🇪 Germany', name: 'A1 Berlin - Hamburg', price: 0.33, operator: 'Toll Collect', length: 288, currency: '€' },
    { id: uuidv4(), country: '🇩🇪 Germany', name: 'A2 Berlin - Dortmund', price: 0.33, operator: 'Toll Collect', length: 515, currency: '€' },
    { id: uuidv4(), country: '🇩🇪 Germany', name: 'A3 Cologne - Frankfurt', price: 0.33, operator: 'Toll Collect', length: 173, currency: '€' },
    { id: uuidv4(), country: '🇮🇹 Italy', name: 'A1 Milan - Rome', price: 0.103, operator: 'Autostrade', length: 526, currency: '€' },
    { id: uuidv4(), country: '🇮🇹 Italy', name: 'A4 Turin - Venice', price: 0.098, operator: 'Autostrade', length: 436, currency: '€' },
    { id: uuidv4(), country: '🇪🇸 Spain', name: 'A-7 Costa del Sol', price: 0.037, operator: 'Abertis', length: 579, currency: '€' },
    { id: uuidv4(), country: '🇵🇱 Poland', name: 'A2 Warsaw - Gdansk', price: 28, operator: 'e-TOLL', length: 348, currency: 'PLN' },
    { id: uuidv4(), country: '🇵🇱 Poland', name: 'A4 Warsaw - Wroclaw', price: 25, operator: 'e-TOLL', length: 348, currency: 'PLN' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ country: '', name: '', price: 0, operator: '', length: 0, currency: '' })

  const handleAdd = () => {
    if (formData.country && formData.name) {
      setRoads([...roads, { id: uuidv4(), ...formData }])
      setFormData({ country: '', name: '', price: 0, operator: '', length: 0, currency: '' })
      setIsModalOpen(false)
    }
  }

  const handleDelete = (id: string) => {
    setRoads(roads.filter(r => r.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🛣️ Roads ({roads.length})
        </motion.h1>
        <Button label="+ Add Road" onClick={() => setIsModalOpen(true)} />
      </div>

      <motion.div
        className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900 border-b border-gray-700">
                <th className="px-6 py-4 text-left text-gray-300 font-semibold">Country</th>
                <th className="px-6 py-4 text-left text-gray-300 font-semibold">Road Name</th>
                <th className="px-6 py-4 text-left text-gray-300 font-semibold">Length (km)</th>
                <th className="px-6 py-4 text-left text-gray-300 font-semibold">Price</th>
                <th className="px-6 py-4 text-left text-gray-300 font-semibold">Operator</th>
                <th className="px-6 py-4 text-left text-gray-300 font-semibold">Action</th>
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
                  <td className="px-6 py-4 text-gray-300 font-medium">{road.name}</td>
                  <td className="px-6 py-4 text-gray-300">{road.length}</td>
                  <td className="px-6 py-4">
                    <span className="text-green-400 font-semibold">
                      {road.price.toFixed(2)} {road.currency}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{road.operator}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(road.id)}
                      className="px-3 py-1 bg-red-900/50 hover:bg-red-900 text-red-300 rounded transition text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        title="Add New Road"
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Road Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder="Length (km)"
            value={formData.length}
            onChange={(e) => setFormData({ ...formData, length: parseFloat(e.target.value) })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Operator"
            value={formData.operator}
            onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Currency"
            value={formData.currency}
            onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
        </div>
      </Modal>
    </div>
  )
}

export default Roads
