import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

interface User {
  id: string
  email: string
  role: 'admin' | 'operator' | 'manager'
  name: string
  loginTime: string
}

interface SidebarProps {
  user: User
  onLogout: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ user, onLogout }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊', roles: ['admin', 'operator', 'manager'] },
    { path: '/roads', label: 'Roads', icon: '🛣️', roles: ['admin', 'manager'] },
    { path: '/operators', label: 'Operators', icon: '🚗', roles: ['admin', 'manager'] },
    { path: '/transponders', label: 'Transponders', icon: '📱', roles: ['admin', 'operator'] },
    { path: '/transactions', label: 'Transactions', icon: '💰', roles: ['admin', 'manager'] },
    { path: '/payment', label: 'Payment', icon: '💳', roles: ['admin', 'operator', 'manager'] },
    { path: '/settings', label: 'Settings', icon: '⚙️', roles: ['admin'] },
  ]

  const visibleMenuItems = menuItems.filter(item => item.roles.includes(user.role))

  return (
    <motion.aside
      className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col h-screen"
      initial={{ x: -256 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🛣️</span>
          <h1 className="text-xl font-bold text-white">Toll Road</h1>
        </div>
        <p className="text-gray-400 text-xs">EU Admin Panel</p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {visibleMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-400 mb-1">Role:</p>
          <p className="text-sm font-semibold text-white">👤 {user.role}</p>
        </div>
        <button
          onClick={onLogout}
          className="w-full py-2 px-4 bg-red-900/30 hover:bg-red-900/50 text-red-300 rounded-lg transition font-medium text-sm"
        >
          🚪 Logout
        </button>
      </div>
    </motion.aside>
  )
}

export default Sidebar
