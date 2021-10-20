import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const {user, logOut} = useAuth();
    const [mobileBar, setMobileBar] = useState('xl:block md:block hidden');
    const handleLogout = () => {
        logOut();
        history.push('/');
    };

    const toggleMobileMenu = () => {
        if (mobileBar === 'xl:block md:block hidden') {
            setMobileBar('xl:block md:block visible');
        } else if (mobileBar === 'xl:block md:block visible') {
            setMobileBar('xl:block md:block hidden');
        }
    };

    return (
        <header className="bg-primary-900 z-50 fixed w-full">
            <nav className="py-3">
                <div className="w-11/12 mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-white text-2xl">Med Care</Link>
                    </div>
                    <div className="mr-0 ml-auto">
                        <button onClick={toggleMobileMenu}><i className="xl:hidden md:hidden visible fas fa-bars text-xl text-white"></i></button>
                    </div>
                    <div className={mobileBar}>
                        <ul className="xl:static md:static fixed left-0 top-10 bg-primary-900 w-full xl:py-0 py-4">
                            <li className="xl:inline-block md:inline-block xl:my-0 md:my-0 my-3 mx-3"><Link to="/" className="transition-all text-white hover:text-primary-100">Home</Link></li>
                            <li className="xl:inline-block md:inline-block xl:my-0 md:my-0 my-3 mx-3"><Link to="/blogs" className="transition-all text-white hover:text-primary-100">Blogs</Link></li>
                            <li className="xl:inline-block md:inline-block xl:my-0 md:my-0 my-3 mx-3"><Link to="/appointment" className="transition-all text-white hover:text-primary-100">Appointment</Link></li>
                            {user?.email ? <><li className="dropdown-head xl:inline-block md:inline-block mx-3 xl:mt-0 mt-4 bg-primary-100 py-1 px-3 rounded"><Link to="/account" className="text-primary-900">{user?.displayName ? user.displayName : "Mr. John Doe"} &darr;</Link>
                                <ul className="dropdown-item bg-primary-500 shadow-xl xl:my-0 md:my-0 my-3">
                                    <li className="px-4 py-2 hover:bg-primary-700 transition-all"><Link to="/account" className="text-white pr-24 py-2">Account</Link></li>
                                    <li className="px-4 py-2 hover:bg-primary-700 transition-all"><button onClick={handleLogout} className="text-white pr-24">Logout</button></li>
                                </ul>
                            </li></> : <><li className="xl:inline-block md:inline-block mx-3"><Link to="/login" className="xl:my-0 my-3 transition-all text-white hover:text-primary-100">Login</Link></li>
                            <li className="xl:my-0 my-3 xl:inline-block md:inline-block mx-3"><Link to="/signup" className="transition-all text-white hover:text-primary-100">Signup</Link></li></>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;