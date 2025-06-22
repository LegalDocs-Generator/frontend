import { useEffect } from 'react';

const Toast = ({ show, message = 'Form Submitted Successfully', duration = 3000, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-6 right-6 max-w-xs w-full bg-green-500 text-white px-4 py-3 rounded shadow-lg flex items-center animate-fade-in-out"
      role="alert"
    >
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="flex-1">{message}</span>
      <button onClick={onClose} className="ml-2 focus:outline-none">
        ✕
      </button>
    </div>
  );
};

export default Toast;
