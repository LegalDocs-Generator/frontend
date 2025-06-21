import React, { useContext, useEffect, useState } from "react";

import DynamicInputSection from "../../utils/DynamicInputSection";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/authStore";
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

  const {user, navigate} = useContext(AuthContext);

  useEffect(()=>{
      if(!user) navigate('/login');
    },[])

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
      <p className=" text-xl md:text-3xl mt-2 mb-2 font-semibold text-center">
        Schedule of property of the deceased
      </p>

      <p className="text-center mb-1">(see Rule 374, 375 and 376)</p>
      <p className="text-center text-md md:text-xl font-semibold mb-1">
        Form 98
      </p>
      <p className="text-center text-md md:text-xl font-semibold">
        IN THE HIGH COURT OF JUDICATURE AT BOMBAY
      </p>
      <p className="text-center text-md md:text-xl font-semibold">
        TESTAMENTARY AND INTESTATE JURISDICTION PETITION No .............. of
        2020
      </p>
      <form onSubmit={handleSubmit} className="p-2 md:p-12 space-y-6">
        {/* Basic Details Section */}
        <div className="space-y-4 mt-12">
          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Petition for probate of a will of
            <input
              type="text"
              name="deceasedName"
              placeholder="Name of Deceased"
              className="input  w-full md:w-auto"
              onChange={handleChange}
            />
            resident
            <input
              type="text"
              name="deceasedAddress"
              placeholder="Residence of Deceased"
              className="input w-full md:w-auto"
              onChange={handleChange}
            />
            having occupation of
            <input
              type="text"
              name="deceasedOccupation"
              placeholder="Occupation of Deceased"
              className="input w-full md:w-auto"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Deceased.
            <input
              type="text"
              name="petitionerName"
              placeholder="Executor of Will"
              className="input w-full md:w-auto"
              onChange={handleChange}
            />
            Petitioner.
          </div>
        </div>

        {/* Title Section */}
        <div className="gap-3 text-sm md:text-base !mt-12">
          <p className="text-center text-md md:text-xl font-semibold mb-0">
            SCHEDULE No. I
          </p>
          <p className="text-center text-md mb-0 md:text-lg">
            Schedule of Property
          </p>
          <p className="text-center text-md md:text-lg">
            Valuation of the movable and immovable property of the deceased.
          </p>
        </div>

        <hr />
        {/* details of movable properties */}
        <div className="flex flex-col gap-4 text-sm md:text-base">
          <p className="mb-0 text-xl md:text-2xl  font-semibold">
            Details of Cash in the house, household goods, wearing apparel,
            books, plate, jewels
          </p>

          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Furniture</label>
              <input
                type="number"
                name="furniture"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Cash in house</label>
              <input
                type="number"
                name="cashInHouse"
                className="input"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Plates</label>
              <input
                type="number"
                name="plates"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Jewel</label>
              <input
                type="number"
                name="jewels"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Books</label>
              <input
                type="number"
                name="books"
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row   w-full">
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount Wearing apparel</label>
              <input
                type="number"
                name="wearingApparel"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Amount of Household Goods{" "}
              </label>
              <input
                type="number"
                name="householdGoods"
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col  w-full md:w-[30%]"></div>
        </div>
        <hr />

        <div className=" flex flex-col gap-3">
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
              value: "Current Value",
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
              Details of Other Assets:
            </p>

            <p className="mb-0">
              1. Adani Electricity Account Number
              <input
                type="text"
                name="adaniAccountNumber"
                placeholder="Account Number"
                className="input ms-2"
                onChange={handleChange}
              />
            </p>
            <p className="mb-0">
              2. Security Deposit of
              <input
                type="number"
                name="adaniSecurityDeposit"
                placeholder="Security Deposit"
                className="input ms-2 me-2"
                onChange={handleChange}
              />{" "}
              for Adani Electricity Account Number
              <input
                type="text"
                name="adaniAccountNumber"
                placeholder="Account Number"
                className="input ms-2 me-2"
                onChange={handleChange}
              />
            </p>

            <p className="mb-0">
              3. Mahanagar Gas connection bearing BP No. :
              <input
                type="text"
                name="mahanagarGPBearingBPNo"
                placeholder="BP No."
                className="input ms-2 me-2"
                onChange={handleChange}
              />{" "}
              / CA No. :
              <input
                type="text"
                name="mahanagarBearingCANo"
                placeholder="CA No."
                className="input ms-2 me-2"
                onChange={handleChange}
              />
            </p>

            <p className="mb-0">
              4. Security Deposit of Rs:
              <input
                type="number"
                name="mahanagarSecurityDeposit"
                placeholder="Security Deposit"
                className="input w-[200px] ms-2 me-2"
                onChange={handleChange}
              />{" "}
              for Mahanagar Gas connection BP No. :
              <input
                type="text"
                name="mahanagarGPBPNo"
                placeholder="BP No."
                className="input  w-[200px] ms-2 me-2"
                onChange={handleChange}
              />
              / CA No. :{" "}
              <input
                type="text"
                name="mahanagarCANo"
                placeholder="CA No."
                className="input w-[200px] ms-2"
                onChange={handleChange}
              />
            </p>
            <p className="mb-0">
              5. Mahanagar Gas connection bearing BP No. :
              <input
                type="text"
                name="mahanagarGPBearingBPNo"
                placeholder="BP No."
                className="input ms-2 me-2"
                onChange={handleChange}
              />{" "}
              / CA No. :
              <input
                type="text"
                name="mahanagarBearingCANo"
                placeholder="CA No."
                className="input ms-2 me-2"
                onChange={handleChange}
              />
            </p>
            <p className="mb-0">
              6. SIM Card with number:
              <input
                type="text"
                name="simCardNumber"
                placeholder="Card No."
                className="input ms-2 me-2"
                onChange={handleChange}
              />{" "}
            </p>
          </div>
          <hr />
          <p>
            Deduct Amount shown in Schedule No II., not subject to any Duty :-
            <input
              type="number"
              name="deductedLiabilities"
              placeholder="Deduct Amount"
              className="input ms-2 me-2"
              onChange={handleChange}
            />
          </p>
          <hr />
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-16 gap-4">
            <Link
              to="/form97"
              type="submit"
              className="button previous w-full md:w-auto "
            >
              Previous
            </Link>

            <div className="flex flex-col md:flex-row justify-end gap-3 w-full md:w-auto">
              <button
                type="submit"
                className="button save_button w-full md:w-auto"
              >
                Save Changes
              </button>
              <Link
                to="/form99"
                type="submit"
                className="button save_next w-full md:w-auto"
              >
                Save and Next
              </Link>
              <button
                type="submit"
                className="button generate_pdf w-full md:w-auto"
              >
                Generate PDF
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form98;
