import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
  handleSubmitForm99: () => {},
  handleSubmitForm100: () => {},
  handleSubmitForm101: () => {},
  handleSubmitForm102: () => {},
  handleFetchForm97: () => {},
  handleFetchForm98: () => {},
  handleFetchForm99: () => {},
  handleFetchForm100: () => {},
  handleFetchForm101: () => {},
  handleFetchForm102: () => {},
  handleGeneratePdfForm97: () => {},
  handleGeneratePdfForm98: () => {},
  handleGeneratePdfForm99: () => {},
  handleGeneratePdfForm100: () => {},
  handleGeneratePdfForm101: () => {},
  handleGeneratePdfForm102: () => {},
  handleGenerateAllPdf: () => {},
});

const DocProvider = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSavingChanges, setIsSavingChanges] = useState(false);
  const [isSavingNext, setIsSavingNext] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /*-----------FORM SUBMIT REQUESTS------------*/
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
        toast.success("Form Submitted Successfully");
        if(isNext) navigate("/form98");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message);
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
        toast.success("Form Submitted Successfully");
        if(isNext) navigate("/form99");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };
  
  //Handling Request for Submit Form-99
  const handleSubmitForm99 = async (formData, isNext) => {
    isNext? setIsSavingNext(true):setIsSavingChanges(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/submit-form99`,
        formData,
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        toast.success("Form Submitted Successfully");
        setError(null);
        if(isNext) navigate("/form100");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };
  
  //Handling Request for Submit Form-100
  const handleSubmitForm100 = async (formData, isNext) => {
    isNext? setIsSavingNext(true):setIsSavingChanges(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/submit-form100`,
        formData,
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
        toast.success("Form Submitted Successfully");
        if(isNext) navigate("/form101");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };
  
  //Handling Request for Submit Form-101
  const handleSubmitForm101 = async (formData, isNext) => {
    isNext? setIsSavingNext(true):setIsSavingChanges(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/submit-form101`,
        formData,
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
        toast.success("Form Submitted Successfully");
        if(isNext) navigate("/form102");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };
  
  //Handling Request for Submit Form-102
  const handleSubmitForm102 = async (formData, isNext) => {
    isNext? setIsSavingNext(true):setIsSavingChanges(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/submit-form102`,
        formData,
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        setError(null);
        toast.success("Form Submitted Successfully");
        if(isNext) navigate("/form102");
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message);
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      isNext?setIsSavingNext(false):setIsSavingChanges(false);
    }
  };

  /*-----------FORM FETCH REQUESTS------------*/
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
  
  //Handling Request for Fetch Form-99
  const handleFetchForm99 = async (setFormData) => {
    setIsProcessing(true);
    try {
      const res = await axios.get(`${appURL}/api/user/forms/form99`, {
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
  
  //Handling Request for Fetch Form-100
  const handleFetchForm100 = async (setFormData) => {
    setIsProcessing(true);
    try {
      const res = await axios.get(`${appURL}/api/user/forms/form100`, {
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
  
  //Handling Request for Fetch Form-101
  const handleFetchForm101 = async (setFormData) => {
    setIsProcessing(true);
    try {
      const res = await axios.get(`${appURL}/api/user/forms/form101`, {
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
  
  //Handling Request for Fetch Form-102
  const handleFetchForm102 = async (setFormData) => {
    setIsProcessing(true);
    try {
      const res = await axios.get(`${appURL}/api/user/forms/form102`, {
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

  /*-----------FORM GENERATE PDF REQUESTS------------*/
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
        toast.success("PDF sent to email successfully")
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating PDF Form-98
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
        toast.success("PDF sent to email successfully");
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating PDF Form-99
  const handleGeneratePdfForm99 = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-99`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        toast.success("PDF sent to email successfully");
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating PDF Form-100
  const handleGeneratePdfForm100 = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-100`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        toast.success("PDF sent to email successfully");
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating PDF Form-101
  const handleGeneratePdfForm101 = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-101`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        toast.success("PDF sent to email successfully");
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating PDF Form-102
  const handleGeneratePdfForm102 = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-102`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        toast.success("PDF sent to email successfully");
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
      setError(
        error.response.data.message || error.response.data.msg || error.message
      );
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  //Handling Request for Generating All PDFs 
  const handleGenerateAllPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      const res = await axios.post(
        `${appURL}/api/user/forms/send-all`,
        {},
        { withCredentials: true }
      );

      if (res.data) {
        console.log(res.data);
        toast.success("All PDFs sent to email successfully");
        setError(null);
      }
    } catch (error) {
      console.log("Some error occured : ", error);
      toast.error(error.response.data.message || error.response.data.msg || error.message)
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
        handleSubmitForm99,
        handleSubmitForm100,
        handleSubmitForm101,
        handleSubmitForm102,
        handleFetchForm97,
        handleFetchForm98,
        handleFetchForm99,
        handleFetchForm100,
        handleFetchForm101,
        handleFetchForm102,
        handleGeneratePdfForm97,
        handleGeneratePdfForm98,
        handleGeneratePdfForm99,
        handleGeneratePdfForm100,
        handleGeneratePdfForm101,
        handleGeneratePdfForm102,
        handleGenerateAllPdf,
      }}
    >
      {children}
    </DocContext.Provider>
  );
};

export default DocProvider;
