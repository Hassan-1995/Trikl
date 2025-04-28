import axios from "axios";
import * as FileSystem from 'expo-file-system'; // If using Expo, otherwise adjust as needed
import {modifyRiskResponse} from "./helperFunctions";


export const baseUrl="https://savvy-cdn-api.finomics.com.pk/api/"

export const register= async(payload)=>{
  const apiUrl= baseUrl+"auth/register"
  const data={
    user_name:payload.name,
    user_email:payload.email,
    password:payload.password,
  }
      try {
          const response = await axios.post(apiUrl, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log('User Registered successfully:', response.data);
        } catch (error) {
          console.error('Error in User Registration:', error.response ? error.response.data : error.message);
        }
      }


export const useronboarding= async(payload)=>{
const apiUrl= baseUrl+"user/adduser"
    try {
        const response = await axios.post(apiUrl, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('User added successfully:', response.data);
      } catch (error) {
        console.error('Error adding user:', error.response ? error.response.data : error.message);
      }
    }

    export const submitRiskProfiling= async(payload)=>{
      console.log("orginalRiskResponse",payload);
      const modifiedresp= modifyRiskResponse(payload,"0");
      console.log("modifiedRiskResponse",modifiedresp );
      const apiUrl= baseUrl+"user/assessmentResponse"
          try {
              const response = await axios.post(apiUrl, modifiedresp, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              console.log('User added successfully:', response.data);
              return response.data;
            } catch (error) {
              console.error('Error adding user risk profile:', error.response ? error.response.data : error.message);
              return
            }
          }
          export const addGoal= async(goaltemplate, target,initialInv,frequency, recurring,duration,allocationId)=>{
            const apiUrl= baseUrl+"goal/addgoal";
            console.log("Arguments",goaltemplate, target,initialInv,frequency, recurring,duration,allocationId)
            const payload={
              goalName: goaltemplate.goalName,
              templateId: goaltemplate.goalID, 
              allocationId:allocationId,
              goalTarget:target,
              goalDuration: duration, 
              total_payments: "0",
              savingFrequency: frequency,
              initialContribution:initialInv,
              recurringAmount: recurring,
              status: "Draft" 
            }
            console.log("Payload in add goals",payload);

            { 
             
            }
                try {
                    const response = await axios.post(apiUrl, payload, {
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });
                    console.log('User goal successfully:', response.data);
                  } catch (error) {
                    console.error('Error adding goal:', error.response ? error.response.data : error.message);
                  }
                }
// Payment Schedule API call
                export const generatePaymentSchedule= async(goaltemgoalIdplate, target,initialInv,frequency, recurring,duration)=>{
                  const apiUrl= baseUrl+"goal/addPaymentSchedule";
                  console.log("Arguments",goaltemplate, target,initialInv,frequency, recurring,duration)
                  const payload={
                    goalName: goaltemplate.goalName,
                    templateId: goaltemplate.goalID, 
                    goalTarget:target,
                    goalDuration: duration, 
                    total_payments: "0",
                    savingFrequency: frequency,
                    initialContribution:initialInv,
                    recurringAmount: recurring,
                    status: "Draft" 
                  }
                  console.log("Payload in add goals",payload);
      
                  { 
                   
                  }
                      try {
                          const response = await axios.post(apiUrl, payload, {
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          });
                          console.log('User goal successfully added:', response.data);
                        } catch (error) {
                          console.error('Error adding goal:', error.response ? error.response.data : error.message);
                        }
                      }
// add request API call
export const addRequest= async(userId,goalId, requestType,allocationId, amount)=>{
  const apiUrl= baseUrl+"portfolio/addRequest";
  console.log("Argumentsin Add request",userId,goalId, requestType,allocationId, amount);
  const payload={
    userId:userId,
    goalId:goalId,
    request_type:requestType, 
    allocation_id:allocationId,
    amount: amount

  }

 
  console.log("Payload in add Request",payload);

  { 
   
  }
      try {
          const response = await axios.post(apiUrl, payload, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          alert("request submitted");
          console.log('User Request Submitted successfully:', response.data);
        } catch (error) {
          console.error('Error adding request:', error.response ? error.response.data : error.message);
          alert("request error");
        }
      }
    export const sqlquery= async(sql,dispatch)=>{
      const apiUrl= baseUrl+"goal/executeQuery"
          try {
              const response = await axios.post(apiUrl, {sql:sql}, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              console.log('Query Execute Successfully:', response.data);
              dispatch(response.data);
              return response.data;
            } catch (error) {
              console.error('Query Failed with', error.response ? error.response.data : error.message);
            }
          }


      
// upload file

export const uploadFile = async (selectedFile, setFileLink) => {
  const api = baseUrl + "user/upload";

  if (!selectedFile) { // Check if selectedFile exists (more robust)
    alert("Error", "No file selected");
    return;
  }

  try {
    // 1. Improved File Handling (Crucial):
    const fileInfo = await FileSystem.getInfoAsync(selectedFile.uri); // Get more info
    if (!fileInfo.exists) {
    alert("Error", "File not found");
      return;
    }

    const formData = new FormData();

    // Construct the file object correctly:
    formData.append("file", {
      uri: selectedFile.uri,
      name: selectedFile.name || `upload_${Date.now()}.${selectedFile.uri.split('.').pop()}`, // Include extension!
      type: selectedFile.mimeType || 'application/octet-stream', // Provide a default if mimeType is missing
    });

    console.log("FormData in Upload file:", formData); // Keep this for debugging

    // 2. Axios Request (No changes needed, but keep the Content-Type header):
    const response = await axios.post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Upload Response:", response.data);

    setFileLink(response.data); // Assuming your server sends back fileUrl
  return response.data;

  } catch (error) {
    console.error("Upload Error:", error);

    // 3. Improved Error Handling:
    if (error.response) {
       console.error("Server Response:", error.response.data); // Log server error details
       Alert.alert("Upload Failed", error.response.data.message || "Upload failed");
    } else if (error.request) {
      console.error("Request Error:", error.request); // Log request error
      Alert.alert("Upload Failed", "Network error");
    } else {
      console.error("Other Error:", error.message); // Log other errors
      Alert.alert("Upload Failed", error.message);
    }
  }
};


export const fillOnboarding=(data)=>{
  let payload={
    User_Reference:0,
    Full_Name:data.name,
    Father_or_Husband_Name:data.guardian,
    Relationship:"father",
    "Gender":"male",
    "Date_of_Birth":data.date.todateDtring,
    "Nationality":data.country,
    "Email_Address":data.email,
    "Contact_Number":data.contact.dial_code.toString()+data.contact.dial_number.toString(),
    "Id_Type":"",
    "Id_Number":"",
    "Id_Proof_Link":"",
    "Source_of_Income":"",
    "Proof_of_Income_Link":"",
    "Mailing_Address":"",
    "Proof_of_Address_Link":""
  }
  return payload;

}