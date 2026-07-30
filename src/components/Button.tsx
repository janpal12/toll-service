import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
}) => {
  const baseClass = 'font-semibold rounded-lg transition flex items-center justify-center'
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg',
    secondary: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  }

  return (
    <motion.button
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {loading ? '⏳' : label}
    </motion.button>
  )
}

export default Button
