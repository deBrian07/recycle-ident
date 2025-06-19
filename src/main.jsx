console.log("Loaded API key:", import.meta.env.VITE_FIREBASE_API_KEY)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
)
