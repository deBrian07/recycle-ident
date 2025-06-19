import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";

export default function AuthGate({ children }) {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setLoading(false);
            } else{
                navigate("/login", { replace: true});
            }
        });
        return unsubscribe;
    }, [navigate]);

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }
    return <>{children}</>
}