import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsinggoole = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            setIsLoading(false);
        })
        .catch(error => setError(error.message));
    };

    const registerUserUsingEmailPass = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            setIsLoading(false);
        })
        .catch(error => setError(error.message));
    };

    const signInUserByEmailPass = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user);
            setIsLoading(false);
        })
        .catch(error => setError(error.message));
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
        signInUsinggoole,
        registerUserUsingEmailPass,
        signInUserByEmailPass,
        error,
        logOut,
        isLoading
    }
}

export default useFirebase;