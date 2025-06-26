import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import AuthGate from './components/AuthGate.jsx'
import { CoinsProvider } from './hooks/useCoins.jsx'
import { DarkProvider } from './context/DarkModeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkProvider>
      <QueryClientProvider client={queryClient}>
        <CoinsProvider>
          <AuthGate />
        </CoinsProvider>
      </QueryClientProvider>
    </DarkProvider>
  </StrictMode>
)
