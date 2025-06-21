import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../store/authStore';

const AuthPage = () => {
    const { error, setError, isProcessing, handleSignupUser, handleGoogle, handleLoginUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError(null);
        setFormData({
            fullName: '',
            email: '',
            password: ''
        });
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogin) {
            console.log("Signing up for user : ", formData);
            handleSignupUser(formData, toggleForm);
        }
        else {
            console.log('Logging in for user : ', formData);
            handleLoginUser(formData);
        }
    }

    return (
        <div className=" mt-4 text-sm md:text-base mb-4 flex items-center min-h-[500px] justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                    {isLogin ? 'Sign In to LegalDocs' : 'Create an Account'}
                </h2>
                {error && <div className=' text-center text-danger'>{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                className="w-full input px-4 py-2 "
                                placeholder="Your Name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full input px-4 py-2 "
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Phone
                            </label>
                            <input
                                type="number"
                                className="w-full input px-4 py-2 rounded-md"
                                placeholder="Contact Number"
                            />
                        </div>
                    )} */}

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full input px-4 py-2 rounded-md"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full button save_button  transition"
                        disabled={isProcessing}
                    >
                        {isProcessing ? 'Processing...' : isLogin ? 'Sign In' : 'Sign Up'}
                    </button>

                    {/* OR separator */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Continue with Google */}
                    <button
                        type="button"
                        onClick={handleGoogle}
                        className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="mr-2 text-xl" />
                        Continue with Google
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-500 text-center">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        onClick={toggleForm}
                        className="text-blue-600 hover:!underline ml-1"
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </p>

                {isLogin && (
                    <div className="mt-3 text-center">
                        <Link to="/forgot-password" className="text-sm text-decoration-none  hover:!underline">
                            Forgot password?
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
