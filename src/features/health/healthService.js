import nutritionApi from '../../api/api'
import jwtDecode from 'jwt-decode';

const storedToken = localStorage.getItem('userData');
// const decoded = jwtDecode(storedToken);
// const userId = decoded.user_id;

// console.log("%#$#$#$====================",userId)
// Register user
const updateHealth = async (healthData) => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);
  const health_id=healthData.healthid;
  const updateRequestBody = {
    weight: healthData.weight,
    height: healthData.height,
    blood_type: healthData.blood_type,
    date_of_birth: healthData.date_of_birth
};

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
    console.log("%#$#$#$====HealthId=========",health_id)
    console.log("%#$#$#$====================",updateRequestBody)
    // console.log("%#$#$#$====================",userId)
    //http://localhost:8000/organization/me/2/health/2/
  const response = await nutritionApi.put(`organization/me/${user_id}/health/${health_id}/`, updateRequestBody,{ headers });
  console.log("&&&&&&&&&&&",response)
  return response.data;
};


const healthService = {
  updateHealth,
};

export default healthService;