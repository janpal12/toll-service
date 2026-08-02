import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { v4 as uuidv4 } from 'uuid'

interface Operator {
  id: string
  name: string
  country: string
  website: string
  commission: number
}

const Operators: React.FC = () => {
  const [operators, setOperators] = useState<Operator[]>([
    { id: uuidv4(), name: 'VINCI', country: '🇫🇷 France', website: 'vinci.com', commission: 3 },
    { id: uuidv4(), name: 'Toll Collect', country: '🇩🇪 Germany', website: 'toll-collect.de', commission: 3 },
    { id: uuidv4(), name: 'Autostrade', country: '🇮🇹 Italy', website: 'autostrade.it', commission: 3 },
    { id: uuidv4(), name: 'e-TOLL', country: '🇵🇱 Poland', website: 'etoll.gov.pl', commission: 3 },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', country: '', website: '', commission: 3 })

  const handleAdd = () => {
    if (formData.name && formData.country) {
      setOperators([...operators, { id: uuidv4(), ...formData }])
      setFormData({ name: '', country: '', website: '', commission: 3 })
      setIsModalOpen(false)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🚗 Operators ({operators.length})
        </motion.h1>
        <Button label="+ Add Operator" onClick={() => setIsModalOpen(true)} />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {operators.map((op) => (
          <motion.div
            key={op.id}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{op.name}</h3>
            <p className="text-gray-400 mb-2">Country: {op.country}</p>
            <p className="text-gray-400 mb-2">Website: {op.website}</p>
            <p className="text-green-400 font-semibold">Commission: {op.commission}%</p>
          </motion.div>
        ))}
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        title="Add Operator"
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdd}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Operator Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
          <input
            type="text"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none"
          />
        </div>
      </Modal>
    </div>
  )
}

export default Operators
