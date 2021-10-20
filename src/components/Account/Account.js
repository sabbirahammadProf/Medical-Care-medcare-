import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <div className="text-center pb-8 flex flex-col items-center xl:pt-20 md:pt-40 pt-20">
            <img src={user.photoURL && user.photoURL} alt="" className="rounded-3xl my-4"/>
            {!user.emailVerified && <p className="text-alert py-4">Please verify your email!!</p>}
            <h1 className="xl:text-3xl text-2xl">Welcome {user.displayName ? user.displayName : 'Mr. John Doe'}</h1>
            <input type="email" value={user.email} className="outline-none bg-lightdark rounded py-3 px-3 my-4 xl:w-2/6 w-4/6" readOnly/>
            
        </div>
    );
};

export default Account;