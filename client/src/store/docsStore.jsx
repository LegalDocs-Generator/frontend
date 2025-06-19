import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const appURL = import.meta.env.VITE_APP_URL;

export const DocContext = createContext({
    user: null,
    error: null,
    isProcessing: false,
    setUser: () => { },
    handleSignupUser: () => { },
    handleLoginUser: () => { },
    handleLogoutUser: () => { },
    handleUpdateProfile: () => { },
    handleGoogle: () => { },
    setError: () => { },
});

const DocProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const navigate = useNavigate();

    //Handling Request for Signup
    const handleSignupUser = async (formData, toggleForm) => {
        setIsProcessing(true);
        try {
            const res = await axios.post(`${appURL}/api/auth/signup`, formData);

            if (res.data) {
                console.log(res.data);
                setError(null);
                toggleForm();
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    //Handling Request for Login
    const handleLoginUser = async (formData) => {
        setIsProcessing(true);
        try {
            const res = await axios.post(`${appURL}/api/auth/login`, formData, { withCredentials: true });

            if (res.data) {
                console.log(res.data);
                setUser(res.data.user);

                localStorage.setItem('user', JSON.stringify(res.data.user))
                setError(null);

                navigate('/');
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    //Handling Request for Logout
    const handleLogoutUser = async (setMenuOpen) => {
        setIsProcessing(true);
        try {
            const res = await axios.post(`${appURL}/api/auth/logout`, {}, { withCredentials: true });

            if (res.data) {
                console.log(res.data);
                localStorage.removeItem('user');
                if (setMenuOpen) setMenuOpen(false);
                setUser(null);
                setError(null);
                navigate('/');
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    //Handling Request for Profile Update
    const handleUpdateProfile = async (formData, setIsEditing) => {
        setIsProcessing(true);
        try {
            const res = await axios.put(`${appURL}/api/user/update-profile`, formData,
                {
                    withCredentials:true
                });

            if (res.data) {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                setError(null);
                setIsEditing(false);
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    const handleGoogle = () => {
        console.log("Continue with Google");
    };

    return (
        <DocContext.Provider
            value={{
                user,
                setUser,
                error,
                isProcessing,
                handleSignupUser,
                handleGoogle,
                handleLoginUser,
                handleLogoutUser,
                handleUpdateProfile,
                setError,
            }}
        >
            {children}
        </DocContext.Provider>
    );
};

export default DocProvider;
