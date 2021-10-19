import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location?.state ? location.state : '/account';
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signInUsinggoole,  registerUserUsingEmailPass, setUser, setIsLoading} = useAuth();

    const handlegooglesign = () => {
        setIsLoading(true);
        signInUsinggoole()
        .then(result => {
            setUser(result.user);
            history.push(redirectUrl);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    };
    
    const handleUserEmail = (e) => {
        setEmail(e.target.value);
    };
    
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        registerUserUsingEmailPass(email, password)
        .then(result => {
            setUser(result.user);
            history.push(redirectUrl);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    };
    
    return (
        <section className="py-12 text-center">
            <h2 className="text-primary-500 text-2xl mb-3">Please signup!!</h2>
            <div className="flex items-center flex-col justify-center">
            {error && <p className="bg-alert py-2 px-3 rounded text-white my-2">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input type="email" className="outline-none bg-lightdark rounded py-3 px-8 my-2" placeholder="Enter your email" onBlur={handleUserEmail} autoComplete="none" required/>
                    <input type="password" className="outline-none bg-lightdark rounded py-3 px-8 my-2" placeholder="Enter your password" autoComplete="off" onBlur={handleUserPassword} required/>
                    <input type="submit" className="outline-none bg-primary-900 hover:bg-primary-500 transition-all duration-300 cursor-pointer text-white rounded py-3 px-8 my-2" value="Sign Up"/>
                </form>
            </div>
            <p className="py-3">or</p>
            <button className="bg-blue text-white py-3 px-12 rounded" onClick={handlegooglesign}>Continue with google</button>
        </section>
    );
};

export default Signup;