import React, { useState } from "react";
import axios from "axios";
import img from "/images/form98.png";
import DynamicInputSection from "../../utils/DynamicInputSection";
const Form98 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    deceasedName: "",
    deceasedAddress: "",
    deceasedOccupation: "",
    petitionerName: "",

    // Movable Assets
    movableAssets: {
      cashInHouse: "",
      householdGoods: "",
      wearingApparel: "",
      books: "",
      plates: "",
      jewels: "",
      furniture: "",
    },

    // Dynamic Lists
    bankAccounts: [{ bankName: "", accountNumber: "", value: "" }],

    fixedDeposits: [{ bankName: "", receiptDetails: "", value: "" }],

    immovableProperty: [{ description: "", value: "" }],

    debenture: [{ description: "", value: "" }],

    mutualFunds: [
      {
        folio: "",
        schemeName: "",
        currentUnits: "",
        currentNav: "",
        currentValue: "",
      },
    ],

    mutualFundsMissedDividends: [
      {
        folio: "",
        UnclaimedSchemeName: "",
        UnclaimedAmount: "",
      },
    ],

    royalties: [
      {
        bookName: "",
        earnedIncome: "",
      },
    ],

    otherAssets: {
      adaniAccountNumber: "",
      adaniSecurityDeposit: "",
      mahanagarGPBearingBPNo: "",
      mahanagarBearingCANo: "",
      mahanagarSecurityDeposit: "",
      mahanagarGPBPNo: "",
      mahanagarCANo: "",
      simCardNumber: "",
    },

    deductedLiabilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleBankAccountChange = (index, field, value) => {
  //   const updatedAccounts = [...formData.bankAccounts];
  //   updatedAccounts[index][field] = value;
  //   setFormData({ ...formData, bankAccounts: updatedAccounts });
  // };

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
    <div className="border m-4 md:m-10 rounded-2xl p-4 md:p-10 bg-white w-full max-w-[900px] mx-auto">
      <div className="flex gap-2.5 justify-center  !items-center">
        <img src={img} alt="image" className="w-12 h-12 " />
        <p className="text-center text-3xl mt-2 mb-2 font-semibold w-full md:w-[60%]">
          Schedule of property of the deceased
        </p>
      </div>

      <p className="text-center text-3xl  font-semibold ">Form 98</p>
      <form onSubmit={handleSubmit} className="p-0.5 md:p-12 ">
        <div className=" flex flex-col gap-3">
          {/* basic details */}
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <p className="mb-0 text-xl md:text-2xl font-semibold">
              Basic Details
            </p>
            <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
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

            <div className="flex flex-col gap-4 md:flex-row  justify-between w-full">
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
          {/* details of movable properties */}
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <p className="mb-0 text-xl md:text-2xl  font-semibold">
              Details of Movable Properties
            </p>

            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
              <div className="flex flex-col w-full md:w-[30%]">
                <label className="mb-1 font-medium">
                  Amount of Plates <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="plates"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full md:w-[30%]">
                <label className="mb-1 font-medium">
                  Amount of Jewel <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="jewels"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full md:w-[30%]">
                <label className="mb-1 font-medium">
                  Amount of Books <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="books"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row  justify-between w-full">
              <div className="flex flex-col w-full md:w-[30%]">
                <label className="mb-1 font-medium">
                  Amount of Furniture <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="furniture"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full md:w-[30%]">
                <label className="mb-1 font-medium">
                  Amount Wearing apparel <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="wearingApparel"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full md:w-[30%]">
                <label className="mb-1 font-medium">
                  Amount of Household Goods{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="householdGoods"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col  w-full md:w-[30%]">
              <label className="mb-1 font-medium">
                Cash in house <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="cashInHouse"
                className="input"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <hr />

          {/* bank account details */}
          <DynamicInputSection
            title="Bank Accounts"
            field="bankAccounts"
            formData={formData}
            setFormData={setFormData}
            schema={{ bankName: "", accountNumber: "", value: "" }}
            labels={{
              bankName: "Bank Name",
              accountNumber: "Account Number",
              value: "Current Value",
            }}
            fieldWidths={{
              bankName: "100% md:30%",
              accountNumber: "100% md:30%",
              value: "100% md:30%",
            }}
          />
          <hr />

          {/* fixed deposite Details */}

          <DynamicInputSection
            title="Fixed Deposits"
            field="fixedDeposits"
            formData={formData}
            setFormData={setFormData}
            schema={{ bankName: "", receiptDetails: "", value: "" }}
            labels={{
              bankName: "Bank Name",
              receiptDetails: "Receipt Details",
              value: "Deposit Value",
            }}
            fieldWidths={{
              bankName: "100% md:30%",
              receiptDetails: "100% md:30%",
              value: "3100% md:30%",
            }}
          />
          <hr />

          {/* details of immovable properties */}
          <DynamicInputSection
            title="Details of Immovable property"
            field="immovableProperty"
            formData={formData}
            setFormData={setFormData}
            schema={{ description: "", value: "" }}
            labels={{
              description: "Description",
              value: "Assessed  Value",
            }}
            fieldWidths={{
              description: "100% md:45%",
              value: "100% md:45%",
            }}
          />
          <hr />
          {/* Details of Debenture/Bond */}
          <DynamicInputSection
            title="Details of Debenture/Bond"
            field="debenture"
            formData={formData}
            setFormData={setFormData}
            schema={{ description: "", value: "" }}
            labels={{
              description: "Description",
              value: "Current  Value",
            }}
            fieldWidths={{
              description: "100% md:45%",
              value: "100% md:45%",
            }}
          />
          <hr />

          {/* details of Mutual Funds */}
          <DynamicInputSection
            title="Mutual Funds"
            field="mutualFunds"
            formData={formData}
            setFormData={setFormData}
            schema={{
              folio: "",
              schemeName: "",
              currentUnits: "",
              currentNav: "",
              currentValue: "",
            }}
            labels={{
              folio: "Folio",
              schemeName: "Scheme Name",
              currentUnits: "Current Units",
              currentNav: "Current NAV (Rs)",
              currentValue: "Current Value (Rs)",
            }}
            fieldWidths={{
              folio: "100% md:30%",
              schemeName: "100% md:30%",
              currentUnits: "100% md:30%",
              currentNav: "100% md:30%",
              currentValue: "100% md:30%",
            }}
          />
          <hr />
          {/* details of Mutual Fund Missed Dividends */}
          <DynamicInputSection
            title="Mutual Fund Missed Dividends"
            field="mutualFundsMissedDividends"
            formData={formData}
            setFormData={setFormData}
            schema={{
              folio: "",
              UnclaimedSchemeName: "",
              UnclaimedAmount: "",
            }}
            labels={{
              folio: "Folio",
              UnclaimedSchemeName: "Unclaimed Scheme Name",
              UnclaimedAmount: "Unclaimed Amount",
            }}
            fieldWidths={{
              folio: "100% md:30%",
              UnclaimedSchemeName: "100% md:30%",
              UnclaimedAmount: "100% md:30%",
            }}
          />
          <hr />

          {/* details of Royalties */}
          <DynamicInputSection
            title="Royalties/Fees from Sale of Books"
            field="royalties"
            formData={formData}
            setFormData={setFormData}
            schema={{
              bookName: "",
              earnedIncome: "",
            }}
            labels={{
              bookName: "Book Name",
              earnedIncome: "Earned Income",
            }}
            fieldWidths={{
              bookName: "100% md:45%",
              earnedIncome: "100% md:45%",
            }}
          />
          <hr />

          {/* details of Other Assets */}
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <p className="mb-0 text-xl md:text-2xl font-semibold">
              Details of Movable Properties
            </p>

            <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
              <div className="flex flex-col w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Adani Electricity Account Number
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="adaniAccountNumber"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Adani Security Deposit <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="adaniSecurityDeposit"
                  className="input"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
              <div className="flex flex-col  w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Mahanagar Gas connection bearing BP No
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="mahanagarGPBearingBPNo"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Mahanagar Gas connection bearing CA No{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="mahanagarBearingCANo"
                  className="input"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row justify-between w-full md:w-full">
              <div className="flex flex-col w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Security Deposit for Mahanagar Connection{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="mahanagarSecurityDeposit"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Mahanagar Gas connection BP No{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="mahanagarGPBPNo"
                  className="input"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
              <div className="flex flex-col  w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Mahanagar Gas connection CA No{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="mahanagarCANo"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  w-full md:w-[47%]">
                <label className="mb-1 font-medium">
                  Sim Card Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="simCardNumber"
                  className="input"
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
            <button
              type="submit"
              className="button save_button w-full md:w-auto"
            >
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
        </div>
      </form>
    </div>
  );
};

export default Form98;
