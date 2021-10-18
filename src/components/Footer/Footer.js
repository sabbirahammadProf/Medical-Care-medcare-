import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary-900 py-8">
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl text-white border-dashed border-b-2 border-white border-opacity-10">Best 5 doctors cell phone number</h2>
                    <ul className="pt-5">
                        <li className="text-white py-1 text-sm">Mrs. Hasina Akter: 018********</li>
                        <li className="text-white py-1 text-sm">Mr Hasan Ali: 018********</li>
                        <li className="text-white py-1 text-sm">Abdullah Noman: 018********</li>
                        <li className="text-white py-1 text-sm">Abid Hasan: 018********</li>
                        <li className="text-white py-1 text-sm">Saiful Islam: 018********</li>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl text-white">MedCare</h2>
                    <p className="text-white pt-4">MedCare, the best medical hospital in bangladesh. It is most popular for advance technology use in operation and online support.</p>
                </div>
                <div>
                <h2 className="text-xl text-white border-double border-b-2 border-white border-opacity-10">Useful Links</h2>
                    <ul className="pt-5">
                        <li><Link to='/about' className="text-white py-1 text-sm">About Us</Link></li>
                        <li><Link to='/appointment' className="text-white py-1 text-sm">Appointment</Link></li>
                        <li><Link to='/services' className="text-white py-1 text-sm">Services</Link></li>
                        <li><Link to='/blog' className="text-white py-1 text-sm">Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;