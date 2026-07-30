import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Roads from './pages/Roads'
import Trips from './pages/Trips'
import Transponders from './pages/Transponders'
import Admin from './pages/Admin'
import './styles/globals.css'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roads" element={<Roads />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/transponders" element={<Transponders />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
