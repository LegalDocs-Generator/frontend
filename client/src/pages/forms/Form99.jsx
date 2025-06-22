import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../store/authStore";
import { DocContext } from "../../store/docsStore";

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

  const { user, navigate } = useContext(AuthContext);
  const {
    handleFetchForm99,
    handleSubmitForm99,
    handleGeneratePdfForm99,
    isSavingChanges,
    isSavingNext,
    isGeneratingPdf,
  } = useContext(DocContext);

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      handleFetchForm99(setFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    handleSubmitForm99(formData, false);
  };

  const handleSaveNext = async (e) => {
    e.preventDefault();
    handleSubmitForm99(formData, true);
  };

  return (
    <div className="border m-4 md:m-10 rounded-2xl p-4 md:!p-10 bg-white text-sm md:text-base">
      <p className=" text-xl md:text-3xl mt-2 mb-2 font-semibold text-center">
        Schedule of debts of the deceased etc.
      </p>

      <p className="text-center mb-1">(Rules 374, 37S and 376)</p>
      <p className="text-center text-md md:text-xl font-semibold mb-1">
        Form 99
      </p>
      <p className="text-center text-md md:text-xl font-semibold">
        IN THE HIGH COURT OF JUDICATURE AT BOMBAY
      </p>
      <p className="text-center text-md md:text-xl font-semibold">
        TESTAMENTARY AND INTESTATE JURISDICTION PETITION No {formData.petitionNumber||'..............'} of
        2020
      </p>
      <form onSubmit={handleSaveChanges} className="p-2 md:p-12 space-y-6">
        {/* Petition Number Field */}
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <label className="mt-1 mr-2 font-medium font-semibold">
            Petition Number:
          </label>
          <input
            type="text"
            name="petitionNumber"
            placeholder="Enter Petition No."
            className="input w-[100px]"
            onChange={handleChange}
            value={formData.petitionNumber || ""}
          />
        </div>
        {/* Basic Details Section */}
        <div className="space-y-4 mt-12">
          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Petition for probate of a will of
            <input
              type="text"
              name="deceasedName"
              value={formData.deceasedName}
              placeholder="Name of Deceased"
              className="input  w-full md:w-auto"
              onChange={handleChange}
            />
            resident
            <input
              type="text"
              name="deceasedAddress"
              value={formData.deceasedAddress}
              placeholder="Residence of Deceased"
              className="input  w-full md:w-auto"
              onChange={handleChange}
            />
            having occupation of
            <input
              type="text"
              name="deceasedOccupation"
              value={formData.deceasedOccupation}
              placeholder="Occupation of Deceased"
              className="input  w-full md:w-auto"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Deceased.
            <input
              type="text"
              name="petitionerName"
              value={formData.petitionerName}
              placeholder="Executor of Will"
              className="input  w-full md:w-auto"
              onChange={handleChange}
            />
            Petitioner.
          </div>
        </div>

        {/* Title Section */}
        <div className="gap-3 text-sm md:text-base !mt-12">
          <p className="text-center text-md md:text-xl font-semibold mb-0">
            SCHEDULE No. II
          </p>
          <p className="text-center text-md md:text-lg">
            Schedule of Debts, etc
          </p>
        </div>

        <hr />
        {/* Amount Details Section */}
        <div className="gap-3 text-sm md:text-base !mt-2">
          <p className="text-md md:text-lg mb-0">
            Amount of debts due and owing from the deceased, payable by law out
            of estate
          </p>
          <div className="flex flex-wrap items-center justify-between gap-0 md:!mt-2 mt-4">
            <p className="text-md md:text-lg">Amount of Funeral expenses</p>
            <input
              type="number"
              name="funeralExpenses"
              value={formData.funeralExpenses}
              className="input  w-full md:w-[250px]"
              placeholder="Funeral expenses"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-0 md:!mt-0 mt-4">
            <p className="text-md md:text-lg">
              Amount of mortgage encumbrances
            </p>
            <input
              type="number"
              name="mortgageEncumbrances"
              value={formData.mortgageEncumbrances}
              className="input w-full md:w-[250px]"
              placeholder="Mortgage Encumbrances"
              onChange={handleChange}
            />
          </div>
        </div>
        <hr />
        {/* Petitioner Section */}
        <div className="flex flex-wrap items-center gap-2 ">
          <p className="text-md md:text-lg">Petitioner:</p>
          <input
            type="text"
            name="petitionerName"
            value={formData.petitionerName}
            className="input  w-full md:w-[200px]"
            placeholder="Petitioner Name"
            onChange={handleChange}
          />
        </div>

        <hr />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-16 gap-4">
          <Link
            to="/form98"
            type="submit"
            className="button previous w-full md:w-auto "
          >
            Previous
          </Link>

          <div className="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
            <button
              type="button"
              className="button save_button w-full md:w-auto"
              disabled={isSavingChanges}
              onClick={handleSaveChanges}
            >
              {isSavingChanges ? "Saving..." : "Save Changes"}
            </button>
            <Link
              to="/form99"
              className="button save_next w-full md:w-auto"
              disabled={isSavingNext}
              onClick={handleSaveNext}
            >
              {isSavingNext ? "Saving..." : "Save and Next"}
            </Link>
            <button
              type="button"
              className="button generate_pdf w-full md:w-auto"
              disabled={isGeneratingPdf}
              onClick={handleGeneratePdfForm99}
            >
              {isGeneratingPdf ? "Sending email..." : "Generate PDF"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form99;
