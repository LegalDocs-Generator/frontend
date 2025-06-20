import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DocContext } from '../store/docsStore';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const {handleResetPass, isProcessing, error, setError} = useContext(DocContext);

  const params = useParams();
  const resetToken = new window.URLSearchParams(params).get('resetToken');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Password do not match');
      return;
    }

    handleResetPass(resetToken, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Reset Your Password
        </h2>
        {error && <div className=' text-center text-danger'>{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full input px-4 py-2 "
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full input px-4 py-2 "
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full button save_button  py-2  "
            disabled={isProcessing}
          >
            {isProcessing?'Processing...':'Reset Password'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Back to{' '}
          <Link to="/login" className="!no-underline hover:!underline ml-1">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;