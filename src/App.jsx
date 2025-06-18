import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState('recycle');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-base-100 p-8'>
      <h1 className='text-5xl font-extrabold mb-8 text-primary-content'>
        Recycle App
      </h1>
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
  )
}