import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="bg-primary-900">
            <nav className="py-3">
                <div className="w-11/12 mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-2xl text-white">Med Care</Link>
                    </div>
                    <div>
                        <ul>
                            <li className="inline-block mx-3"><Link to="/" className="transition-all text-white hover:text-primary-100">Home</Link></li>
                            <li className="inline-block mx-3"><Link to="/about" className="transition-all text-white hover:text-primary-100">About</Link></li>
                            <li className="inline-block mx-3"><Link to="/login" className="transition-all text-white hover:text-primary-100">Login</Link></li>
                            <li className="inline-block mx-3"><Link to="/signup" className="transition-all text-white hover:text-primary-100">Signup</Link></li>
                            <li className="dropdown-head inline-block mx-3 bg-primary-100 py-1 px-3 rounded"><Link to="/account" className="text-primary-900">Sabbir Ahammad &darr;</Link>
                                <ul className="dropdown-item bg-primary-500 shadow-xl">
                                    <li className="px-4 py-2 hover:bg-primary-700 transition-all"><Link to="/account" className="text-white">Account</Link></li>
                                    <li className="px-4 py-2 hover:bg-primary-700 transition-all"><button className="text-white">Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;