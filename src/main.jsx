import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import AuthGate from './components/AuthGate.jsx'
import { CoinsProvider } from './hooks/useCoins.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CoinsProvider>
        <AuthGate />
      </CoinsProvider>
    </QueryClientProvider>
  </StrictMode>
)
