import {
    useContext,
    useEffect,
    useCallback
} from "react";
import {
    useNavigate
} from "react-router-dom";
import {
    AuthContext
} from "../context";
import {
    LogInUserInputTypes,
    UserDetailTypes
} from "../types";
import {
    signupServices,
    logoutServices,
    loginServices
} from "../services";
import {
    auth
} from "../firbase-config";
import {
    createUserInfo,
    getErrorMessage
} from "../utils";
import {
    onAuthStateChanged,
    User
} from "firebase/auth";

const useAuth = () => {
    const {
        authState,
        authDispatch
    } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAuthStateChange = useCallback(
        (currentUser: User | null) => {
          if (currentUser) {
            authDispatch({
              type: "SET_AUTHENTICATION",
              payload: {
                isAuthenticated: true,
                uid: currentUser.uid,
              },
            });
          } else {
            authDispatch({
              type: "SET_AUTHENTICATION",
              payload: {
                isAuthenticated: false,
                uid: "",
              },
            });
          }
        },
        [authDispatch]
      );

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            handleAuthStateChange(currentUser);
        });
    }, [handleAuthStateChange]);

    const signUp = async (userInput: LogInUserInputTypes & UserDetailTypes, from: {
        pathname: string
    }) => {
        const {
            email,
            password,
            firstName,
            lastName
        } = userInput;
        try {
            authDispatch({
                type: "INITIALIZE"
            });

            const {
                user
            } = await signupServices(email, password);

            await createUserInfo(user, {
                firstName,
                lastName
            });

            navigate(from, {
                replace: true
            });
        } catch (err) {
            if (getErrorMessage(err) === "Firebase: Error (auth/email-already-in-use).") {
                authDispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: "Email is already registered. Try to login",
                    },
                });
            } else {
                authDispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: "Something went wrong. Try again after some time.",
                    },
                });
            }
        }
    };

    const login = async (userInput: LogInUserInputTypes, from: {
        pathname: string
    }) => {
        const {
            email,
            password
        } = userInput;
        try {
            authDispatch({
                type: "INITIALIZE"
            });
            await loginServices(email, password);

            navigate(from, {
                replace: true
            });
        } catch (err) {
            if (getErrorMessage(err) === "Firebase: Error (auth/wrong-password).") {
                authDispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: "Entered email and password credentials doesn't match. Please try again.",
                    },
                });
            } else if (getErrorMessage(err) === "Firebase: Error (auth/user-not-found).") {
                authDispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: "User not found",
                    },
                });
            } else {
                authDispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: "Something went wrong. Try again after some time.",
                    },
                });
            }
        }
    };

    const logout = () => {
        logoutServices();
        navigate("/");
    };

    return {
        signUp,
        logout,
        login,
        authState
    };
};

export {
    useAuth
};