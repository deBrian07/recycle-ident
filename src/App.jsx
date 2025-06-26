import { useState, useEffect } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Upload from "./components/Upload";
import TestApi from './components/TestApi'
import Dashboard from './pages/Dashboard';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])


  return (
    <>
    <Navbar project="recycle" />
    <div className='min-h-screen flex flex-col items-center justify-center bg-base-100 p-8'>
      <h1 className='text-5xl font-extrabold mb-8 text-primary'>
        Recycle App
      </h1>
      <p className='text-sm mb-4'>Welcome, {user?.displayName || 'User'}!</p>
      <button onClick={() => auth.signOut()} className='btn btn-outline mb-4'>
        Sign out
      </button>
      <div className='flex flex-col sm:flex-row gap-4 mb-8'>
        <button className='btn btn-primary btn-lg hover:scale-105 active:scale-95 focus:ring-4'>
          Start Recycling
        </button>
        <button className='btn btn-secondary btn-lg hover:scale-105 active:scale-95 focus:ring-4'>
          Learn more
        </button>
      </div>
      <div className='w-full max-w-md mb-6'>
        <Dashboard />
      </div>
      <ThemeToggle />
      <TestApi />
    </div>
    </>
  )
}