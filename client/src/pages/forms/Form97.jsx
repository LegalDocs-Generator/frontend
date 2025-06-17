import React, { useState } from "react";
import axios from "axios";
import DynamicInputSection from "../../utils/DynamicInputSection";
const Form97 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    petitionYear: "",

    // Deceased details
    deceasedFullName: "",
    deceasedNationality: "",
    deceasedAddress: "",
    deceasedsect: "",
    deceasedMaritalStatus: "",
    deceasedOccupation: "",
    deceasedRescidenceAtTimeOfDeath: "",
    deceasedDeathDate: "",
    deceasedDeathMonth: "",
    deceasedDeathYear: "",

    exhibitNumber1: "",
    exhibitNumber2: "",
    placeOfAbode: "",

    // Petitioner details
    petitionerFullName: "",
    petitionerage: "",
    petitionerNationality: "",
    petitionerDomicile: "",
    petitionerFullAddress: "",
    petitionerOccupation: "",
    executor: "",

    exhibitNumber3: "",
    exhibitNumber4: "",
    placeOfExecutionOfWill: "",
    ExecutionDate: "",
    ExecutionMonth: "",
    ExecutionYear: "",

    capacity: "",
    exhibitNumber5: "",
    exhibitNumber6: "",
    exhibitNumber7: "",
    schduleAmount: "",
    lawApplicableToTheDeceased: "",

    // People array (can initialize with one blank person if needed)
    person: [
      {
        fullName: "",
        address: "",
        age: "",
        relationshipWithDeceased: "",
      },
    ],

    swornPlace: "",
    swornDate: "",
    swornMonth: "",
    swornYear: "",
    statedPara: "",
    remainingPara: "",
  });

  const handledeceasedDeathDateChange = (e) => {
    const value = e.target.value; // e.g., "2025-06-16"
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      deceasedDeathYear: year,
      deceasedDeathMonth: month,
      deceasedDeathDate: day,
    }));
  };
  const handleExecutionDateChange = (e) => {
    const value = e.target.value; // e.g., "2025-06-16"
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      ExecutionDate: year,
      ExecutionMonth: month,
      ExecutionYear: day,
    }));
  };

  const handleswornDateChange = (e) => {
    const value = e.target.value; // e.g., "2025-06-16"
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      swornDate: year,
      swornMonth: month,
      swornYear: day,
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
      <p className="text-center text-xl md:text-3xl  font-semibold ">Form 97</p>
      <form onSubmit={handleSubmit} className="p-2 md:p-12 space-y-6">
        {/* Deceased Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl font-semibold">Deceased details</p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedFullName"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Nationality of Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedNationality"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Address of Deceased <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedAddress"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Religion of Deceased<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedReligion"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Section of Deceased (In case of mulsim)
              </label>
              <input
                type="text"
                name="deceasedsect"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Marriage Status of Deceased
                <span className="text-red-600">*</span>
              </label>
              <select
                name="deceasedMaritalStatus"
                className="input"
                required
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Separated">Separated</option>
              </select>
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
                Deceased Rescidence At Time Of Death{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="deceasedRescidenceAtTimeOfDeath"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Deceased Death Date <span className="text-red-600">*</span>
              </label>
              <input
                type="Date"
                name="deceasedDeathDate"
                className="input"
                required
                onChange={handledeceasedDeathDateChange}
              />
            </div>
          </div>
        </div>
        <hr />
         {/* Petitoner Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl font-semibold">Petitoner details</p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Name of Petitoner <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="petitionerFullName"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Age of Petitoner <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="petitionerage"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Nationality of Petitoner <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="petitionerNationality"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Domilcile of Petitoner<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="petitionerDomicile"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Full Address of Petitioner<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="petitionerFullAddress"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                  Executor

                <span className="text-red-600">*</span>
              </label>
              <select
                name="executor"
                className="input"
                required
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                    Select Option
                </option>
                <option value="soleExecutor">Sole Executor</option>
                <option value="oneOfTheExecutor">One Of The Executor</option>
                <option value="soleSurvivingExecutors">Sole Surviving Executors</option>
                <option value="allExecutor">All Executor</option>
                
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Occupation of Petitoner <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="petitionerOccupation"
                className="input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                Place Of Execution Of Will{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="placeOfExecutionOfWill"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[47%]">
              <label className="mb-1 font-medium">
                 Date of Execution <span className="text-red-600">*</span>
              </label>
              <input
                type="Date"
                name="ExecutionDate"
                className="input"
                required
                onChange={handleExecutionDateChange}
              />
            </div>
          </div>
        </div>
        <hr />

        {/* Heirs and Addresses */}
        <DynamicInputSection
          title="Heirs and Addresses"
          field="person"
          formData={formData}
          setFormData={setFormData}
          schema={{
            fullName: "",
            address: "",
            age: "",
            relationshipWithDeceased: "",
          }}
          labels={{
            fullName: "Name",
            address: "Address",
            age: "Age",
            relationshipWithDeceased: "Relationship with the Deceased",
          }}
          fieldWidths={{
            fullName: "100% md:50%",
            address: "100% md:50%",
            age: "100% md:50%",
            relationshipWithDeceased: "100% md:50%",
          }}
        />

        <hr />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-3 md:gap-4 mt-4">
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

export default Form97;
