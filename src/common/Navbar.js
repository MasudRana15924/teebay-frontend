import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../state/user/Login/loginSlice';


const navigation = [
    { name: 'Home', to: '/home' },
    { name: 'Create Product', to: '/create' },

]

const Navbar = () => {
    const dispatch=useDispatch()
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    
    const user = loggeduser.user
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/">
                            <p className="text-lg font-semibold  mt-2">TeeBay</p></Link>
                    </div>
                    <div className=" flex gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                        {
                            token ? <Link className="text-sm font-semibold leading-6 text-gray-900"  onClick={showMenu}>
                                 {user.firstname} {user.lastname}
                            </Link> : <Link to="/user/login" className="text-sm font-semibold leading-6 text-gray-900">
                                Log in

                            </Link>
                        }
                       

                    </div>
                </nav>
                {
                    token ? <div  className={active ? ' fixed right-6 border p-4 rounded-lg' : 'hidden'}>
                    <Link to="/my/productlist" onClick={showMenu}>
                    <p className="text-start" >My Product List </p></Link>
                    <Link to="/my/rent/list" onClick={showMenu}>
                    <p className="text-start mt-2" >My Rent List </p></Link>
                    <p className="text-start mt-2" onClick={() => dispatch(logout())}>Sign out </p>
             </div>:null
                }
            </header>
        </div>
    );
};

export default Navbar;