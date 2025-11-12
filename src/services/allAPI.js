import  commonAPI  from "./commonAPI";
import  ServerURL  from "./ServerURL";
// resume add api - called by Userinputs, when finish btn clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}


// get resume api - called from ViewResume , when page load(), inside useeffect() hook
export const getResumeAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}


// update resume api
export const updateResumeAPI = async (id, resumeDetails) => {
  return await commonAPI(`${ServerURL}/resumes/${id}`, "PUT", resumeDetails);
};



// add history api
export const addHistoryAPI = async (history) => {
  return await commonAPI(`${ServerURL}/history`, "POST", history);
};

// get history api - called from History Component, when page load(), inside useeffect hook
export const getHistoryAPI = async ()=>{
    return await commonAPI(`${ServerURL}/history`,"GET",{})
}

// remove history api
export const removeHistoryAPI = async (id) => {
  return await commonAPI(`${ServerURL}/history/${id}`, "DELETE", {});
};
