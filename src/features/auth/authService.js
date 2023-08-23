import nutritionApi from '../../api/api'
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
  console.log("@@@@@@@@@",nutritionApi)
  const response = await nutritionApi.post("auth/login/", userData, {
    headers: headers
  });
  console.log("############",userData);
  if (response.data) {
    localStorage.setItem("userData", JSON.stringify(response.data));
  }

  return response.data;
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
    console.log("##########Header####",headers)
  const response = await nutritionApi.post("auth/logout/", {
    headers: headers
  });
  console.log("##############",response)
  localStorage.clear();
  console.log("logout&&&&&&&&&&&&&&")
  return response.data;
};


const authService = {
  login,
  logout,
  register,
};

export default authService;