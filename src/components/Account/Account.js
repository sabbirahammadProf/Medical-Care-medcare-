import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <div className="text-center py-8 flex flex-col items-center">
            <img src={user.photoURL && user.photoURL} alt="" className="rounded-3xl my-4"/>
            {!user.emailVerified && <p className="text-alert py-4">Please verify your email!!</p>}
            <h1 className="text-3xl">Welcome {user.displayName ? user.displayName : 'Mr. John Doe'}</h1>
            <input type="email" value={user.email} className="outline-none bg-lightdark rounded py-3 px-3 my-4 w-2/6" readOnly/>
            
        </div>
    );
};

export default Account;