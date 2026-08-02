import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Roads from './pages/Roads'
import Operators from './pages/Operators'
import Transponders from './pages/Transponders'
import Transactions from './pages/Transactions'
import Payment from './pages/Payment'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Header from './components/Header'
import './styles/globals.css'

interface User {
  id: string
  email: string
  role: 'admin' | 'operator' | 'manager'
  name: string
  loginTime: string
}

const App: React.FC = () => {
  const { i18n } = useTranslation()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Проверяем авторизацию
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        localStorage.removeItem('user')
      }
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userRole')
    setUser(null)
    window.location.href = '/login'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🛣️</div>
          <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-900">
        <Sidebar user={user} onLogout={handleLogout} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header user={user} onLogout={handleLogout} />
          <main className="flex-1 overflow-auto bg-gray-900 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/roads" element={<Roads />} />
              <Route path="/operators" element={<Operators />} />
              <Route path="/transponders" element={<Transponders />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
