import { useState, useEffect } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';

export default function App() {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('recycle');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
      <p className='text-sm mb-4'>current theme: {theme}</p>
      <div className='flex flex-col sm:flex-row gap-4 mb-8'>
        <button className='btn btn-primary btn-lg hover:scale-105 active:scale-95 focus:ring-4'>
          Start Recycling
        </button>
        <button className='btn btn-secondary btn-lg hover:scale-105 active:scale-95 focus:ring-4'>
          Learn more
        </button>
      </div>
      <div className='flex flex-wrap gap-2'>
        {
          ['recycle', 'light', 'dark'].map(t => (
            <button key={t} onClick={(() => setTheme(t))} className='btn btn-sm'>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))
        }
      </div>
    </div>
    </>
  )
}