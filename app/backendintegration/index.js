
export const baseUrl="https://savvy-save-api.finomics.com.pk/api/"

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

