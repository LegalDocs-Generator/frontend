import React, { useContext, useEffect, useState } from "react";
import DynamicInputSection from "../../utils/DynamicInputSection";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/authStore";
import { DocContext } from "../../store/docsStore";
import Toast from "../../components/Toaster";

const Form98 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    deceasedName: "",
    deceasedAddress: "",
    deceasedOccupation: "",
    petitionerName: "",

    // Movable Assets
    movableAssets: {
      cashInHouse: 0,
      householdGoods: 0,
      wearingApparel: 0,
      books: 0,
      plates: 0,
      jewels: 0,
      furniture: 0,
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
      { folio: "", UnclaimedSchemeName: "", UnclaimedAmount: "" },
    ],
    royalties: [{ bookName: "", earnedIncome: "" }],

    // Other Assets
    otherAssets: {
      adaniAccountNumber: "",
      adaniSecurityDeposit: 0,
      mahanagarGPBearingBPNo: "",
      mahanagarBearingCANo: "",
      mahanagarSecurityDeposit: 0,
      mahanagarGPBPNo: "",
      mahanagarCANo: "",
      simCardNumber: "",
    },

    deductedLiabilities: 0,
  });

  const { user, navigate } = useContext(AuthContext);
  const {
    handleSubmitForm98,
    handleFetchForm98,
    handleGeneratePdfForm98,
    isSavingChanges,
    isSavingNext,
    isGeneratingPdf,
    showToast,
    setShowToast,
    shouldResetForms, setShouldResetForms 
  } = useContext(DocContext);


useEffect(() => {
  if (shouldResetForms) {
    setFormData({
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

    // Reset the trigger so it doesn’t keep clearing
    setShouldResetForms(false);
  }
}, [shouldResetForms]);

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      handleFetchForm98(setFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // update nested movableAssets
    if (name in formData.movableAssets) {
      setFormData((prev) => ({
        ...prev,
        movableAssets: {
          ...prev.movableAssets,
          [name]: value,
        },
      }));
      return;
    }

    // update nested otherAssets
    if (name in formData.otherAssets) {
      setFormData((prev) => ({
        ...prev,
        otherAssets: {
          ...prev.otherAssets,
          [name]: value,
        },
      }));
      return;
    }

    // top-level
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    handleSubmitForm98(formData, false);
  };
  const handleSaveNext = async (e) => {
    e.preventDefault();
    handleSubmitForm98(formData, true);
  };

  return (
    <div className="border m-2 md:m-10 rounded-2xl p-4 md:!p-10 bg-white text-sm md:text-base max-h-screen overflow-scroll">
      <p className="text-xl md:text-3xl mt-2 mb-2 font-semibold text-center">
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
        TESTAMENTARY AND INTESTATE JURISDICTION PETITION No{" "}
        {formData.petitionNumber || ".............."} of 2020
      </p>

      <form onSubmit={handleSaveChanges} className="p-2 md:p-12 space-y-6">
        {/* Petition Number Field */}
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <label className="mt-1 mr-2 font-medium ">
            Petition Number:
          </label>
          <input
            type="text"
            name="petitionNumber"
            // placeholder="Enter Petition No."
            className="input w-[100px]"
            onChange={handleChange}
            value={formData.petitionNumber || ""}
          />
        </div>
        {/* Basic Details Section */}
        <div className="space-y-4 mt-12">
          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Petition for probate of a will of
            <label className="font-bold">(Name of Deceased)</label> {" "}
            <input
              type="text"
              name="deceasedName"
              // placeholder="Name of Deceased"
              className="input w-full md:w-auto"
              onChange={handleChange}
              value={formData.deceasedName}
            />
            resident
            <label className="font-bold">(Residence of Deceased)</label> {" "}
            <input
              type="text"
              name="deceasedAddress"
              // placeholder="Residence of Deceased"
              className="input w-full md:w-auto"
              onChange={handleChange}
              value={formData.deceasedAddress}
            />
            having occupation of
            <label className="font-bold">(Occupation of Deceased)</label> {" "}
            <input
              type="text"
              name="deceasedOccupation"
              // placeholder="Occupation of Deceased"
              className="input w-full md:w-auto"
              onChange={handleChange}
              value={formData.deceasedOccupation}
            />
          </div>

          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Deceased.
            <label className="font-bold">(Executor of Will)</label> {" "}
            <input
              type="text"
              name="petitionerName"
              // placeholder="Executor of Will"
              className="input w-full md:w-auto"
              onChange={handleChange}
              value={formData.petitionerName}
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
          <p className="mb-0 text-xl md:text-2xl font-semibold">
            Details of Cash in the house, household goods, wearing apparel,
            books, plates, jewels
          </p>

          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Furniture</label>
              <input
                type="number"
                name="furniture"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.furniture}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Cash in house</label>
              <input
                type="number"
                name="cashInHouse"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.cashInHouse}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Plates</label>
              <input
                type="number"
                name="plates"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.plates}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Jewel</label>
              <input
                type="number"
                name="jewels"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.jewels}
              />
            </div>
           
          </div>

          <div className="flex flex-col gap-4 md:flex-row w-full">
             <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount of Books</label>
              <input
                type="number"
                name="books"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.books}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Amount Wearing apparel</label>
              <input
                type="number"
                name="wearingApparel"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.wearingApparel}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Amount of Household Goods
              </label>
              <input
                type="number"
                name="householdGoods"
                className="input"
                onChange={handleChange}
                value={formData.movableAssets.householdGoods}
              />
            </div>
          </div>
        </div>

        <hr />

        {/* dynamic lists */}
        <div className="flex flex-col gap-3">
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
              value: "100% md:30%",
            }}
          />
          <hr />

          <DynamicInputSection
            title="Details of Immovable property"
            field="immovableProperty"
            formData={formData}
            setFormData={setFormData}
            schema={{ description: "", value: "" }}
            labels={{
              description: "Description",
              value: "Assessed Value",
            }}
            fieldWidths={{
              description: "100% md:45%",
              value: "100% md:45%",
            }}
          />
          <hr />

          <DynamicInputSection
            title="Details of Debenture/Bond"
            field="debenture"
            formData={formData}
            setFormData={setFormData}
            schema={{ description: "", value: "" }}
            labels={{
              description: "Description",
              value: "Current Value",
            }}
            fieldWidths={{
              description: "100% md:45%",
              value: "100% md:45%",
            }}
          />
          <hr />

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

          <DynamicInputSection
            title="Royalties/Fees from Sale of Books"
            field="royalties"
            formData={formData}
            setFormData={setFormData}
            schema={{ bookName: "", earnedIncome: "" }}
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

          {/* Other Assets */}
          <div className="flex flex-col gap-4 text-sm md:text-base">
            <p className="mb-0 text-xl md:text-2xl font-semibold">
              Details of Other Assets:
            </p>
            <p className="mb-0">
              1. Adani Electricity Account Number
              <input
                type="text"
                name="adaniAccountNumber"
                // placeholder="Account Number"
                className="input ms-2"
                onChange={handleChange}
                value={formData.otherAssets.adaniAccountNumber}
              />
            </p>
            <p className="mb-0">
              2. Security Deposit of
              <label className="font-bold">(Security Deposit)</label> {" "}
              <input
                type="number"
                name="adaniSecurityDeposit"
                // placeholder="Security Deposit"
                className="input ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.adaniSecurityDeposit}
              />{" "}
              for Adani Electricity Account Number
              <input
                type="text"
                name="adaniAccountNumber"
                // placeholder="Account Number"
                className="input ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.adaniAccountNumber}
              />
            </p>
            <p className="mb-0">
              3. Mahanagar Gas connection bearing BP No. :
              <input
                type="text"
                name="mahanagarGPBearingBPNo"
                // placeholder="BP No."
                className="input ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.mahanagarGPBearingBPNo}
              />{" "}
              / CA No. :
              <input
                type="text"
                name="mahanagarBearingCANo"
                // placeholder="CA No."
                className="input ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.mahanagarBearingCANo}
              />
            </p>
            <p className="mb-0">
              4. Security Deposit of Rs:
              <input
                type="number"
                name="mahanagarSecurityDeposit"
                // placeholder="Security Deposit"
                className="input w-[200px] ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.mahanagarSecurityDeposit}
              />{" "}
              for Mahanagar Gas connection BP No. :
              <input
                type="text"
                name="mahanagarGPBPNo"
                // placeholder="BP No."
                className="input w-[200px] ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.mahanagarGPBPNo}
              />
              / CA No. :
              <input
                type="text"
                name="mahanagarCANo"
                // placeholder="CA No."
                className="input w-[200px] ms-2"
                onChange={handleChange}
                value={formData.otherAssets.mahanagarCANo}
              />
            </p>
            <p className="mb-0">
              6. SIM Card with number:
              <input
                type="text"
                name="simCardNumber"
                // placeholder="Card No."
                className="input ms-2 me-2"
                onChange={handleChange}
                value={formData.otherAssets.simCardNumber}
              />
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
              value={formData.deductedLiabilities}
            />
          </p>

          <hr />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-16 gap-4">
            <Link to="/form97" className="button previous w-full md:w-auto">
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
              {/* <button
                type="button"
                className="button generate_pdf w-full md:w-auto"
                disabled={isGeneratingPdf}
                onClick={handleGeneratePdfForm98}
              >
                {isGeneratingPdf ? "Sending email..." : "Generate PDF"}
              </button> */}
            </div>
          </div>
        </div>
      </form>
      <Toast
        show={showToast}
        message="Form Submitted Successfully"
        duration={3000}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default Form98;
