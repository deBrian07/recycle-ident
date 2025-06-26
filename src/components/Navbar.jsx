import { useEffect, useState } from "react";
import { useCoins } from "../hooks/useCoins"
import { onAuthStateChanged } from "firebase/auth";
import { auth, signOut} from "../firebase"

export default function Navbar({ project }){
    const { coins } = useCoins();
    const [ user, setUser ] = useState(null);
    useEffect(() => onAuthStateChanged(auth, setUser), [])
    if (!user) return null;

    const map = {
        recycle: {file: "avatar_bottle.png", verb: "recycle"}
    }

    const { file, verb } = map[project];
    const avatarUrl = "";

    return (
        <nav className="flex items-center justify-between p-4 bg-base-100 shadow-md border-b border-base-300s">
            <div className="flex items-center space-x-3">
                <img src={avatarUrl} className="w-10 h-10 rounded-full" alt="Avatar" />
                <span className="text-lg font-semibold text-base-content">Ready to Recycle, {user.displayName}</span>
            </div>
            <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-warning text-warning-content rounded-full font-medium">{coins}</span>
                <button onClick={signOut} className="btn btn-outline btn-sm">
                    Logout
                </button>
            </div>
        </nav>  
    )
}