import React, { useState } from 'react'
import authStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const store = authStore();
    const navigate = useNavigate();

    const { loginForm, updateLoginForm, login } = store;

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login();
        navigate("/");
    }

    return (
        <div className="flex flex-col gap-4 border max-w-[300px] p-4">
            <h2>Log In:</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <input onChange={updateLoginForm} type="email" name="email" value={loginForm.email} className="border" />
                <div className='flex flex-col'>
                    <div className='text-[10px] cursor-pointer select-none self-end px-1 text-blue-400 underline' onClick={() => setShowPassword(!showPassword)}>
                        {!showPassword ? "Show" : "Hide"}
                    </div>
                    <input onChange={updateLoginForm} type={showPassword ? "text" : "password"} name="password" value={loginForm.password} className="border" />
                </div>
                <button type="submit" className="bg-black text-white">Login</button>
            </form>

            <div className='flex items-center gap-2'>
                <div className='h-[1px] bg-black flex-1'/>
                <p>Do not have an account?</p>
                <div className='h-[1px] bg-black flex-1'/>
            </div>

            <button onClick={() => navigate("/signup")} className='bg-black text-white'>Signup</button>
        </div>
    )
}

export default LoginForm