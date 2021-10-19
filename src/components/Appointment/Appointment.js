import React from 'react';

const Appointment = () => {
    return (
        <div className="flex flex-col my-8 items-center">
            <h1 className="text-2xl py-3">Make an Appointment</h1>
            <input type="text" className="outline-none bg-lightdark rounded py-3 px-8 my-2 w-2/6" placeholder="Enter your name" required/>
            <input type="text" className="outline-none bg-lightdark rounded py-3 px-8 my-2 w-2/6" placeholder="Enter your phone number" required/>
            <input type="email" className="outline-none bg-lightdark rounded py-3 px-8 my-2 w-2/6" placeholder="Enter your email" required/>
            <input type="text" className="outline-none bg-lightdark rounded py-3 px-8 my-2 w-2/6" placeholder="Enter your address" required/>
            <textarea className="outline-none bg-lightdark rounded py-3 px-8 my-2 w-2/6" placeholder="Enter your problem" required></textarea>
            <input type="submit" className="outline-none bg-primary-900 hover:bg-primary-500 transition-all duration-300 cursor-pointer text-white rounded py-3 px-8 my-2 w-2/6" value="Submit Now"/>
        </div>
    );
};

export default Appointment;