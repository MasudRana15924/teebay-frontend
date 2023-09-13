import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addpriceToStore } from '../../state/product/createPriceSlice';
import { TextField } from '@mui/material';

const CreatePrice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [price, setPrice] = useState('');
    const [rentType, setRentType] = useState('');

    const types = [
        {

            label: 'Choose type ',
        },
        {
            value: 'Medical',
            label: 'Medical',
        },
        {
            value: 'Dental',
            label: 'Dental',
        },
    ];
    const handleStore = (e) => {
        e.preventDefault();
        if (price) {
            dispatch(addpriceToStore(price));
            navigate('/summary')
        } else {
            alert('enter title')
        }

    }

    return (
        <div className="mt-52">
            <form onSubmit={handleStore}>
                <div className="w-1/4 mx-auto">
                    <label for="email" className="block text-xl mb-4 text-gray-900 dark:text-gray-900">Select a title for your product</label>

                    <input type="text" placeholder="" class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" value={price} onChange={(e) => setPrice(e.target.value)} />

                    <div className="flex justify-between gap-8  mt-12">
                        <div>
                            <label for="text" className="text-start block text-md mb-4 text-gray-900 dark:text-gray-900">Rent </label>
                            <input type="text" placeholder="$ 50" class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mt-8">
                            <TextField
                                id="standard-select-currency-native"
                                select
                                label=""
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                variant="standard"
                                className="bg-white w-full mt-8"
                                onChange={(e) => setRentType(e.target.value)}
                            >
                                {types.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <Link to="/select/description">
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

export default CreatePrice;