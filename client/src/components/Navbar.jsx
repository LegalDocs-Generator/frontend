import { useState, useRef, useEffect, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/authStore";

const Navbar = () => {
  const { user, handleLogoutUser } = useContext(AuthContext)

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, [servicesOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/profile', label: 'Profile' },
    {
      label: "Services",
      dropdown: true,
      children: [
        { to: "/services", label: "Services" },
        { to: "/form97", label: "Forms" },
      ],
    },
  ];


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="md:text-4xl text-2xl font-semibold tracking-tight navbar-element transition-all duration-300 !no-underline"
        >
          LegalDocs
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="font-medium transition-colors navbar-element"
                >
                  {link.label}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => {
                          setServicesOpen(false);
                          setMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm text-black !no-underline"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              link.label !== 'Profile' ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-medium transition-colors navbar-element !no-underline"
                >
                  {link.label}
                </Link>
              ) : (
                user && <Link
                  key={link.to}
                  to={link.to}
                  className="font-medium transition-colors navbar-element !no-underline"
                >
                  {link.label}
                </Link>
              )
            )
          )}

          {!user ? <Link
            to="/login"
            className="button  save_button px-4 py-2  text-sm  "
          >
            Login
          </Link> : <Link
            to=""
            onClick={() => handleLogoutUser(setMenuOpen)}
            className="button  save_button px-4 py-2  text-sm  "
          >
            Logout
          </Link>}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none navbar-element"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200 rounded-b-lg shadow-md">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="block font-medium w-full text-left text-black"
                >
                  {link.label}
                </button>
                {servicesOpen &&
                  link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setMenuOpen(false)}
                      className="block pl-4 text-sm py-1 text-black !no-underline"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block font-medium text-black !no-underline"
              >
                {link.label}
              </Link>
            )
          )}

          {!user ? <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="button save_button inline-block mt-2 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Login
          </Link> : <Link
            to=""
            onClick={() => handleLogoutUser(setMenuOpen)}
            className="button save_button inline-block mt-2 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Logout
          </Link>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
