import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface User {
  id: string
  email: string
  role: 'admin' | 'operator' | 'manager' | 'unknown'
  name: string
  loginTime: string
}

const Landing: React.FC = () => {
  const { t } = useTranslation()
  const [user, setUser] = useState<User | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        // Автоматический редирект на админ панель
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
      } catch (e) {
        localStorage.removeItem('user')
      }
    }
  }, [])

  const detectRole = (emailAddress: string): 'admin' | 'operator' | 'manager' => {
    const lowercaseEmail = emailAddress.toLowerCase()
    
    // Admin домены
    if (lowercaseEmail.includes('admin') || lowercaseEmail.includes('director') || lowercaseEmail.includes('ceo')) {
      return 'admin'
    }
    
    // Operator домены
    if (lowercaseEmail.includes('operator') || lowercaseEmail.includes('driver') || lowercaseEmail.includes('support')) {
      return 'operator'
    }
    
    // Manager домены
    if (lowercaseEmail.includes('manager') || lowercaseEmail.includes('supervisor') || lowercaseEmail.includes('coordinator')) {
      return 'manager'
    }
    
    // По умолчанию
    return 'operator'
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email || !password) {
      setError('Email and password required')
      setIsLoading(false)
      return
    }

    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1200))

      const detectedRole = detectRole(email)
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        role: detectedRole,
        name: email.split('@')[0],
        loginTime: new Date().toISOString()
      }

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('userRole', detectedRole)
      
      setUser(user)
      setTimeout(() => {
        window.location.href = '/'
      }, 500)
    } catch (err) {
      setError('Authentication failed')
    } finally {
      setIsLoading(false)
    }
  }

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <motion.div className="text-center">
          <div className="text-6xl mb-4">🚗</div>
          <h2 className="text-2xl text-white mb-2">Welcome back!</h2>
          <p className="text-gray-400">Role: {user.role}</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Навигация */}
      <nav className="border-b border-gray-700 backdrop-blur-md bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🛣️</span>
            <h1 className="text-2xl font-bold text-white">Toll Road EU</h1>
          </div>
          <div className="flex gap-4 items-center">
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500 outline-none">
              <option>EN</option>
              <option>DE</option>
              <option>FR</option>
              <option>IT</option>
              <option>ES</option>
              <option>PL</option>
            </select>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16">
        {/* Левая колонка - контент */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">European Toll Roads Management</h2>
          <p className="text-xl text-gray-300 mb-6">Complete solution for toll operators and administrators across Europe</p>
          
          <div className="space-y-4 mb-12">
            <div className="flex gap-4">
              <div className="text-3xl">🚗</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Real-time Monitoring</h3>
                <p className="text-gray-400">Track toll roads across 10 European countries</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💳</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Payment Processing</h3>
                <p className="text-gray-400">Stripe integration for secure transactions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Analytics & Reports</h3>
                <p className="text-gray-400">Comprehensive statistics and revenue tracking</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🔐</div>
              <div>
                <h3 className="text-lg font-semibold text-white">Role-Based Access</h3>
                <p className="text-gray-400">Admin, Manager, and Operator roles</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p className="text-2xl font-bold text-green-400">28</p>
              <p className="text-sm text-gray-400">Toll Roads</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p className="text-2xl font-bold text-blue-400">10</p>
              <p className="text-sm text-gray-400">Countries</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p className="text-2xl font-bold text-purple-400">24/7</p>
              <p className="text-sm text-gray-400">Operations</p>
            </div>
          </div>
        </motion.div>

        {/* Правая колонка - форма входа */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">🔐</div>
                <h3 className="text-2xl font-bold text-white">Admin Portal</h3>
                <p className="text-gray-400 text-sm mt-2">Your role will be detected automatically</p>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Corporate Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@company.eu"
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

                <div className="bg-gray-700/50 rounded-lg p-4 text-sm text-gray-300">
                  <p className="font-semibold mb-2">🤖 Role Detection:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• <span className="text-blue-300">admin</span> in email → Administrator</li>
                    <li>• <span className="text-green-300">operator</span> in email → Operator</li>
                    <li>• <span className="text-purple-300">manager</span> in email → Manager</li>
                  </ul>
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
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <span>🔓</span>
                      <span>Access Portal</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-center text-gray-400 text-xs mb-3">Test Credentials:</p>
                <div className="space-y-2 text-xs text-gray-400 bg-gray-900/50 rounded p-3">
                  <p>📧 <span className="text-gray-300">admin@tolls.eu</span></p>
                  <p>📧 <span className="text-gray-300">operator@tolls.eu</span></p>
                  <p>📧 <span className="text-gray-300">manager@tolls.eu</span></p>
                  <p>🔑 <span className="text-gray-300">Any password</span></p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-xs mt-6">🛣️ Toll Road EU © 2026 | European Operations</p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-3">🇫🇷 France</h4>
              <p className="text-gray-400 text-sm">VINCI, SANEF</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">🇩🇪 Germany</h4>
              <p className="text-gray-400 text-sm">Toll Collect</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">🇮🇹 Italy</h4>
              <p className="text-gray-400 text-sm">Autostrade</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">🇪🇸 Spain</h4>
              <p className="text-gray-400 text-sm">Abertis</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>Toll Road EU - Professional Administration & Monitoring Platform</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
