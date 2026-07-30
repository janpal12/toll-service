import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button'

const Settings: React.FC = () => {
  const { t } = useTranslation()
  const [settings, setSettings] = useState({
    stripeKey: 'pk_live_your_key_here',
    commission: 3,
    siteName: 'TollRoad EU',
    email: 'admin@tollroad.eu',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (field: string, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-white">{t('menu.settings')}</h1>

      {saved && (
        <motion.div
          className="mb-6 p-4 bg-green-900 text-green-300 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Settings saved successfully!
        </motion.div>
      )}

      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Site Name</label>
          <input
            type="text"
            value={settings.siteName}
            onChange={(e) => handleChange('siteName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Admin Email</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">{t('payment.stripeKey')}</label>
          <input
            type="password"
            value={settings.stripeKey}
            onChange={(e) => handleChange('stripeKey', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">{t('payment.commission')}</label>
          <input
            type="number"
            value={settings.commission}
            onChange={(e) => handleChange('commission', parseFloat(e.target.value))}
            className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none transition"
          />
        </div>

        <Button label="Save Settings" onClick={handleSave} />
      </motion.div>
    </div>
  )
}

export default Settings
