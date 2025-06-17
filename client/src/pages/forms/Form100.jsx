import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form100 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    deceasedName: "",
    deceasedAddress: "",
    deceasedOccupation: "",
    petitionerName: "",
    property: "",
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
   <div className="border m-4 md:m-10 rounded-2xl p-4 md:!p-10 bg-white text-sm md:text-base">
  <form onSubmit={handleSubmit} className="p-2 md:p-12 space-y-6">
    <p className=" text-xl md:text-3xl mt-2 mb-2 font-semibold text-center">
      Schedule of trust property held by the deceased
    </p>

    <p className="text-center mb-1">(Rules 374, 375 and 376)</p>
    <p className="text-center text-md md:text-xl font-semibold mb-1">
      Form 100
    </p>
    <p className="text-center text-md md:text-xl font-semibold">
      IN THE HIGH COURT OF JUDICATURE AT BOMBAY
    </p>
    <p className="text-center text-md md:text-xl font-semibold">
      TESTAMENTARY AND INTESTATE JURISDICTION PETITION No .............. of 2020
    </p>

    {/* Basic Details Section */}
    <div className="space-y-4 mt-12">
      <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
        Petition for probate of a will of
        <input
          type="text"
          name="deceasedName"
          placeholder="Name of Deceased*"
          className="input min-w-[200px] w-full md:w-auto"
          required
          onChange={handleChange}
        />
        resident
        <input
          type="text"
          name="deceasedAddress"
          placeholder="Residence of Deceased*"
          className="input min-w-[200px] w-full md:w-auto"
          required
          onChange={handleChange}
        />
        having occupation of
        <input
          type="text"
          name="deceasedOccupation"
          placeholder="Occupation of Deceased*"
          className="input min-w-[200px] w-full md:w-auto"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
        Deceased.
        <input
          type="text"
          name="petitionerName"
          placeholder="Executor of Will*"
          className="input min-w-[200px] w-full md:w-auto"
          required
          onChange={handleChange}
        />
        Petitioner.
      </div>
    </div>

    {/* Title Section */}
    <div className="gap-3 text-sm md:text-base !mt-12">
      <p className="text-center text-md md:text-xl font-semibold mb-0">
        SCHEDULE No. III
      </p>
      <p className="text-center text-md md:text-lg">
        Schedule of Trust Property
      </p>
    </div>

    <hr />

    {/* Property Details Section */}
    <div className="gap-3 text-sm md:text-base !mt-12">
      <p className="text-md md:text-lg mb-0">
        Property held in trust for another and not beneficially or with general
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
        <p className="text-md md:text-lg">
          Power to confer a beneficial interest
        </p>
        <input
          type="number"
          name="property"
          className="input min-w-[200px] w-full md:w-[250px]"
          placeholder="Beneficial interest*"
          required
          onChange={handleChange}
        />
      </div>
    </div>

    <hr />

    {/* Petitioner Section */}
    <div className="flex flex-wrap items-center gap-3 mt-6">
      <p className="text-md md:text-lg">Petitioner:</p>
      <input
        type="text"
        name="petitionerName"
        className="input min-w-[200px] w-full md:w-[300px]"
        placeholder="Petitioner Name*"
        required
        onChange={handleChange}
      />
    </div>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-16 gap-4">
      <Link to='/form99' type="submit" className="button previous w-full md:w-auto ">
        Previous
      </Link>

      <div className="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
        <button type="submit" className="button save_button w-full md:w-auto">
          Save Changes
        </button>
        <Link to='/form101' type="submit" className="button save_next w-full md:w-auto ">
          Save and Next
        </Link>
        <button type="submit" className="button generate_pdf w-full md:w-auto">
          Generate PDF
        </button>
      </div>
    </div>
  </form>
</div>

  );
};

export default Form100;
