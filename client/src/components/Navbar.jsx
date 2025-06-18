import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl text-decoration-none font-semibold tracking-tight navbar-element"
        >
          LegalDocs
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-decoration-none font-medium transition-colors duration-300 navbar-element"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="button ml-4 save_button text-decoration-none text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none  navbar-element"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200 rounded-b-lg shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block font-medium  text-decoration-none hover:text-gray-800 transition-colors navbar-element"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="button save_button inline-block mt-2 text-decoration-none text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
