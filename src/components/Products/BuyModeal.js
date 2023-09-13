import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBuy } from '../../state/buy/newbuySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BuyModeal = ({ openbuy, handleCloseBuy,product }) => {
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
         dispatch(createBuy({data,userToken}))
         handleCloseBuy();
         toast.success('Buy Successfully Done ', {
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
    const handleCancel=(e)=>{
        e.preventDefault();
        // dispatch(createRent({data}))
        handleCloseBuy()
    }
    return (
        <div>
             <Modal
                 open={openbuy}
                 onClose={handleCloseBuy}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <p className="text-3xl text-start">Are your sure want to buy this product ?</p>
                    <div className=" mt-8 flex gap-8  ">
                        <button className="ml-64 h-10 w-14  bg-red-500 text-white border-red-500 rounded-lg" onClick={handleCancel}>No </button>
                        <button className="h-10 w-14 bg-violet-500 text-white border-violet-500 border rounded-lg" onClick={handleCreate}>Yes</button>
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

export default BuyModeal;