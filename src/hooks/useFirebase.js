import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from '../Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsinggoole = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    const registerUserUsingEmailPass = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUserByEmailPass = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
            setIsLoading(false);
        })
        .catch(error => setError(error.message))
    };

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged((auth), (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    return {
        user,
        setUser,
        signInUsinggoole,
        registerUserUsingEmailPass,
        signInUserByEmailPass,
        error,
        logOut,
        setIsLoading,
        isLoading
    }
}

export default useFirebase;