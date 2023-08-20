import nutritionApi from '../../api/api'
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


const appointmentService = {
  appointmentCreation,
};

export default appointmentService;