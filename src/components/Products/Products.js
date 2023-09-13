import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utilities/helper';
import { AiOutlineDelete } from 'react-icons/ai';
import { Box, Modal } from '@mui/material';
const Product = ({ product }) => {
    const { title, category, price, rentprice, rentType, createdAt } = product

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
    return (
        <div className=" ">
            <div className="w-3/4 mx-auto border  mt-4 p-4">
                <div className="block text-start mt-2">
                    <div className="flex justify-between">
                        <Link  >
                            <p className="text-2xl font-medium 2xl:text-sm 2xl:font-semibold leading-6 text-gray-600" >
                                {title}
                            </p>
                        </Link>
                        <AiOutlineDelete className="text-2xl" onClick={handleOpen}></AiOutlineDelete>
                    </div>
                    <p className="text-md font-semibold leading-6 text-gray-500 mt-2" >
                        {category}
                    </p>
                    <p className="text-md font-semibold leading-6 text-gray-500" >
                        {price} rent price ${rentprice} {rentType}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-500" >
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
                        <button className="h-10 w-14 bg-violet-500 text-white border-violet-500 border rounded-lg">Yes</button>
                    </div>
                </Box>
            </Modal>

        </div>
    );
};

export default Product;