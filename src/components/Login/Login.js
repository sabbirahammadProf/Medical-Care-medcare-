import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirectUrl = location?.from?.pathname ? location?.from?.pathname : '/account';
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signInUsinggoole,  signInUserByEmailPass, setUser, setIsLoading} = useAuth();

    const handlegooglesign = () => {
        signInUsinggoole()
        .then(result => {
            setUser(result.user);
            history.push(redirectUrl);
            console.log(location)
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
    
    const handleLogin = () => {
        setIsLoading(true);
        signInUserByEmailPass(email, password)
        .then(result => {
            setUser(result.user);
            history.push(redirectUrl);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    return (
        <section className="py-12 text-center">
            <h2 className="text-primary-500 text-2xl mb-3">Please login!!</h2>
            <div className="flex items-center flex-col justify-center">
            {error && <p className="bg-alert py-2 px-3 rounded text-white my-2">{error}</p>}
                <form onSubmit={handleLogin} className="flex flex-col">
                    <input type="email" className="outline-none bg-lightdark rounded py-3 px-8 my-2" placeholder="Enter your email" onBlur={handleUserEmail} autoComplete="none" required/>
                    <input type="password" className="outline-none bg-lightdark rounded py-3 px-8 my-2" placeholder="Enter your password" autoComplete="off" onBlur={handleUserPassword} required/>
                    <input type="submit" className="outline-none bg-primary-900 hover:bg-primary-500 transition-all duration-300 cursor-pointer text-white rounded py-3 px-8 my-2" value="Login"/>
                </form>
                <Link to="/signup" className="text-alert py-2">Don't have an account?</Link>
            </div>
            <p className="py-3">or</p>
            <button className="bg-blue text-white py-3 px-12 rounded" onClick={handlegooglesign}>Continue with google</button>
        </section>
    );
};

export default Login;