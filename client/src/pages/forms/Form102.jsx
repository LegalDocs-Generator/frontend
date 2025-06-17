import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form102 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    deceasedName: "",
    deceasedAddress: "",
    deceasedOccupation: "",
    petitionerName: "",
    witnessName: "",
    witnessAge: "",
    witnessAddress: "",
    dateOfDeath: "",
    swearingLocation: "",
    swornDay: "",
    swornMonth: "",
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
    <div className="border m-4 md:m-10 rounded-2xl p-4 md:!p-10 bg-white text-sm md:text-base">
      <form onSubmit={handleSubmit} className=" text-md md:text-md ">
        <p className="text-center text-xl md:text-3xl mt-2 mb-2 font-semibold">
          Affidavit of the attesting witness
        </p>
        <p className="text-center mb-1">(See rules 374 and 375)</p>
        <p className="text-center text-md md:text-xl font-semibold mb-1">
          Form 102
        </p>
        <p className="text-center text-md md:text-xl font-semibold">
          IN THE HIGH COURT OF JUDICATURE AT BOMBAY
        </p>
        <p className="text-center text-md md:text-xl font-semibold">
          TESTAMENTARY AND INTESTATE JURISDICTION PETITION No .............. of
          2020
        </p>

        <div className="space-y-4 mt-12">
          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Petition for probate of a will of
            <input
              type="text"
              name="deceasedName"
              placeholder=" Name of Deceased* "
              className="input min-w-[200px] w-full md:w-auto"
              required
              onChange={handleChange}
            />
            resident
            <input
              type="text"
              name="deceasedAddress"
              placeholder=" Residence of Deceased*"
              className="input min-w-[200px] w-full md:w-auto"
              required
              onChange={handleChange}
            />
            having occupation of
            <input
              type="text"
              name="deceasedOccupation"
              placeholder=" Occupation of Deceased*"
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
              placeholder=" Executor of Will*"
              className="input min-w-[200px] w-full md:w-auto"
              required
              onChange={handleChange}
            />
            Petitioner.
          </div>
        </div>
        <hr className="mt-4 mb-7" />

        {/* paragraph Details Section */}
        <div className="flex flex-wrap gap-2 text-sm md:text-base justify-start mb-2">
          I,
          <input
            type="text"
            name="witnessName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Witness Name*"
            required
            onChange={handleChange}
          />
          aged about
          <input
            type="number"
            name="witnessAge"
            className="input min-w-[100px] w-full md:w-auto"
            placeholder="Witness Age*"
            required
            onChange={handleChange}
          />
          years, residing at
          <input
            type="text"
            name="witnessAddress"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Witness Address*"
            required
            onChange={handleChange}
          />
          swear in the name of God and say as
        </div>

        <div className="text-sm md:text-base mb-2 ms-0 md:ms-10">follows:-</div>

        {/* Point 1 */}
        <div className="flex flex-wrap items-start gap-2 text-sm md:text-base mb-2 ms-2 md:!ms-10">
          1) That I knew and was well acquainted with the deceased
          <input
            type="text"
            name="deceasedName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Deceased Name*"
            required
            onChange={handleChange}
          />
          above named.
        </div>

        {/* Point 2 */}
        <div className="flex flex-wrap items-start gap-2 text-sm md:text-base mb-2 ms-2 md:!ms-10">
          2) That on the
          <input
            type="date"
            name="dateOfDeath"
            className="input min-w-[160px] w-full md:w-auto"
            placeholder="Date Of Death*"
            required
            onChange={handleChange}
          />
          , I was present together with
          <input
            type="text"
            name="petitionerName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Executor of Will*"
            required
            onChange={handleChange}
          />
          at the house of
          <input
            type="text"
            name="deceasedName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Deceased Name*"
            required
            onChange={handleChange}
          />
        </div>

        <div className="text-sm md:text-base leading-relaxed ms-2 md:!ms-16 mb-2">
          and we did then and there see the said deceased set and subscribe his
          name at foot of the testamentary paper in the English language and
          character, which is referred to in the petition herein and marked
          Exhibit “B”, and declare and publish the same as his last Will and
          testament.
        </div>

        {/* Point 3 */}
        <div className="flex flex-wrap items-start gap-2 text-sm md:text-base mb-2 ms-2 md:!ms-10">
          3) That thereupon I, this deponent and the said
          <input
            type="text"
            name="petitionerName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Executor of Will*"
            required
            onChange={handleChange}
          />
          did at the request of the said deceased and in his presence and in the
          presence of
        </div>

        <div className="text-sm md:text-base leading-relaxed ms-2 md:!ms-16 mb-2">
          each other all being present at the same time set and subscribe our
          respective names and signatures at foot of the said testamentary paper
          as witnesses thereto.
        </div>

        {/* Point 4 */}
        <div className="flex flex-wrap items-start gap-2 text-sm md:text-base mb-2 ms-2 md:!ms-10">
          4) That the name and signature
          <input
            type="text"
            name="deceasedName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Deceased Name*"
            required
            onChange={handleChange}
          />
          subscribed at the foot of the testamentary paper as of the party
          executing the same is in the
        </div>

        <div className="text-sm md:text-base leading-relaxed ms-2 md:!ms-16 mb-2">
          proper hand-writing of the said deceased and the name and signature
          also subscribed and written at foot of the said testamentary paper as
          of the parties attesting execution of the same are in the proper
          respective handwritings of the said and of me this deponent
          respectively.
        </div>

        {/* Point 5 */}
        <div className="flex flex-wrap items-start gap-2 text-sm md:text-base mb-2 ms-2 md:!ms-10">
          5) That at the time the said deceased so subscribed his name and
          signature to the said will as aforesaid,
          <input
            type="text"
            name="deceasedName"
            className="input min-w-[200px] w-full md:w-auto"
            placeholder="Deceased Name*"
            required
            onChange={handleChange}
          />
          he was of sound
        </div>

        <div className="text-sm md:text-base leading-relaxed ms-2 md:!ms-16 mb-2">
          and disposing mind, memory and understanding and to the best of my
          belief made and published the name of his free will and pleasure.
        </div>

        <hr />

        <div className=" gap-4 mt-7  text-sm md:text-base ml-0 md:ml-11">
          <div className="flex items-center w-full md:w-[310px] justify-between">
            <p>Sworn at</p>
            <input
              type="text"
              name="swearingLocation"
              placeholder="Swearing Location*"
              className="input w-[65%]"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center w-full md:w-[200px] justify-between">
            <p>this</p>
            <input
              type="date"
              name="swornDate"
              placeholder="Date of Swearing*"
              className="input w-[65%]"
              required
              onChange={handleDateChange}
            />
          </div>
          <div className="flex items-center w-full md:w-[350px] justify-between">
            <p>Advocate for:</p>
            <input
              type="text"
              name="advocateFor"
              placeholder="Advocate for*"
              className="input w-[65%]"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <hr />

        {/* Buttons */}

        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-6 gap-4">
          <Link
            to="/form100"
            type="submit"
            className="button previous w-full md:w-auto"
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
              to="/form102"
              type="submit"
              className="button save_next w-full md:w-auto "
            >
              Generate PDF
            </Link>
            <button
              type="submit"
              className="button generate_pdf w-full md:w-auto"
            >
              Generate All PDFs
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form102;
