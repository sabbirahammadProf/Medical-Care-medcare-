import React from 'react';
import {Route, Redirect} from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRegisterUser = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if (isLoading){
        return (
            <div className="text-center">
                <p className="xl:pt-20 md:pt-40 pt-20 pb-4 font-bold text-2xl">Loading...</p>
            </div>
        )
    }
    return (
    <Route
            {...rest}
            render={({location}) => 
                user?.email ? <Redirect
                 to={{
                     pathname:'/account',
                     from: location
                 }}
                ></Redirect> : children
            } 
        >
            
        </Route>
    )  
};

export default PrivetRegisterUser;