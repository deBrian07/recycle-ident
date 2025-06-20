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
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-3">
                <img src={avatarUrl} className="w-10 h-10 rounded-full" alt="Avatar" />
                <span className="text-lg font-semibold">Ready to Recycle, {user.displayName}</span>
            </div>
            <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-yellow-200 rounded-full">{coins}</span>
                <button onClick={signOut} className="px-3 py-1 border rounded hover:bg-gray-100">
                    Logout
                </button>
            </div>
        </nav>  
    )
}