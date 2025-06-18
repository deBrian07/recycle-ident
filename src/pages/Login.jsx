import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function Login(){
    const handleSignIn = async() => {
        const provider = new GoogleAuthProvider();
        try{
            await signInWithPopup(auth, provider)
        } catch(error){
            console.error("Sign in failed")
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