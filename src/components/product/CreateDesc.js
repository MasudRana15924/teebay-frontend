import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { adddescriptionToStore } from '../../state/product/createDescriptionSlice';

const CreateDesc = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [desc,setDesc]=useState('');
    const handleStore = (e) => {
        e.preventDefault();
        if(desc){
        dispatch(adddescriptionToStore(desc));
          navigate('/select/price')
        }else{
            alert('enter title')
        }
        
    }
    return (
        <div className="mt-52">
            <form onSubmit={handleStore}>
                <div className="w-2/4 mx-auto">
                    <label for="email" className="block text-xl mb-4 text-gray-900 dark:text-gray-900">Select  Description </label>

                   
                    <textarea placeholder="lorem..." class="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                    <div className="flex justify-between">
                    <Link to="/select/category">
                    <button className=" mt-8 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-50">
                        Back
                    </button>
                    
                    </Link>
                    <button className=" mt-8 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-50">
                        Next
                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateDesc;