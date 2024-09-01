import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore';

const SignupForm = () => {
    const store = authStore();
    const navigate = useNavigate();

    const { signupForm, updateSignupForm, signup } = store;

    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup();
        navigate("/");
    }

    return (
        <div className="flex flex-col gap-4 border max-w-[300px] p-4">
            <h2>Sign Up:</h2>
            <form onSubmit={handleSignup} className="flex flex-col gap-3">
                <input onChange={updateSignupForm} type="email" name="email" value={signupForm.email} className="border" />
                <div className='flex flex-col'>
                    <div className='text-[10px] cursor-pointer select-none self-end px-1 text-blue-400 underline' onClick={() => setShowPassword(!showPassword)}>
                        {!showPassword ? "Show" : "Hide"}
                    </div>
                    <input onChange={updateSignupForm} type={showPassword ? "text" : "password"} name="password" value={signupForm.password} className="border" />
                </div>
                <button type="submit" className="bg-black text-white">Signup</button>
            </form>
        </div>
    )
}

export default SignupForm