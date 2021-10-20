import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="py-4 text-center w-11/12 mx-auto">
            <img src={notFoundImg} alt="" className="w-full"/>
            <h5 className="text-2xl pb-8">Please return to <Link to="/" className="text-primary-500 font-bold">Home page</Link></h5>
        </div>
    );
};

export default NotFound;