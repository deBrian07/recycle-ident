import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login"
import App from "../App"

export default function AuthGate() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth state changed", {
                hasUser: !!currentUser,
                email: currentUser?.email,
                name: currentUser?.displayName
            })
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            console.log("AuthGate: Cleanup")
            unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-center">
                    <div className="loading loading-spinner loading-lg"></div>
                    <p className="mt-4">Checking  authentication</p>
                </div>
            </div>
        )
    }

    if (!user) {
        console.log("AuthGate: no user, showing login")
        return <Login />; // This will only happen briefly before redirect
    }

    console.log("AuthGate: user signed-in, showing app")
    return <App />
}