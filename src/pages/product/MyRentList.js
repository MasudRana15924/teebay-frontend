import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmyRentProducts } from '../../state/product/myRentSlice';
import MyRent from '../../components/Products/MyRent';
import { Rings } from 'react-loader-spinner';

const MyRentList = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { product, isError, error } = useSelector(state => state.myRent.myrentproducts);
    const { isLoading } = useSelector(state => state.myRent);
    useEffect(() => {
        dispatch(fetchmyRentProducts({ userToken }));
    }, [dispatch, userToken])


    let content;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && product?.length > 0) {
        content = product.map(productt => <MyRent key={product._id} productt={productt} />)
    }
    return (
        <section className="mt-44  mb-5 lg:mb-10  2xl:p-0">
        <div className="lg:w-2/4 lg:mx-auto">
            <h1 className="text-start  font-semibold  text-2xl lg:text-3xl ">My All Products</h1>
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

export default MyRentList;