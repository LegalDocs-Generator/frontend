import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/authStore";

const Form101 = () => {
  const [formData, setFormData] = useState({
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

  const { user, navigate } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [])


  const handleDateChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    const [year, month, day] = value.split("-");

    setFormData((prev) => ({
      ...prev,
      swornYear: Number(year),
      swornMonth: month,
      swornDay: Number(day),
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
      <p className="text-center text-xl md:text-3xl mt-2 mb-2 font-semibold">
        Executor’s oath
      </p>
      <p className="text-center mb-1">(See rules 374)</p>
      <p className="text-center text-md md:text-xl font-semibold mb-1">
        Form 101
      </p>
      <p className="text-center text-md md:text-xl font-semibold">
        IN THE HIGH COURT OF JUDICATURE AT BOMBAY
      </p>
      <p className="text-center text-md md:text-xl font-semibold">
        TESTAMENTARY AND INTESTATE JURISDICTION PETITION No .............. of
        2020
      </p>
      <form onSubmit={handleSubmit} className="p-2 md:p-12 space-y-6">
        <div className="space-y-4 mt-12">
          <div className="flex flex-wrap gap-2 text-sm md:text-base font-semibold justify-center">
            Petition for probate of a will of
            <input
              type="text"
              name="deceasedName"
              placeholder=" Name of Deceased "
              className="input  w-full md:w-auto"

              onChange={handleChange}
            />
            resident
            <input
              type="text"
              name="deceasedAddress"
              placeholder=" Residence of Deceased"
              className="input  w-full md:w-auto"

              onChange={handleChange}
            />
            having occupation of
            <input
              type="text"
              name="deceasedOccupation"
              placeholder=" Occupation of Deceased"
              className="input w-full md:w-auto"

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

              onChange={handleChange}
            />
            Petitioner.
          </div>
        </div>

        <hr className="!mt-4 !mb-7" />

        {/* Paragraph Details Section */}
        <div className="flex flex-wrap gap-2 text-sm md:text-base  justify-start mb-2">
          I,
          <input
            type="text"
            name="petitionerName"
            placeholder=" Name of Petitioner"
            className="input w-full md:w-auto"

            onChange={handleChange}
          />
          <input
            type="text"
            name="relationWithDeeceased"
            placeholder="Relation with Deceased"
            className="input  w-full md:w-auto"

            onChange={handleChange}
          />
          , the Petitioner, swear in the name of God that I believe and state
          that the Will referred to
        </div>

        <div className="flex flex-wrap gap-2 text-sm md:text-base  justify-start mb-2">
          in the petition herein and marked Exhibit “B” is the last Will and
          testament of
          <input
            type="text"
            name="deceasedName1"
            placeholder="Name of Deceased 1"
            className="input  w-full md:w-auto"

            onChange={handleChange}
          />
          alias
          <input
            type="text"
            name="deceasedName2"
            placeholder="Name of Deceased 2"
            className="input w-full md:w-auto"

            onChange={handleChange}
          />
          alias
        </div>

        <div className="flex flex-wrap gap-2 text-sm md:text-base  justify-start mb-2">
          <input
            type="text"
            name="deceasedName3"
            placeholder="Name of Deceased 3"
            className="input w-full md:w-auto"

            onChange={handleChange}
          />
          alias
          <input
            type="text"
            name="deceasedName4"
            placeholder="Name of Deceased 4"
            className="input  w-full md:w-auto"

            onChange={handleChange}
          />
          deceased, and that I am the executor therein named and that I will
          faithfully administer
        </div>

        <div className="text-sm md:text-base   mb-2 px-2">
          <p>
            the property and credits of the said deceased and in any way
            concerning his will by paying his debts and then the legacies
            therein bequeathed so far as
          </p>
          <p>
            the said assets will extend, and that I will make and exhibit a full
            and true inventory of the said property and credits in this Hon'ble
            Court within six months
          </p>
          <p>
            from the date of the grant to be made to me or within such further
            time as the said Court may from time to time appoint and also render
            a true account of
          </p>
          <p>
            my administration to this Hon'ble Court within one year from the
            same date or within such further time as the said Court may from
            time to time appoint.
          </p>
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

              onChange={handleChange}
            />
          </div>
        </div>

        <hr />

        {/* Buttons Section */}
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
      </form>
    </div>
  );
};

export default Form101;
