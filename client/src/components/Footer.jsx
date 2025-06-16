import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left section - Logo & Copyright */}
        <div className="mb-4 md:mb-0">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-tight text-decoration-none"
            style={{ color: "gray" }}
          >
            LegalDocs
          </Link>
          <p className="mt-1 text-sm" style={{ color: "gray" }}>
            © {new Date().getFullYear()} LegalDocs. All rights reserved.
          </p>
        </div>

        {/* Right section - Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link
            to="/privacy"
            className="text-sm font-medium text-decoration-none"
            style={{ color: "gray" }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm font-medium text-decoration-none"
            style={{ color: "gray" }}
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-decoration-none"
            style={{ color: "gray" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
