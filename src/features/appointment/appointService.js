import nutritionApi from '../../api/api'
import jwtDecode from 'jwt-decode';
// Register user
const appointmentCreation = async (appointmentData) => {
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
  
    if (!userData || !userData.token) {
      throw new Error("Token not found in userData");
    }
  
    // Get the token from userData
    const token = userData.token;
  
    // Set the token in the request headers
    const headers = {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    };
    console.log("&&&&&&&&%%%%",headers)
  const response = await nutritionApi.post("appointments/applications/", appointmentData,{ headers });

  return response.data;
};

const getAppiotmentApplication = async () => {
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

  const response = await nutritionApi.get('appointments/applications/', {
    headers: headers
  });

  const data = response.data;
  return data;
};

const getOrganizationAppointment= async () => {
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

  const response = await nutritionApi.get('organization/appointment/', {
    headers: headers
  });

  const data = response.data;
  return data;
};



const appointmentService = {
  appointmentCreation,
  getAppiotmentApplication,
  getOrganizationAppointment
};

export default appointmentService;