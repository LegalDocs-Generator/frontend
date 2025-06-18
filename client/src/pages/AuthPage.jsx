import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    const handleGoogle = () => {
      // TODO: invoke your Google OAuth flow here
      console.log('Continue with Google');
    };

    return (
        <div className="mt-4 mb-4 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                    {isLogin ? 'Sign In to LegalDocs' : 'Create an Account'}
                </h2>

                <form className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full input px-4 py-2 rounded-md"
                                placeholder="Your Name"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full input px-4 py-2 rounded-md"
                            placeholder="you@example.com"
                        />
                    </div>

                    {!isLogin && (
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
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full input px-4 py-2 rounded-md"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full button save_button text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
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
                        className="text-blue-600 hover:underline ml-1"
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </p>

                {isLogin && (
                    <div className="mt-3 text-center">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-decoration-none text-gray-500 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
