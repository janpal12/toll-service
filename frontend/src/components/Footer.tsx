import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">TollRoad EU</h3>
            <p className="text-gray-400 text-sm">{t('footer.about')}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#help" className="hover:text-white">{t('nav.faq')}</a></li>
              <li><a href="#contact" className="hover:text-white">{t('nav.contact')}</a></li>
              <li><a href="#docs" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms</a></li>
              <li><a href="#cookies" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {year} TollRoad EU. All rights reserved.</p>
          <p className="text-gray-500 text-xs mt-4 md:mt-0">Registered in Poland • Enterprise License</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
