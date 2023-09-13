import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../state/product/allProductsSlice';
import Product from '../../components/Products/Products';
import { Rings } from 'react-loader-spinner';

const Products = () => {
    const dispatch = useDispatch();
    const { products, isError, error } = useSelector(state => state.products.products);
    const { isLoading } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])


    let content;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && products?.length > 0) {
        content = products.map(product => <Product key={product._id} product={product} />)
    }
    return (
        <section className="mt-12 lg:mt-0 doctors-section mb-5 lg:mb-10  2xl:p-0">
        <div className="lg:w-2/4 lg:mx-auto">
            <h1 className="text-start  font-semibold  text-2xl lg:text-3xl ">All Products</h1>
        </div>
        {
            isLoading ? <div className="w-2/4 lg:w-1/4 mx-auto flex mt-10">

                <Rings
                    height={40}
                    width={40}
                    color="red"
                    visible={true}
                    secondaryColor="green"
                    className="border"

                />
                <p className="ml-1 mt-2 text-gray-900">please wait a sec</p>
            </div> : <div
                className="m-3 md:m-0 lg:m-0  lg:w-3/4 lg:mx-auto 2xl:w-3/4 2xl:mx-auto lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-16" >
                {content}
               
            </div>
        }
    </section>
    );
};

export default Products;