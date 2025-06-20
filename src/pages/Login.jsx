import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

export default function Login(){
    const handleSignIn = async() => {
        const provider = new GoogleAuthProvider();
        // Add custom parameters to ensure proper auth flow
        provider.addScope('email');
        provider.addScope('profile');
        
        try{
            // Use redirect instead of popup to avoid CORS issues
            await signInWithRedirect(auth, provider);
        } catch(error){
            console.error("Sign in failed:", error);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <button onClick={handleSignIn} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign in with Google
            </button>
        </div>
    )
}