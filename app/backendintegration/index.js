import axios from "axios";
import * as FileSystem from 'expo-file-system'; // If using Expo, otherwise adjust as needed



export const baseUrl="https://savvy-cdn-api.finomics.com.pk/api/"

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
            } catch (error) {
              console.error('Query Failed with', error.response ? error.response.data : error.message);
            }
          }


      
// upload file

export const uploadFile = async (selectedFile, setFileLink) => {
  const api = baseUrl + "user/upload";

  if (!selectedFile) { // Check if selectedFile exists (more robust)
    Alert.alert("Error", "No file selected");
    return;
  }

  try {
    // 1. Improved File Handling (Crucial):
    const fileInfo = await FileSystem.getInfoAsync(selectedFile.uri); // Get more info
    if (!fileInfo.exists) {
      Alert.alert("Error", "File not found");
      return;
    }

    const formData = new FormData();

    // Construct the file object correctly:
    formData.append("file", {
      uri: selectedFile.uri,
      name: selectedFile.name || `upload_${Date.now()}.${selectedFile.uri.split('.').pop()}`, // Include extension!
      type: selectedFile.mimeType || 'application/octet-stream', // Provide a default if mimeType is missing
    });

    console.log("FormData:", formData); // Keep this for debugging

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