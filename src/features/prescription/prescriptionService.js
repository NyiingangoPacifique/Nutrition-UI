import nutritionApi from '../../api/api'
import jwtDecode from 'jwt-decode';

const getPrescription = async () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  if (!userData || !userData.token) {
    throw new Error("Token not found in userData");
  }
  const token = userData.token;
  const tokenPayload = jwtDecode(token);
  const user_id = tokenPayload.user_id;
  const headers = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
  };

  const response = await nutritionApi.get(`organization/me/${user_id}/prescription/`, {
    headers: headers
  });

  const data = response.data;
  return data;
};

const getOnePrescription = async (prescription_id) => {
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    if (!userData || !userData.token) {
      throw new Error("Token not found in userData");
    }
    const token = userData.token;
    const tokenPayload = jwtDecode(token);
    const user_id = tokenPayload.user_id;
    const headers = {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    };
  
    const response = await nutritionApi.get(`organization/me/${user_id}/prescription/${prescription_id}/`, {
      headers: headers
    });
  
    const data = response.data;
    return data;
  };

const prescriptionCreation = async (prescriptionData) => {
    
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
  
    if (!userData || !userData.token) {
      throw new Error("Token not found in userData");
    }
  
    const token = userData.token;
    const tokenPayload = jwtDecode(token);
    const user_id = tokenPayload.user_id;
      const headers = {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      };
      console.log("%#$#$#$====================",prescriptionData)
    const response = await nutritionApi.post(`organization/me/${user_id}/prescription/`, prescriptionData,{ headers });
    console.log("&&&&&&&&&&&",response)
    return response.data;
  };
  

const prescriptionService = {
    getOnePrescription,
    getPrescription,
    prescriptionCreation

};

export default prescriptionService;