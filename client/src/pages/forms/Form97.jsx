import React, { useState } from "react";
import axios from "axios";
import DynamicInputSection from "../../utils/DynamicInputSection";
import { Link } from "react-router-dom";
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
    const value = e.target.value;
    if (!value) return;

    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      deceasedDeathYear: Number(year),
      deceasedDeathMonth: month,
      deceasedDeathDate: Number(day),
    }));
  };

  const handleExecutionDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      ExecutionDate: Number(year),
      ExecutionMonth: month,
      ExecutionYear: Number(day),
    }));
  };

  const handleswornDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      swornDate: Number(year),
      swornMonth: month,
      swornYear: Number(day),
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
      <p className="text-xl md:text-2xl mt-2 mb-2 font-semibold text-center ">
        IN THE HIGH COURT OF JUDICATURE AT BOMBAY
      </p>
      <p className="text-xl md:text-2xl mt-2 mb-2 font-semibold text-center ">
        TESTAMENTARY AND INTESTATE JURISDICTION
      </p>
      <p className="text-xl md:text-2xl mt-2 mb-2 font-semibold text-center ">
        PETITION NO. ...........OF 20....
      </p>
      <hr />
      <form onSubmit={handleSubmit} className="p-2 md:p-12 space-y-6">
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
              />
            </div>

            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedNationality"
                placeholder="Nationality"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedAddress"
                placeholder="Address"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedReligion"
                className="input"
                placeholder="Religion"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedsect"
                className="input"
                placeholder="Section (If mulsim)"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <select
                name="deceasedMaritalStatus"
                className="input"
                onChange={handleChange}
                defaultValue=""
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
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <input
                type="text"
                name="deceasedRescidenceAtTimeOfDeath"
                placeholder="Residence at the time of death"
                className="input"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[20%]">
              <select
                name="deceasedstatus"
                className="input"
                onChange={handleChange}
                defaultValue=""
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

        {/* Petitoner Details Section */}
        <div className="space-y-4">
          <p className="text-lg md:text-2xl font-semibold">Petitoner details</p>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Name of Petitoner</label>
              <input
                type="text"
                name="petitionerFullName"
                className="input"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Age of Petitoner</label>
              <input
                type="number"
                name="petitionerage"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Nationality of Petitoner
              </label>
              <input
                type="text"
                name="petitionerNationality"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Domilcile of Petitoner</label>
              <input
                type="text"
                name="petitionerDomicile"
                className="input"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">
                Full Address of Petitioner
              </label>
              <input
                type="text"
                name="petitionerFullAddress"
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-start gap-4">
            <div className="flex flex-col w-full md:w-[20%]">
              <label className="mb-1 font-medium">Executor</label>
              <select
                name="executor"
                className="input"
                onChange={handleChange}
                defaultValue=""
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
                Occupation of Petitoner
              </label>
              <input
                type="text"
                name="petitionerOccupation"
                className="input"
                onChange={handleChange}
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
            />{" "}
            died at{" "}
            <input
              type="text"
              name="deceasedRescidenceAtTimeOfDeath"
              placeholder="Place of death of the Deceased*"
              className="input me-2"
              onChange={handleChange}
            />{" "}
            on or about the{" "}
            <input
              type="date"
              name="deceasedDeathDate"
              placeholder=" Date  of Death"
              className="input me-2"
              onChange={handledeceasedDeathDateChange}
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
            />
            and a true copy of identity proof of the Deceased is annexed hereto
            and marked as Exhibit{" "}
            <input
              type="text"
              name="exhibitNumber2"
              placeholder=" Exhibit Number"
              className="input me-2"
              onChange={handleChange}
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
            />{" "}
            on the{" "}
            <input
              type="Date"
              name="ExecutionDate"
              placeholder=" Execution Date"
              className="input me-2"
              onChange={handleExecutionDateChange}
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
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-3 md:gap-4 mt-4">
          <button type="submit" className="button save_button w-full md:w-auto">
            Save Changes
          </button>
          <Link
            to="/form98"
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
      </form>
    </div>
  );
};

export default Form97;
