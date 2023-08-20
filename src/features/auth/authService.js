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
  const response = await nutritionApi.get("auth/logout/");
  localStorage.removeItem("userData")
  return response.data;
};


const authService = {
  login,
  logout,
  register,
};

export default authService;