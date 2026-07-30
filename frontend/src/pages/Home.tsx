import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>
          <motion.button
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('home.cta')}
          </motion.button>
        </motion.div>

        {/* Animated Background */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-white"
            {...fadeInUp}
          >
            {t('home.features')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🛣️', title: 'Multi-Country', desc: 'All European toll roads in one place' },
              { icon: '💳', title: 'Easy Payment', desc: 'Secure Stripe integration' },
              { icon: '📍', title: 'Live Tracking', desc: 'Real-time route calculation' },
              { icon: '🚗', title: 'Smart Routes', desc: 'Optimize your journey' },
              { icon: '📊', title: 'Analytics', desc: 'Track your spending' },
              { icon: '🔐', title: 'Secure', desc: 'Bank-level security' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="glass p-8 rounded-2xl hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 text-white"
            {...fadeInUp}
          >
            {t('home.pricing')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: 'Free', features: ['Dashboard', 'Route Calculator', 'Email Support'] },
              { name: 'Pro', price: '€4.99/mo', features: ['Everything in Basic', 'Transponder Support', 'Priority Support', 'Analytics'] },
              { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'API Access', 'Dedicated Manager', 'Custom Integration'] },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl p-8 ${
                  i === 1 
                    ? 'glass border-2 border-blue-400 ring-2 ring-blue-400/50' 
                    : 'glass'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <span className="text-blue-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full py-3 rounded-lg font-semibold transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: i === 1 ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  Choose {plan.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready to simplify your tolls?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of drivers across Europe</p>
          <motion.button
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
