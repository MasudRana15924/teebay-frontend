import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utilities/helper';

const MyRent = ({productt}) => {
    const { _id,title, category, price,description, rentprice, rentType, createdAt } = productt
    return (
        <div className="w-3/4 mx-auto border  mt-4 p-4">
        <div className="block text-start mt-2">
            <div className="flex justify-between">
                <Link  to={`/product/${productt._id}`}>
                    <p className="text-2xl font-medium 2xl:text-sm 2xl:font-semibold leading-6 text-gray-600" >
                        {title}
                    </p>
                </Link>
             
            </div>
            <p className="text-md font-semibold leading-6 text-gray-500 mt-2" >
                {category}
            </p>
            <p className="text-md font-semibold leading-6 text-gray-500 mt-2" >
                {description}
            </p>
            <p className="text-md font-semibold leading-6 text-gray-500" >
                {price} rent price ${rentprice} {rentType}
            </p>
            <p className="text-sm font-semibold leading-6 text-gray-400 mt-4" >
                Date Posted   {formatDate(createdAt)}
            </p>

        </div>
    </div>
    );
};

export default MyRent;