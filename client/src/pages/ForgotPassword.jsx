import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
              className="w-full input px-4 py-2 rounded-md"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full button save_button text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-600 hover:underline ml-1">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
