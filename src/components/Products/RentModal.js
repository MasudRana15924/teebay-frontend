import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createRent } from '../../state/rent/rentSlice';
import { ToastContainer, toast } from 'react-toastify';

const RentModal = ({ open, handleClose,product }) => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch=useDispatch()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 350,
        bgcolor: 'background.paper',
        border: '2px solid white',
        boxShadow: 24,
        p: 4,
    };

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const title=product.title;
    const category=product.category;
    const description=product.description;
    const price=product.price;
    const rentprice=product.rentprice;
    const rentType=product.rentType;
    const data={from,to,title,category,description,price,rentprice,rentType}
    const handleCreate=(e)=>{
        e.preventDefault();
        dispatch(createRent({data,userToken}))
        handleClose();
        toast.success('Rent Successfully Done ', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    }
    return (
        <div>
            <Modal
                 open={open}
                 onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p className="text-3xl text-start">Rental Period </p>
                    <div className=" mt-8  ">
                        <form action="" >
                            <div className="flex justify-between gap-4 ">
                                <div>
                                    <p>From </p>
                                    <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-full p-2  h-12 mx-auto" />
                                </div>
                                <div>
                                    <p>To </p>
                                    <input type="date" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-full p-2  h-12 mx-auto" />
                                </div>
                            </div>
                            
                        </form>
                        <div className=" mt-8 flex gap-8  mb-12">
                                <button className="ml-56 h-10 w-20  bg-red-500 text-white border-red-500 rounded-lg">Go Back </button>
                                <button className="h-10 w-24 bg-violet-500 text-white border-violet-500 border rounded-lg" onClick={handleCreate}>Confirm </button>
                            </div>
                    </div>
                </Box>
            </Modal>

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

export default RentModal;