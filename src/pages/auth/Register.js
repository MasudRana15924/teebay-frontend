import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSignUp } from '../../state/user/signupSlice';
import { Alert } from '@mui/material';

const Register = () => {
    const dispatch = useDispatch();
    const { error } = useSelector(
        (state) => state.signup
      );
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("firstname", firstname);
        myForm.set("lastname", lastname);
        myForm.set("address", address);
        myForm.set("email", email);
        myForm.set("phone", phone);
        myForm.set("password", password);
        myForm.set("confirmpassword", confirmpassword);
        dispatch(createSignUp(myForm));
        console.log(myForm);
    };
    return (
        <div className="mt-48 w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
                <p className="mt-1 text-center text-2xl font-semibold  text-gray-900 dark:text-gray-400">Sign Up</p>

                <form onSubmit={registerSubmit}>
                    <div className="flex w-full gap-4">
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="First Name" aria-label="First Name"  value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Last Name" aria-label="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder=" Address" aria-label="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className="flex w-full gap-4">
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Phone" aria-label="Phone"  value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Confirm Password" aria-label="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                      <div className="w-full mt-4">
                      {
                        error ? <Alert severity="error">{error}</Alert>:null
                      }
                      </div>
                    <div className="flex items-center justify-between mt-4">
                        <Link to="" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500" >Forget Password?</Link>

                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                           Register
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                <Link to="/user/login" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Sign In</Link>
            </div>
        </div>
    );
};

export default Register;