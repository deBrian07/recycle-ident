import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
const DarkCtx = createContext({theme: 'recycle', setTheme:()=>{}, cycleTheme:()=>{}});

export function DarkProvider({children}){
    const [theme,setTheme] = useState(() => localStorage.getItem('theme') || 'recycle');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    const cycleTheme = () => {
        const themes = ['recycle', 'light', 'dark'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1 ) % themes.length
        setTheme(themes[nextIndex])
    }

    // let the keyboard listen to d a r k key sequence
    useEffect(() => {
        const buf=[]
        const onKey=e=>{
            buf.push(e.key);buf.slice(0, buf.length-4);
            if(buf.join('')==='dark') cycleTheme();
        }
        window.addEventListener('keydown',onKey);
        return()=>window.removeEventListener('keydown', onKey)
    }, [])

    return <DarkCtx.Provider value={{theme, setTheme, cycleTheme}}>{children}</DarkCtx.Provider>
}

export default DarkCtx