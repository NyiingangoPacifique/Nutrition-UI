// import nutritionApi from '../../api/api'
// import jwtDecode from 'jwt-decode';

// const storedToken = localStorage.getItem('userData');
// // const decoded = jwtDecode(storedToken);
// // const userId = decoded.user_id;

// // console.log("%#$#$#$====================",userId)
// // Register user
// const mealCreation = async (mealData) => {
//     const userDataString = localStorage.getItem('userData');
//     const userData = JSON.parse(userDataString);
  
//     if (!userData || !userData.token) {
//       throw new Error("Token not found in userData");
//     }
  
//     // Get the token from userData
//     const token = userData.token;
  
//     // Set the token in the request headers
//     const headers = {
//       Accept: "*/*",
//       Authorization: `Bearer ${token}`,
//     };
//     console.log("%#$#$#$====================",mealData)
//     // console.log("%#$#$#$====================",userId)
//   const response = await nutritionApi.post(`organization/me/2/`, mealData,{ headers });
//   console.log("&&&&&&&&&&&",response)
//   return response.data;
// };

// const getTargetscPfnumberAchievements = async (pf) => {
//     console.log("@#$@@$@@#@$@$@$@$#$",pf)
//     const config = {
//           headers: {
//               Authorization: Authorization
//           }
//       }  
//       console.log("#############",pf)
//     const response = await axios.get(`organization/me/2/`,config)
  
//     const data = response.data
//     //console.log('+++++++++Achieved++++++++++ Data',data)
//     return data
//   }


// const healthService = {
//   healthCreation,
// };

// export default healthService;