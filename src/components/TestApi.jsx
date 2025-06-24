import { useState } from "react";
export default function TestApi() {
    const [icon, setIcon] = useState('?');
    const ping = async () => {
        try{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/health`);
            const json = await res.json();
            setIcon(json.emoji)
        } catch {
            setIcon('💔')
        }
    }
    return(
        <button className="btn btn-secondary" onClick={ping}>API Testing {icon}</button>
    )
}