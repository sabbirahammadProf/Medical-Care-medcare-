import React from 'react';
import {Route, Redirect} from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRegisterUser = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading){
        return (
            <div className="text-center">
                <p className="py-4 font-bold text-2xl">Loading...</p>
            </div>
        )
    }
    return (
    <Route
            {...rest}
            render={({location}) => 
                user.email ? children : <Redirect
                 to={{
                     pathname:'/login',
                     from: location
                 }}
                ></Redirect>
            } 
        >
            
        </Route>
    )  
};

export default PrivetRegisterUser;