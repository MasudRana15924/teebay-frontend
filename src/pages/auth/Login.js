import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createLogin } from '../../state/user/Login/loginSlice';
import { Alert } from '@mui/material';

const Login = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const { error} = useSelector(
        (state) => state.userDetails
    );
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(createLogin(myForm));
        navigate('/create')
    };
    return (
        <div class="mt-48 w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
                

            <p className="mt-4 mb-4 text-center text-2xl font-semibold  text-gray-900 dark:text-gray-400">Sign In</p>

                <form onSubmit={registerSubmit}>
                    <div class="w-full mt-8">
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div class="w-full mt-4">
                        <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="w-full mt-4">
                      {
                        error ? <Alert severity="error">{error}</Alert>:null
                      }
                      </div>
                    <div class="flex items-center justify-between mt-4">
                        <Link to="" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500" >Forget Password?</Link>

                        <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                <Link to="/user/registration" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
            </div>
        </div>
    );
};

export default Login;