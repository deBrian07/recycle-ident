import { useEffect, useState } from "react";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";

export default function AuthGate({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [redirectProcessed, setRedirectProcessed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        
        // First, check for redirect result
        const checkRedirectResult = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result && isMounted) {
                    // User signed in via redirect
                    setUser(result.user);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Redirect result error:", error);
            } finally {
                if (isMounted) {
                    setRedirectProcessed(true);
                }
            }
        };

        checkRedirectResult();

        // Then listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (isMounted) {
                setUser(currentUser);
                if (redirectProcessed || currentUser) {
                    setLoading(false);
                    if (!currentUser && redirectProcessed) {
                        navigate("/login", { replace: true });
                    }
                }
            }
        });

        return () => {
            isMounted = false;
            unsubscribe();
        };
    }, [navigate, redirectProcessed]);

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>
    }

    if (!user) {
        return null; // This will only happen briefly before redirect
    }

    return <>{children}</>
}