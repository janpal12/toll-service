import React from 'react'
import { motion } from 'framer-motion'

interface User {
  id: string
  email: string
  role: 'admin' | 'operator' | 'manager'
  name: string
  loginTime: string
}

interface HeaderProps {
  user: User
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const roleIcon = {
    admin: '👑',
    operator: '🚗',
    manager: '📊'
  }[user.role]

  const roleName = {
    admin: 'Administrator',
    operator: 'Operator',
    manager: 'Manager'
  }[user.role]

  return (
    <motion.header
      className="bg-gray-800 border-b border-gray-700 px-8 py-4 flex justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
          {user.name[0].toUpperCase()}
        </div>
        <div>
          <p className="text-white font-semibold">{user.name}</p>
          <p className="text-gray-400 text-sm">
            {roleIcon} {roleName}
          </p>
        </div>
      </div>

      <motion.button
        onClick={onLogout}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-red-900/50 hover:bg-red-900 text-red-300 rounded-lg transition font-medium"
      >
        🚪 Logout
      </motion.button>
    </motion.header>
  )
}

export default Header
