import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/Products/ProductDetails';
import { fetchProductDetails } from '../../state/product/singleProductSlice';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { productId } = useParams()
    const { product, isLoading, isError, error } = useSelector(state => state.productDetails.product);
    const { _id, expert } = product || {}
    useEffect(() => {
        dispatch(fetchProductDetails(productId))
    }, [dispatch, productId])
    let content;
    // if (isLoading){
    //     content = <Loading></Loading>;
    // }
   
    // if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    // if (!isLoading && !isError && !doctor?._id) {
    //     content = <div className="col-span-12"><Loading></Loading></div>
    // }
    if (!isLoading && !isError && product?._id) {
        content = <div>
            <ProductDetails product={product}></ProductDetails>

        </div>
    }
    return (
        <section className="p-3 lg:p-0 lg:w-3/4 mx-auto pt-6 pb-20 mt-12 lg:mt-48">
        {content}
    </section>
    );
};

export default SingleProduct;