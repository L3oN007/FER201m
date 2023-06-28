import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailLogin = () => {
        // Implement email/password login logic using Firebase auth
        // Use the 'email' and 'password' states for authentication
    };

    const handleGoogleLogin = async () => {
        try {
            // Sign in with Google using Firebase auth
            const result = await signInWithPopup(auth, googleProvider);
            // Access user information from 'result.user' if needed
        } catch (error) {
            console.log("Google login error:", error);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="button" onClick={handleEmailLogin}>
                    Login with Email/Password
                </button>
                <button type="button" onClick={handleGoogleLogin}>
                    Login with Google
                </button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}
