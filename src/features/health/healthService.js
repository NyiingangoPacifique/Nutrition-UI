import nutritionApi from '../../api/api'
import jwtDecode from 'jwt-decode';

const storedToken = localStorage.getItem('userData');
// const decoded = jwtDecode(storedToken);
// const userId = decoded.user_id;

// console.log("%#$#$#$====================",userId)
// Register user
const healthCreation = async (healthData) => {
    const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  if (!userData || !userData.token) {
    throw new Error("Token not found in userData");
  }

  // Get the token from userData
  const token = userData.token;

  // Decode the JWT token to get the payload
  const tokenPayload = jwtDecode(token);

  // Extract user_id from the payload
  const user_id = tokenPayload.user_id;
  
    // Set the token in the request headers
    const headers = {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    };
    console.log("%#$#$#$====================",healthData)
    // console.log("%#$#$#$====================",userId)
  const response = await nutritionApi.post(`organization/me/${user_id}/health/`, healthData,{ headers });
  console.log("&&&&&&&&&&&",response)
  return response.data;
};


const healthService = {
  healthCreation,
};

export default healthService;