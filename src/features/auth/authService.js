import nutritionApi from '../../api/api'
import jwtDecode from 'jwt-decode';
// Register user
const register = async (userData) => {
  const response = await nutritionApi.post("auth/register/", userData);

  // if (response.data) {
  //   localStorage.setItem("userData", JSON.stringify(response.data));
  // }

  return response.data;
};

// Login a user
const login = async (userData) => {
  const headers = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
  };
  const response = await nutritionApi.post("auth/login/", userData, {
    headers: headers
  });
  if (response.data) {
    localStorage.setItem("userData", JSON.stringify(response.data));
  }

  return response.data;
};

const getUserOrganization = async () => {
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

  const response = await nutritionApi.get(`organization/me/${user_id}/`, {
    headers: headers
  });

  const data = response.data;
  console.log("===========UserOrganization",data)
  return data;
};

const getAllUsers = async () => {
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  if (!userData || !userData.token) {
    throw new Error("Token not found in userData");
  }

  const token = userData.token;
  const tokenPayload = jwtDecode(token);
  const headers = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
  };

  const response = await nutritionApi.get(`organization/me/`, {
    headers: headers
  });

  const data = response.data;
  console.log("===========UserOrganization",data)
  return data;
};

// Login a user
const logout = async () => {
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
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: `Bearer ${token}`,
    };
  const response = await nutritionApi.post("auth/logout/", {
    headers: headers
  });
  localStorage.clear();
  return response.data;
};


const authService = {
  login,
  logout,
  getUserOrganization,
  register,
  getAllUsers,
};

export default authService;