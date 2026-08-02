import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const Settings: React.FC = () => {
  const [stripeKey, setStripeKey] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('stripeKey')
    const redirect = localStorage.getItem('redirectUrl')
    if (saved) setStripeKey(saved)
    if (redirect) setRedirectUrl(redirect)
  }, [])

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      localStorage.setItem('stripeKey', stripeKey)
      localStorage.setItem('redirectUrl', redirectUrl)
      setIsSaved(true)
      setIsSaving(false)
      setTimeout(() => setIsSaved(false), 3000)
    }, 500)
  }

  return (
    <div>
      <motion.h1
        className="text-4xl font-bold mb-8 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ⚙️ Settings
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stripe Settings */}
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">💳</span>
            <h2 className="text-2xl font-bold text-white">Stripe Integration</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Stripe Publishable Key
              </label>
              <input
                type="password"
                value={stripeKey}
                onChange={(e) => setStripeKey(e.target.value)}
                placeholder="pk_live_51AB..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition font-mono text-sm"
              />
              <p className="text-gray-400 text-xs mt-2">
                🔐 Key is stored locally. Never shared or sent to servers.
              </p>
            </div>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
              <p className="text-sm text-blue-300">
                <span className="font-semibold">📌 How to get your key:</span>
              </p>
              <ol className="text-xs text-blue-300 mt-2 space-y-1 ml-4 list-decimal">
                <li>Go to <span className="text-white">dashboard.stripe.com</span></li>
                <li>Click "Developers" → "API Keys"</li>
                <li>Copy your "Publishable key"</li>
                <li>Paste it here and Save</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Redirect Settings */}
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">🔗</span>
            <h2 className="text-2xl font-bold text-white">Redirect Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                External Redirect URL
              </label>
              <input
                type="url"
                value={redirectUrl}
                onChange={(e) => setRedirectUrl(e.target.value)}
                placeholder="https://example.com/callback"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition font-mono text-sm"
              />
              <p className="text-gray-400 text-xs mt-2">
                🌐 URL where users will be redirected after payment completion
              </p>
            </div>

            <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">📍 Example:</span>
              </p>
              <p className="text-xs text-purple-300 mt-2 font-mono">
                https://mycompany.com/payment-success
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Save Button */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          label={isSaving ? "Saving..." : "💾 Save Settings"}
          onClick={handleSave}
          disabled={isSaving}
        />
        {isSaved && (
          <motion.div
            className="flex items-center gap-2 text-green-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span>✅ Settings saved successfully!</span>
          </motion.div>
        )}
      </motion.div>

      {/* Info Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-white mb-3">🔒 Security</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>✓ Keys stored locally in browser</li>
            <li>✓ No server transmission</li>
            <li>✓ HTTPS only for production</li>
            <li>✓ Clear cache to reset keys</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-white mb-3">🎯 Features</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>✓ Real-time payment processing</li>
            <li>✓ Automatic redirect on success</li>
            <li>✓ Multiple operator support</li>
            <li>✓ 24/7 operations</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Settings
