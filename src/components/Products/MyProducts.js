import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../state/product/deleteProductSlice';
import { fetchProduct } from '../../state/product/allProductsSlice';
import { Box, Modal } from '@mui/material';
import { formatDate } from '../../utilities/helper';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const MyProducts = ({productt}) => {
    const { _id,title, category, price,description, rentprice, rentType, createdAt } = productt
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
    const dispatch = useDispatch();
    const deleteProductHandler = (_id) => {
        dispatch(deleteProduct(_id));
        dispatch(fetchProduct());
        handleClose();
      };
    return (
        <div className=" ">
        <div className="w-3/4 mx-auto border  mt-4 p-4">
            <div className="block text-start mt-2">
                <div className="flex justify-between">
                    <Link  to={`/product/${productt._id}`}>
                        <p className="text-2xl font-medium 2xl:text-sm 2xl:font-semibold leading-6 text-gray-600" >
                            {title}
                        </p>
                    </Link>
                    <AiOutlineDelete className="text-2xl" onClick={handleOpen}></AiOutlineDelete>
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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <p className="text-3xl text-start">Are your sure want to delete this product ?</p>
                <div className=" mt-8 flex gap-8  ">
                    <button className="ml-64 h-10 w-14  bg-red-500 text-white border-red-500 rounded-lg">No </button>
                    <button className="h-10 w-14 bg-violet-500 text-white border-violet-500 border rounded-lg" onClick={() =>
            deleteProductHandler(_id)
          }>Yes</button>
                </div>
            </Box>
        </Modal>

    </div>
    );
};

export default MyProducts;