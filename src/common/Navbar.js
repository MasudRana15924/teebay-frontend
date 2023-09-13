import React from 'react';
import { Link } from 'react-router-dom';


const navigation = [
    { name: 'Home', to: '/home' },
    { name: 'Create Product', to: '/create' },
  
]

const Navbar = () => {

    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <p className="text-lg font-semibold  mt-2">TeeBay</p>
                    </div>
                    <div className=" flex gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                        <Link to="/user/login" className="text-sm font-semibold leading-6 text-gray-900">
                            Log in 
                        
                        </Link>

                    </div>

                </nav>
            </header>
        </div>
    );
};

export default Navbar;