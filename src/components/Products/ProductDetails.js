import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RentModal from './RentModal';
import BuyModeal from './BuyModeal';

const ProductDetails = ({ product }) => {
    const { _id, title, category, price, description, rentprice, rentType, createdAt } = product
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 250,
        bgcolor: 'background.paper',
        border: '2px solid white',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openBuy, setOpenBuy] = React.useState(false);
    const handleOpenBuy = () => setOpenBuy(true);
    const handleCloseBuy = () => setOpenBuy(false);

    return (
        <div className="w-3/4 mx-auto   mt-4 p-4">
            <div className="block text-start mt-2">
                <div className="flex justify-between">
                    <Link to={`/product/${product._id}`}>
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

                <div className="fixed right-64 mt-12 flex gap-8  ">
                    <button className="h-10 w-14  bg-violet-500 text-white border-violet-500 rounded-lg" onClick={handleOpen}>Rent </button>
                    <button className="h-10 w-14 bg-violet-500 text-white border-violet-500 border rounded-lg" onClick={handleOpenBuy}>Buy </button>
                </div>

                <RentModal open={open}
                    handleClose={handleClose} product={product}>
                </RentModal>
                <BuyModeal openbuy={openBuy}
                    handleCloseBuy={handleCloseBuy} product={product}>

                </BuyModeal>
            </div>
        </div>
    );
};

export default ProductDetails;