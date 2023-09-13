import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../../state/product/createProductSlice';
import { clearStore } from '../../state/product/titleSlice';
import { clearPriceStore } from '../../state/product/createPriceSlice';
import { clearDescStore } from '../../state/product/createDescriptionSlice';
import { clearCategoryStore } from '../../state/product/createCategorySlice';
import { ToastContainer, toast } from 'react-toastify';

const Summary = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const { title } = useSelector(
        (state) => state.title
    );
    const { category } = useSelector(
        (state) => state.category
    );
    const { description } = useSelector(
        (state) => state.description
    );
    const { price, rentprice, rentType } = useSelector(
        (state) => state.price
    );
    const data = { title, category, description, price, rentprice, rentType };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct({ data }));
        toast.success('Product Create Successfully  ', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch(clearStore());
        dispatch(clearPriceStore());
        dispatch(clearDescStore());
        dispatch(clearCategoryStore());
        navigate('/')
    }

    return (
        <div className="mt-44 w-2/4 mx-auto">
            <div>
                <h2 className="mt-12 text-start text-xl ">Summary</h2>
                <h2 className="mt-12 text-start text-xl ">Title : {title}</h2>
                <h2 className="mt-12 text-start text-xl ">Category : {category} </h2>
                <h2 className="mt-12 text-start text-xl ">Description : {description} </h2>
                <h2 className="mt-12 text-start text-xl ">Price : {price} to rent ${rentprice} {rentType}</h2>
            </div>

            <div className="flex justify-between mt-8">
                <Link to="/select/price">
                    <button className=" mt-8 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-50">
                        Back
                    </button>
                </Link>
                <button onClick={handleSubmit} className=" mt-8 px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-50">
                    Submit
                </button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Summary;