import React, { useState } from "react";
import axios from "axios";

const Form98 = () => {
  const [formData, setFormData] = useState({});

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
    <div className="container">
      <form onSubmit={handleSubmit} className="p-5">
        <div className="flex flex-col gap-4">
          <p> Details of Movable Properties</p>
          <input
            type="text"
            placeholder="Name of Deceased"
            name="deceasedName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Rescidence of Deceased"
            name="deceasedAddress"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Occupation of Deceased"
            name="deceasedOccupation"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Name of Petitioner"
            name="petitionerName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Cash in house"
            name="cashInHouse"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Amount of Household Goods"
            name="householdGoods"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Amount Wearing apparel"
            name="wearingApparel"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Amount of Books"
            name="books"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Amount of Plates"
            name="plates"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Amount of Jewel"
            name="jewels"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Amount of Furniture"
            name="furniture"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Bank Accounts</p>
          <input
            type="text"
            placeholder="Bank Name"
            name="bankName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bank Account Number"
            name="accountNumber"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Current Value"
            name="value"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Fixed Deposits</p>
          <input
            type="text"
            placeholder="Bank Name"
            name="bankName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Certificate Details"
            name="receiptDetails"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Current Value"
            name="value"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Immovable property</p>
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Assessed Value"
            name="value"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Debenture/Bond</p>
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Value"
            name="value"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Mutual Funds</p>
          <input
            type="text"
            placeholder="Folio"
            name="folio"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Scheme Name"
            name="schemeName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Current units"
            name="currentUnits"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Current NAV (Rs.)"
            name="currentNav"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Current value (Rs.)"
            name="currentValue"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Mutual Fund Missed Dividends</p>
          <input
            type="text"
            placeholder="Folio"
            name="folio"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Unclaimed Scheme"
            name="UnclaimedSchemeName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Unclaimed Amount (in Rs.)"
            name="UnclaimedAmount"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Details of Royalties/Fees from Sale of Books</p>
          <input
            type="text"
            placeholder="Book Name"
            name="bookName"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Earned Income"
            name="earnedIncome"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <p>Other Assets</p>
          <input
            type="text"
            placeholder="Adani Electricity Account Number"
            name="adaniAccountNumber"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Adani Security Deposit"
            name="adaniSecurityDeposit"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mahanagar Gas connection bearing BP No"
            name="mahanagarGPBearingBPNo"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mahanagar Gas connection bearing CA No"
            name="mahanagarBearingCANo"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Security Deposit for Mahanagar Connection"
            name="mahanagarSecurityDeposit"
            className="input"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Mahanagar Gas connection bearing BP No"
            name="mahanagarGPBPNo"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mahanagar Gas connection bearing CA No"
            name="mahanagarCANo"
            className="input"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deduct Amount"
            name="deductedLiabilities"
            className="input"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="SIM Card Number"
            name="simCardNumber"
            className="input"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-6 mt-3">
          <button type="submit " className="save_button button">Save Changes</button>
          <button type="submit " className="save_next button">Save and Next</button>
          <button type="submit " className="generate_pdf button">Generate PDF</button>
        </div>
      </form>
    </div>
  );
};

export default Form98;
