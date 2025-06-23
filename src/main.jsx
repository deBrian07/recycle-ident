import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthGate from './components/AuthGate.jsx'
import { CoinsProvider } from './hooks/useCoins.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinsProvider>
      <AuthGate />
    </CoinsProvider>
  </StrictMode>
)
