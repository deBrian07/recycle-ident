import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function Login(){
    const handleSignIn = async() => {
        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            console.log("Sign-in successful", {
                email: result.user.email,
                name: result.user.displayName
            })
        }catch(error){
            console.error("Sign in failed:", error);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to Recycle App</h1>
                <button onClick={handleSignIn} className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}