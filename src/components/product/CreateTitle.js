import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtitleToStore } from '../../state/product/titleSlice';

const CreateTitle = () => {

    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [title,setTitle]=useState('');
    const handleStore = (e) => {
        e.preventDefault();
        if(title){
        dispatch(addtitleToStore(title));
          navigate('/select/category')
        }else{
            alert('enter title')
        }
        
    }
    return (
        <div className="mt-52">
            <form onSubmit={handleStore}>
                <div className="w-2/4 mx-auto">
                    <label for="email" className="block text-xl mb-4 text-gray-900 dark:text-gray-900">Select a title for your product</label>

                    <input type="text" placeholder="" class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" value={title} onChange={(e) => setTitle(e.target.value)}/>

                    <button className="fixed ml-60 mt-8 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-50">
                            Next
                        </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTitle;