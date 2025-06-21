import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const appURL = import.meta.env.VITE_APP_URL;

export const DocContext = createContext({
  error: null,
  setError: () => {},
  isProcessing: false,
  isSavingChanges: false,
  isSavingNext: false,
  isGeneratingPdf: false,
  handleSubmitForm97: () => {},
  handleSubmitForm98: () => {},
  handleFetchForm97: () => {},
  handleFetchForm98: () => {},
  handleGeneratePdfForm97: () => {},
  handleGeneratePdfForm98: () => {},
});

const DocProvider = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSavingChanges, setIsSavingChanges] = useState(false);
  const [isSavingNext, setIsSavingNext] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //Handling Request for Submit Form-97
  const handleSubmitForm97 = async (formData, isNext) => {
    isNext? setIsSavingNext(true):setIsSavingChanges(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/submit-form97`,
        formData,
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
        if(isNext) navigate("/form98");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };
  
  //Handling Request for Submit Form-98
  const handleSubmitForm98 = async (formData, isNext) => {
    isNext? setIsSavingNext(true):setIsSavingChanges(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/submit-form98`,
        formData,
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
        if(isNext) navigate("/form99");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };

  //Handling Request for Fetch Form-97
  const handleFetchForm97 = async (setFormData) => {
    setIsProcessing(true);
    try {
      const res = await axios.get(`${appURL}/api/user/forms/form97`, {
        withCredentials: true,
      });

      if (res.data) {
        console.log(res.data);
        setFormData((prev) => ({ ...prev, ...res.data.data }));
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsProcessing(false);
    }
  };
  
  //Handling Request for Fetch Form-98
  const handleFetchForm98 = async (setFormData) => {
    setIsProcessing(true);
    try {
      const res = await axios.get(`${appURL}/api/user/forms/form98`, {
        withCredentials: true,
      });

      if (res.data) {
        console.log(res.data);
        setFormData((prev) => ({ ...prev, ...res.data.data }));
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsProcessing(false);
    }
  };

  //Handling Request for Generating PDF Form-97
  const handleGeneratePdfForm97 = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-97`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating PDF Form-97
  const handleGeneratePdfForm98 = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-98`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <DocContext.Provider
      value={{
        error,
        setError,
        isProcessing,
        isSavingChanges,
        isSavingNext,
        isGeneratingPdf,
        handleSubmitForm97,
        handleSubmitForm98,
        handleFetchForm97,
        handleFetchForm98,
        handleGeneratePdfForm97,
        handleGeneratePdfForm98,
      }}
    >
      {children}
    </DocContext.Provider>
  );
};

export default DocProvider;
