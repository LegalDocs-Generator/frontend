import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/authStore";
import { DocContext } from "../../store/docsStore";
import Toast from "../../components/Toaster";

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

  const { user, navigate } = useContext(AuthContext);
  const {
    handleFetchForm102,
    handleSubmitForm102,
    handleGeneratePdfForm102,
    handleGenerateAllPdf,
    isSavingChanges,
    isGeneratingPdf,
    showToast,
    setShowToast,
  } = useContext(DocContext);

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      handleFetchForm102(setFormData);
    }
  }, []);

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;
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

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    handleSubmitForm102(formData, false);
  };

  // Reconstruct ISO date for the <input type="date"> control
  const swornDateValue =
    formData.swornYear && formData.swornMonth && formData.swornDay
      ? `${formData.swornYear}-${formData.swornMonth.padStart(
          2,
          "0"
        )}-${formData.swornDay.padStart(2, "0")}`
      : "";

  return (
    <div className="border m-4 md:m-10 rounded-2xl p-4 md:!p-10 bg-white text-sm md:text-base max-h-screen overflow-scroll">
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
        TESTAMENTARY AND INTESTATE JURISDICTION PETITION No {formData.petitionNumber||'..............'} of
        2020
      </p>
      <form onSubmit={handleSaveChanges} className=" text-md md:text-md ">
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
        <div className="space-y-4 mt-12">
          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Petition for probate of a will of
            <input
              type="text"
              name="deceasedName"
              placeholder=" Name of Deceased "
              className="input w-full md:w-auto"
              value={formData.deceasedName}
              onChange={handleChange}
            />
            resident
            <input
              type="text"
              name="deceasedAddress"
              placeholder=" Residence of Deceased"
              className="input w-full md:w-auto"
              value={formData.deceasedAddress}
              onChange={handleChange}
            />
            having occupation of
            <input
              type="text"
              name="deceasedOccupation"
              placeholder=" Occupation of Deceased*"
              className="input  w-full md:w-auto"
              value={formData.deceasedOccupation}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Deceased.
            <input
              type="text"
              name="petitionerName"
              placeholder=" Executor of Will"
              className="input w-full md:w-auto"
              value={formData.petitionerName}
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
            className="input w-full md:w-auto"
            placeholder="Witness Name"
            value={formData.witnessName}
            onChange={handleChange}
          />
          aged about
          <input
            type="number"
            name="witnessAge"
            className="input  w-full md:w-auto"
            placeholder="Witness Age"
            value={formData.witnessAge}
            onChange={handleChange}
          />
          years, residing at
          <input
            type="text"
            name="witnessAddress"
            className="input  w-full md:w-auto"
            placeholder="Witness Address"
            value={formData.witnessAddress}
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
            className="input  w-full md:w-auto"
            placeholder="Deceased Name"
            value={formData.deceasedName}
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
            className="input  w-full md:w-auto"
            placeholder="Date Of Death"
            value={formData.dateOfDeath.split('T')[0]}
            onChange={handleChange}
          />
          , I was present together with
          <input
            type="text"
            name="petitionerName"
            className="input  w-full md:w-auto"
            placeholder="Executor of Will"
            value={formData.petitionerName}
            onChange={handleChange}
          />
          at the house of
          <input
            type="text"
            name="deceasedName"
            className="input  w-full md:w-auto"
            placeholder="Deceased Name"
            value={formData.deceasedName}
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
            className="input w-full md:w-auto"
            placeholder="Executor of Will"
            value={formData.petitionerName}
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
            className="input w-full md:w-auto"
            placeholder="Deceased Name"
            value={formData.deceasedName}
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
            className="input  w-full md:w-auto"
            placeholder="Deceased Name"
            value={formData.deceasedName}
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
              placeholder="Swearing Location"
              className="input w-[65%]"
              value={formData.swearingLocation}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center w-full md:w-[200px] justify-between">
            <p>this</p>
            <input
              type="date"
              name="swornDate"
              placeholder="Date of Swearing"
              className="input w-[65%]"
              value={swornDateValue}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex items-center w-full md:w-[350px] justify-between">
            <p>Advocate for:</p>
            <input
              type="text"
              name="advocateFor"
              placeholder="Advocate for"
              className="input w-[65%]"
              value={formData.advocateFor}
              onChange={handleChange}
            />
          </div>
        </div>
        <hr />

        {/* Buttons */}

        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mt-6 gap-4">
          <Link
            to="/form101"
            type="button"
            className="button previous w-full md:w-auto"
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
              type="button"
              className="button save_next w-full md:w-auto "
              disabled={isGeneratingPdf}
              onClick={handleGeneratePdfForm102}
            >
              {isGeneratingPdf ? "Sending email..." : "Generate PDF"}
            </Link>
            <button
              type="button"
              className="button generate_pdf w-full md:w-auto"
              disabled={isGeneratingPdf}
              onClick={handleGenerateAllPdf}
            >
              {isGeneratingPdf ? "Sending email..." : "Generate All PDFs"}
            </button>
          </div>
        </div>
      </form>
      <Toast
        show={showToast}
        message="Form Submitted Successfully"
        duration={3000}
        onClose={()=>setShowToast(false)}
      />
    </div>
  );
};

export default Form102;
