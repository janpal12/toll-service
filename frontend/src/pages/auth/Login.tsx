import React from 'react'
import { useTranslation } from 'react-i18next'

const Login: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('auth.login')}</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('auth.email')}</label>
              <input type="email" className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('auth.password')}</label>
              <input type="password" className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            </div>
            <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition">
              {t('auth.login')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
