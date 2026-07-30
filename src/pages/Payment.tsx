import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

const Payment: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    amount: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate Stripe payment
    setTimeout(() => {
      setIsProcessing(false)
      setSuccess(true)
      setFormData({ cardNumber: '', expiry: '', cvc: '', amount: '' })
      setTimeout(() => setSuccess(false), 3000)
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-8 text-white text-center">{t('payment.title')}</h1>

        {success && (
          <motion.div
            className="mb-6 p-4 bg-green-900 text-green-300 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Payment successful!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">{t('payment.cardNumber')}</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="4242 4242 4242 4242"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">{t('payment.expiry')}</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">{t('payment.cvc')}</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="123"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Amount (€)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="100.00"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <Button
            label={t('payment.pay')}
            loading={isProcessing}
            onClick={() => handleSubmit({ preventDefault: () => {} } as any)}
          />
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Test card: 4242 4242 4242 4242
        </p>
      </motion.div>
    </div>
  )
}

export default Payment
