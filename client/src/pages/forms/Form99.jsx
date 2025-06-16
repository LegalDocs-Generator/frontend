import React, { useState } from "react";
import axios from "axios";
import img from "/images/form99.png";

const Form99 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    deceasedName: "",
    deceasedAddress: "",
    deceasedOccupation: "",
    petitionerName: "",
    funeralExpenses: "",
    mortgageEncumbrances: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   await axios.post(
      //     `${import.meta.env.VITE_BASE_URL}/form98/submit`,
      //     formData
      //   );
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Form submission failed.");
    }
  };
  return (
    <div className="border m-4 md:m-10 rounded-2xl p-4 md:!p-10 bg-white w-full  max-w-[900px] mx-auto text-sm md:text-base">
      <div className="flex gap-2.5 justify-center  !items-center">
        <img src={img} alt="image" className="w-12 h-12 " />
        <p className="text-center text-xl md:text-3xl mt-2 mb-2 font-semibold w-full md:w-[60%]">
          Schedule of debts of the deceased etc.
        </p>
      </div>
      <p className="text-center text-xl md:text-3xl  font-semibold ">Form 99</p>
      <form onSubmit={handleSubmit} className="p-2 md:p-12 space-y-6">
        {/* Basic Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl font-semibold">Basic Details</p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedName"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Residence of Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedAddress"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Occupation of Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedOccupation"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Petitioner <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="petitionerName"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr />

        {/* Debt Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl  font-semibold">Amount of Debts Details</p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Funeral expenses <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="funeralExpenses"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Mortgage encumbrances <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="mortgageEncumbrances"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-3 md:gap-4 mt-4">
          <button type="submit" className="button previous w-full md:w-auto">
            Previous
          </button>
          <button type="submit" className="button save_button w-full md:w-auto">
            Save Changes
          </button>
          <button type="submit" className="button save_next w-full md:w-auto">
            Save and Next
          </button>
          <button
            type="submit"
            className="button generate_pdf w-full md:w-auto"
          >
            Generate PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form99;
