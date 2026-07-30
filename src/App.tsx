import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Roads from './pages/Roads'
import Operators from './pages/Operators'
import Transponders from './pages/Transponders'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import Payment from './pages/Payment'
import './styles/globals.css'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roads" element={<Roads />} />
            <Route path="/operators" element={<Operators />} />
            <Route path="/transponders" element={<Transponders />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
