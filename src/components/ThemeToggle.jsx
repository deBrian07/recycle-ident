import { useContext } from "react";
import DarkCtx from "../context/DarkModeContext";

export default function ThemeToggle(){
    const {theme, cycleTheme} = useContext(DarkCtx);

    const getThemeEmoji = (currentTheme) => {
        switch(currentTheme) {
            case 'recycle': return '♻️ Recycle';
            case 'light': return '🌞 Light';
            case 'dark': return '🌚 Dark';
            default: return '♻️ Recycle'
        }
    }

    return (
        <button aria-label="toggle theme" onClick={cycleTheme} className="btn btn-neutral btn-sm lg:btn-md ring-offset-2 ring-primary">
            {getThemeEmoji(theme)}
        </button>
    )
}