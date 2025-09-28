import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const appURL = import.meta.env.VITE_API_URL;

export const AuthContext = createContext({
    user: null,
    error: null,
    isProcessing: false,
    navigate:()=>{},
    setUser: () => { },
    handleSignupUser: () => { },
    handleLoginUser: () => { },
    handleLogoutUser: () => { },
    handleForgotPass: () => { },
    handleResetPass: () => { },
    handleUpdateProfile: () => { },
    handleGoogle: () => { },
    setError: () => { },
});

const AuthProvider = ({ children }) => {
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
                toast.success("User registered successfully");
                setError(null);
                toggleForm();
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            toast.error(error.response.data.message || error.response.data.msg || error.message)
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
                toast.success("User logged in successfully");

                navigate('/');
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            toast.error(error.response.data.message || error.response.data.msg || error.message)
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
                toast.success("User logged out successfully");
                navigate('/');
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            toast.error(error.response.data.message || error.response.data.msg || error.message)
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
                toast.success("User profile updated successfully");
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            toast.error(error.response.data.message || error.response.data.msg || error.message)
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    //Handling Request for Forgot Password
    const handleForgotPass = async (email) => {
        setIsProcessing(true);
        try {
            const res = await axios.post(`${appURL}/api/auth/forgot-password`, {email});

            if (res.data) {
                console.log(res.data);
                toast.success("Reset link sent to email successfully");
                navigate('/')
                setError(null);
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            toast.error(error.response.data.message || error.response.data.msg || error.message)
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    //Handling Request for Reset Password
    const handleResetPass = async (resetToken, newPassword) => {
        setIsProcessing(true);
        try {
            const res = await axios.post(`${appURL}/api/auth/reset-password/${resetToken}`, {newPassword});

            if (res.data) {
                console.log(res.data);
                navigate('/login')
                setError(null);
                toast.success("Password changed successfully");
            }
        } catch (error) {
            console.error("Some error occured : ", error);
            toast.error(error.response.data.message || error.response.data.msg || error.message)
            setError(
                error.response.data.message || error.response.data.msg || error.message
            );
        } finally {
            setIsProcessing(false);
        }
    };

    //Handling Request for Google Auth
    const handleGoogle = () => {
        console.log("Continue with Google");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                error,
                isProcessing,
                navigate,
                handleSignupUser,
                handleGoogle,
                handleLoginUser,
                handleLogoutUser,
                handleUpdateProfile,
                handleForgotPass,
                handleResetPass,
                setError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
