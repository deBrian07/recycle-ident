console.log("Loaded API key:", import.meta.env.VITE_FIREBASE_API_KEY)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import AuthGate from './components/AuthGate.jsx'
import { CoinsProvider } from './hooks/useCoins.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/*',
    element: (
      <AuthGate>
        <App />
      </AuthGate>
    )
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinsProvider>
      <RouterProvider router={router} />
    </CoinsProvider>
  </StrictMode>
)
