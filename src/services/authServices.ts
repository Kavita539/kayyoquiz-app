import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import {
    auth
} from "../firbase-config";

const loginServices = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const signupServices = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const logoutServices = () => {
    signOut(auth);
};

export {
    loginServices,
    signupServices,
    logoutServices
};