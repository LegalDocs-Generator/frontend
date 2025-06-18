import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2e3a59]  border-t border-gray-200 shadow-inner p-6 flex flex-col justify-center items-center">
      <Link
        to="/"
        className="text-2xl font-semibold tracking-tight text-decoration-none navbar-element !text-white"
      >
        LegalDocs
      </Link>
      <p className="mt-1 text-sm  navbar-element !text-white">
        © {new Date().getFullYear()} LegalDocs. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
