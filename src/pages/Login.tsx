import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Login: React.FC = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'admin' | 'operator' | 'manager'>('admin')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Сохраняем сессию
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        role,
        name: email.split('@')[0],
        loginTime: new Date().toISOString()
      }
      
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('userRole', role)
      
      // Редирект на главную
      window.location.href = '/'
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🛣️</div>
            <h1 className="text-3xl font-bold text-white mb-2">Toll Road EU</h1>
            <p className="text-gray-400">Admin Control Panel</p>
          </div>

          {error && (
            <motion.div
              className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ {error}
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@tollroad.eu"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'admin', label: '👑 Admin', icon: '🔐' },
                  { id: 'operator', label: '🚗 Operator', icon: '🛣️' },
                  { id: 'manager', label: '📊 Manager', icon: '📈' }
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id as 'admin' | 'operator' | 'manager')}
                    className={`py-2 rounded-lg font-medium text-sm transition ${
                      role === r.id
                        ? 'bg-blue-600 text-white border border-blue-500'
                        : 'bg-gray-700 text-gray-300 border border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  <span>🔓</span>
                  <span>Login</span>
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm mb-4">Demo Credentials:</p>
            <div className="space-y-2 text-xs text-gray-400">
              <p>📧 <span className="text-gray-300">any@email.com</span></p>
              <p>🔑 <span className="text-gray-300">any password</span></p>
              <p>👤 <span className="text-gray-300">Select any role</span></p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>🛣️ Toll Road EU © 2026</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
