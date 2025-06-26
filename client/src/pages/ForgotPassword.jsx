import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../store/authStore';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const {handleForgotPass, isProcessing, error} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleForgotPass(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Enter your email address
            </label>
            <input
              type="email"
              className="w-full input px-4 py-2 "
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full button save_button  py-2  "
            disabled={isProcessing}
          >
            {isProcessing?'Sending...':'Send Reset Link'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Remember your password?{' '}
          <Link to="/login" className="!no-underline hover:!underline ml-1">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
