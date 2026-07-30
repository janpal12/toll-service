import React from 'react'
import { useTranslation } from 'react-i18next'

const Register: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('auth.register')}</h2>
          <form className="space-y-4">
            <input type="text" placeholder={t('auth.firstName')} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            <input type="text" placeholder={t('auth.lastName')} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            <input type="email" placeholder={t('auth.email')} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            <input type="password" placeholder={t('auth.password')} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            <input type="password" placeholder={t('auth.confirmPassword')} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-white focus:border-blue-500 outline-none" />
            <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition">
              {t('auth.register')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
