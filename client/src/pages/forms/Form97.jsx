import { useContext, useEffect, useState } from "react";
import DynamicInputSection from "../../utils/DynamicInputSection";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/authStore";
import { DocContext } from "../../store/docsStore";
import Toast from "../../components/Toaster";

const Form97 = () => {
  const [formData, setFormData] = useState({
    petitionNumber: "",
    petitionYear: "",
    // Deceased details
    deceasedFullName: "",
    deceasedNationality: "",
    deceasedAddress: "",
    deceasedReligion: "",
    deceasedsect: "",
    deceasedMaritalStatus: "Married",
    deceasedstatus: "Bachelor",
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
    petitionerage: 0,
    petitionerNationality: "",
    petitionerDomicile: "",
    petitionerFullAddress: "",
    petitionerOccupation: "",
    executor: "soleExecutor",

    exhibitNumber3: "",
    exhibitNumber4: "",
    placeOfExecutionOfWill: "",
    ExecutionDate: "",
    ExecutionMonth: "",
    ExecutionYear: "",

    capacity: "soleExecutor",
    exhibitNumber5: "",
    exhibitNumber6: "",
    exhibitNumber7: "",
    schduleAmount: 0,
    lawApplicableToTheDeceased: "",

    // People array (can initialize with one blank person if needed)
    person: [
      {
        fullName: "",
        address: "",
        age: 0,
        relationshipWithDeceased: "",
      },
    ],

    swornPlace: "",
    swornDate: "",
    swornMonth: "",
    swornYear: "",
    advocateFor: "",
    statedPara: "",
    remainingPara: "",
  });

  const { user, navigate } = useContext(AuthContext);
  const {
    isGeneratingPdf,
    isSavingChanges,
    isSavingNext,
    handleSubmitForm97,
    handleFetchForm97,
    handleGeneratePdfForm97,
    showToast,
    setShowToast,
  } = useContext(DocContext);

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      handleFetchForm97(setFormData);
    }
  }, []);

  const handledeceasedDeathDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;

    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      deceasedDeathYear: year,
      deceasedDeathMonth: month,
      deceasedDeathDate: day,
    }));
  };

  const handleExecutionDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      ExecutionDate: day,
      ExecutionMonth: month,
      ExecutionYear: year,
    }));
  };

  const handleswornDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      swornDate: day,
      swornMonth: month,
      swornYear: year,
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
    handleSubmitForm97(formData, false);
  };

  const handleSaveNext = async (e) => {
    e.preventDefault();
    handleSubmitForm97(formData, true);
  };

  // Reconstruct ISO date for the <input type="date"> control
  const swornDateValue =
    formData.swornYear && formData.swornMonth && formData.swornDate
      ? `${formData.swornYear}-${formData.swornMonth.padStart(
          2,
          "0"
        )}-${formData.swornDate.padStart(2, "0")}`
      : "";

  const deceasedDateValue =
    formData.deceasedDeathYear &&
    formData.deceasedDeathMonth &&
    formData.deceasedDeathDate
      ? `${formData.deceasedDeathYear}-${formData.deceasedDeathMonth.padStart(
          2,
          "0"
        )}-${formData.deceasedDeathDate.padStart(2, "0")}`
      : "";

  const executionDateValue =
    formData.ExecutionYear && formData.ExecutionMonth && formData.ExecutionDate
      ? `${formData.ExecutionYear}-${formData.ExecutionMonth.padStart(
          2,
          "0"
        )}-${formData.ExecutionDate.padStart(2, "0")}`
      : "";

  return (
    <div className="border !m-4  rounded-2xl !p-4 md:!p-10 bg-white text-sm md:text-base max-h-screen overflow-scroll">
      <p className="text-xl md:text-2xl mt-2 mb-2 font-semibold text-center ">
        IN THE HIGH COURT OF JUDICATURE AT BOMBAY
      </p>
      <p className="text-xl md:text-2xl mt-2 mb-2 font-semibold text-center ">
        TESTAMENTARY AND INTESTATE JURISDICTION
      </p>
      <p className="text-xl md:text-2xl mt-2 mb-2 font-semibold text-center ">
        PETITION NO. {formData.petitionNumber || ".............."} OF{" "}
        {formData.petitionYear || "20.."}.
      </p>
      <hr />
      <form onSubmit={handleSaveChanges} className="p-2 md:p-12 space-y-6">
        {/* Petition Number Field */}
        <div className="flex flex-col justify-center mb-4 md:flex-row">
          <label className="m-2 mr-2 font-medium">Petition Number:</label>
          <input
            type="text"
            name="petitionNumber"
            placeholder="Enter Petition No."
            className="input w-[100px]"
            onChange={handleChange}
            value={formData.petitionNumber || ""}
          />

          <label className="m-2 mr-2 font-medium">Petition Year:</label>
          <input
            type="text"
            name="petitionYear"
            placeholder="Enter Petition No."
            className="input w-[120px]"
            onChange={handleChange}
            value={formData.petitionYear || ""}
          />
        </div>

        {/* Deceased Details Section */}
        <p className="text-lg md:text-2xl font-semibold">Deceased Details</p>
        <p className="mb-2">
          Petition for Probate of the last Will and (insert word “Photocopy or
          Testament Certified copy”, if original is not available) of
        </p>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedFullName"
                placeholder="Name"
                className="input"
                onChange={handleChange}
                value={formData.deceasedFullName}
              />
            </div>

            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedNationality"
                placeholder="Nationality"
                className="input"
                onChange={handleChange}
                value={formData.deceasedNationality}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedAddress"
                placeholder="Address"
                className="input"
                onChange={handleChange}
                value={formData.deceasedAddress}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedReligion"
                className="input"
                placeholder="Religion"
                onChange={handleChange}
                value={formData.deceasedReligion}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedsect"
                className="input"
                placeholder="Section (If Muslim)"
                onChange={handleChange}
                value={formData.deceasedsect}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <select
                name="deceasedMaritalStatus"
                className="input"
                onChange={handleChange}
                value={formData.deceasedMaritalStatus}
              >
                <option value="" disabled>
                  Marriage Status of Deceased
                </option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
                <option value="Separated">Separated</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedOccupation"
                placeholder="Occupation"
                className="input"
                onChange={handleChange}
                value={formData.deceasedOccupation}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedRescidenceAtTimeOfDeath"
                placeholder="Residence at the time of death"
                className="input"
                onChange={handleChange}
                value={formData.deceasedRescidenceAtTimeOfDeath}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <select
                name="deceasedstatus"
                className="input"
                onChange={handleChange}
                value={formData.deceasedstatus}
              >
                <option value="" disabled>
                  Status of Deceased
                </option>
                <option value="Bachelor">Bachelor</option>
                <option value="Spinster">Spinster</option>
              </select>
            </div>
          </div>
        </div>
        <hr />

        {/* Petitioner Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl font-semibold">
            Petitioner details
          </p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Name of Petitioner</label>
              <input
                type="text"
                name="petitionerFullName"
                className="input"
                onChange={handleChange}
                value={formData.petitionerFullName}
              />
            </div>

            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Age of Petitioner</label>
              <input
                type="number"
                name="petitionerage"
                className="input"
                onChange={handleChange}
                value={formData.petitionerage}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Nationality of Petitioner
              </label>
              <input
                type="text"
                name="petitionerNationality"
                className="input"
                onChange={handleChange}
                value={formData.petitionerNationality}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Domicile of Petitioner</label>
              <input
                type="text"
                name="petitionerDomicile"
                className="input"
                onChange={handleChange}
                value={formData.petitionerDomicile}
              />
            </div>
            
          </div>

           




          <div className="flex flex-col md:flex-row md:!gap-16 gap-4">
             <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Full Address of Petitioner
              </label>
              <input
                type="text"
                name="petitionerFullAddress"
                className="input"
                onChange={handleChange}
                value={formData.petitionerFullAddress}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Executor</label>
              <select
                name="executor"
                className="input"
                onChange={handleChange}
                value={formData.executor}
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="soleExecutor">Sole Executor</option>
                <option value="oneOfTheExecutor">One Of The Executor</option>
                <option value="soleSurvivingExecutors">
                  Sole Surviving Executors
                </option>
                <option value="allExecutor">All Executor</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Occupation of Petitioner
              </label>
              <input
                type="text"
                name="petitionerOccupation"
                className="input"
                onChange={handleChange}
                value={formData.petitionerOccupation}
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="space-y-4">
          <p className="text-md md:text-lg mt-2 mb-0 font-semibold  ">
            THE PETITION OF THE PETITIONER ABOVENAMED
          </p>
          <p className="text-md md:text-lg  mb-0 font-semibold  ">TO,</p>
          <p className="text-md md:text-lg  mb-0 font-semibold  ">
            THE HONOURABLE THE CHIEF JUSTICE AND JUDGES OF THE HIGH COURT
          </p>
          <p className="text-md md:text-lg   font-semibold  ">SHEWETH:</p>
          <p className="mb-2">
            (1) That the above named{" "}
            <input
              type="text"
              name="deceasedFullName"
              placeholder="Name of Deceased"
              className="input me-2"
              onChange={handleChange}
              value={formData.deceasedFullName}
            />{" "}
            died at{" "}
            <input
              type="text"
              name="deceasedRescidenceAtTimeOfDeath"
              placeholder="Place of death of the Deceased*"
              className="input me-2"
              onChange={handleChange}
              value={formData.deceasedRescidenceAtTimeOfDeath}
            />{" "}
            on or about the{" "}
            <input
              type="date"
              name="deceasedDeathDate"
              placeholder=" Date  of Death"
              className="input me-2"
              onChange={handledeceasedDeathDateChange}
              value={deceasedDateValue}
            />
            (insert date of death of the Deceased) .A true copy of
          </p>
          <p className="mb-0">
            Death Certificate of the Deceased is annexed hereto and marked as
            Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber1"
              placeholder=" Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber1}
            />
            and a true copy of identity proof of the Deceased is annexed hereto
            and marked as Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber2"
              placeholder=" Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber2}
            />
            (If no identity proof is available, say so and mention reason and
            annexe a true copy of documentary proof in support thereof).
          </p>
          <p className="mt-4 mb-3">
            (2) That the said deceased at the time of his death had a fixed
            place of abode at{" "}
            <input
              type="text"
              name="placeOfAbode"
              placeholder=" Place Of Abode"
              className="input me-2"
              onChange={handleChange}
              value={formData.placeOfAbode}
            />{" "}
            and/or left property within Greater Bombay and in the State of
            Maharashtra and elsewhere in India. (details may be corrected as per
            the facts of the case)
          </p>
          <p className="mt-4 mb-3">
            (3) That the said deceased left a writing, which is his last Will
            and testament. The said writing, hereinafter referred to as “the
            Will”, is marked as Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber3"
              placeholder=" Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber3}
            />{" "}
            and (insert word “Photocopy or Certified copy”, if original is not
            available) is handed in separately for being filed and kept in a
            safe place in theOffice of the Prothonotary and Senior Master. A
            copy of the said Will is hereto annexed and also marked as Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber4"
              placeholder=" Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber4}
            />
          </p>
          <p className="mt-4 mb-3">
            (4) That the said Will (if there is/are Codicil or Codicils, say so)
            was executed at{" "}
            <input
              type="text"
              name="placeOfExecutionOfWill"
              placeholder=" Place Of Execution"
              className="input me-2"
              onChange={handleChange}
              value={formData.placeOfExecutionOfWill}
            />{" "}
            on the{" "}
            <input
              type="date"
              name="ExecutionDate"
              placeholder=" Execution Date"
              className="input me-2"
              onChange={handleExecutionDateChange}
              value={executionDateValue}
            />{" "}
            (insert date of execution of Will and Codicil, if any) . (if Will
            and Codicil, if any, has been registered, mention details of
            registration) (and if Petition is filed on the basis of certified
            copy or photocopy of Will, state so and mention reason therefor and
            correct title and prayer clause accordingly) .
          </p>

          <p className="mt-4 mb-3">
            (5) That the Petitioner is the{" "}
            <select
              name="capacity"
              className="input me-2"
              onChange={handleChange}
              value={formData.capacity}
            >
              <option value="">Select Capacity</option>
              <option value="soleExecutor">Sole Executor</option>
              <option value="oneOfExecutor">One of the Executors</option>
            </select>{" "}
            (exact capacity i.e. Sole or one of the Executors) named in the said
            Will or the Executor according to the tenor thereof. (if Petitioner
            is one of the Executor, then state whether rights of other
            Executor(s) have been reserved or whether he/they has/have renounced
            his/their Executorship and whether document supporting renunciation
            is annexed).
          </p>
          <p className="mt-4 mb-3">
            (6) The Petitioner has truly set forth in Schedule No.I, hereto
            annexed and marked as Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber5"
              placeholder="Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber5}
            />{" "}
            all the property and credits which the Deceased died possessed of or
            entitled to at the time of his death, which have or are likely to
            come to his hands. (mention all properties as per the Will and
            Codicil. Petitioner to state whether any of the property is disposed
            of during the life time of the deceased and therefore, it is not
            mentioned in the schedule).
          </p>

          <p className="mt-4 mb-3">
            (7) That the Petitioner has truly set forth in Schedule No. II,
            hereto annexed and marked Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber6"
              placeholder="Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber6}
            />{" "}
            all the items that by law, he is allowed to deduct for the purpose
            of ascertaining the net estate of the Deceased. (Delete this para if
            there are no such items).
          </p>
          <p className="mt-4 mb-3">
            (8) That, the Petitioner has truly set forth in Schedule No. III,
            hereto annexed and marked Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber7"
              placeholder="Exhibit Number"
              className="input me-2"
              onChange={handleChange}
              value={formData.exhibitNumber7}
            />{" "}
            he property held by the Deceased as a trustee for another and not
            beneficially or with general power to confer a beneficial interest.
            (Delete this para if there is no such property)
          </p>
          <p className="mt-4 mb-3">
            (9) That the assets of the Deceased after deducting the items
            mentioned in Schedule No. II but including all rents; interest and
            dividends which have accrued since the date of the death of the
            Deceased and increased value of the assets since the said date are
            of the value of Rs.
            <input
              type="number"
              name="schduleAmount"
              placeholder="Schdule Amount"
              className="input me-2"
              onChange={handleChange}
              value={formData.schduleAmount}
            />{" "}
            (insert net total amount of Schedule of Petition).
          </p>

          <p className="mt-4 mb-3">
            (10 ) That the said Deceased left him surviving as his only heirs
            and next-of- kin according to
            <input
              type="text"
              name="lawApplicableToTheDeceased"
              placeholder="Law"
              className="input me-2"
              onChange={handleChange}
              value={formData.lawApplicableToTheDeceased}
            />{" "}
            (state what Law / name of the Act / name of the personal law
            applicable to the Deceased), the following persons, who are residing
            at the addresses set out against their respective names :-
          </p>
          <DynamicInputSection
            title=""
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

          <p className="mt-4 mb-3">
            (11 ) That no application has been made to any District Court or
            District Delegate or to any High Court for Probate of any Will of
            the said Deceased or for Letters of Administration with or without
            the Will annexed to his property and credits. [or if made, state to
            what Court, by what person and what proceedings have been taken].
          </p>
        </div>
        <p>
          If petition is filed after three years from the death of the deceased,
          please explain delay(see Rule 382)).
        </p>
        <p>
          The Petitioner, therefore, prays that Probate may be granted to him
          having effect throughout the State of Maharashtra [or throughout
          India]. [insert words “throughout India”, if any property is situated
          outside the State of Maharashtra]. [insert words “limited until the
          original Will is produced”, if Petition is filed on the basis of
          photocopy or certified copy of Will and/or Codicil, if any] [insert
          words “reserving or renouncing the right(s) of Executor(s), if any
          Executor(s) has / have reserved or renounced his/her/their
          executorship]
        </p>
        <hr />
        <div className=" gap-4 mt-7  text-sm md:text-base ml-0 md:ml-11">
          <div className=" flex items-center w-full md:w-[400px] justify-between">
            <p>Sworn / Solemnly affirmed at </p>
            <input
              type="text"
              name="swornPlace"
              placeholder="Swearing Location"
              className="input w-[40%]"
              onChange={handleChange}
              value={formData.swornPlace}
            />
          </div>
          <div className="flex items-center w-full md:w-[200px] justify-between">
            <p>this</p>
            <input
              type="date"
              name="swornDate"
              placeholder="Date of Swearing"
              className="input w-[65%]"
              onChange={handleswornDateChange}
              value={swornDateValue}
            />
          </div>
          <div className="flex items-center w-full md:w-[350px] justify-between">
            <p>Advocate for:</p>
            <input
              type="text"
              name="advocateFor"
              placeholder="Advocate for"
              className="input w-[65%]"
              onChange={handleChange}
              value={formData.advocateFor}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-3 md:gap-4 mt-4">
          <button
            type="button"
            className="button save_button w-full md:w-auto"
            disabled={isSavingChanges}
            onClick={handleSaveChanges}
          >
            {isSavingChanges ? "Saving..." : "Save Changes"}
          </button>
          <Link
            to="/form98"
            type="button"
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
            onClick={handleGeneratePdfForm97}
          >
            {isGeneratingPdf ? "Sending email..." : "Generate PDF"}
          </button>
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

export default Form97;
