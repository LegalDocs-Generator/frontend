import React, { useState } from "react";
import axios from "axios";
import img from "/images/form101.png";

const Form101 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    deceasedName: "",
    deceasedName1: "",
    deceasedName2: "",
    deceasedName3: "",
    deceasedName4: "",
    deceasedAddress: "",
    deceasedOccupation: "",
    petitionerName: "",
    relationWithDeeceased: "",
    swearingLocation: "",
    swornDay: "",
    swornMonth: "",
    swornYear: "",
    advocateFor: "",
  });
  const handleDateChange = (e) => {
    const value = e.target.value; // e.g., "2025-06-16"
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      swornYear: year,
      swornMonth: month,
      swornDay: day,
    }));
  };

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
        <p className="text-center text-xl md:text-3xl mt-2 mb-2 font-semibold  ">
          Executor’s oath
        </p>
      </div>
      <p className="text-center text-xl md:text-3xl  font-semibold ">
        Form 101
      </p>
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

        {/*  Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl  font-semibold">Details</p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Relation with Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="relationWithDeeceased"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Deceased 1 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedName1"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Deceased 3<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedName2"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Deceased 3 <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedName3"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Deceased 4<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedName4"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Swearing Location <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="swearingLocation"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Date of Swearing<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="swornDate"
                className="input"
                required
                onChange={handleDateChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Advocate for <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="advocateFor"
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

export default Form101;
