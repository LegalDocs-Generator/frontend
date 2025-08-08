import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex items-center justify-center px-6 bg-gray-50 text-center py-24 sm:py-36 ">
      <div className="max-w-3xl">
        <p className="text-2xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Create Your Documents Effortlessly
        </p>
        <p className="text-sm md:text-xl text-[#2e3a59] mb-8">
          LegalDocs is your smart legal assistant — designed for advocates, professionals, and everyday users to generate accurate legal documents such as affidavits, petitions, and agreements with just a few clicks. Save time, reduce errors, and stay compliant with the law.
        </p>
        <Link
          to="/form97"
          className="button save_button"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;

