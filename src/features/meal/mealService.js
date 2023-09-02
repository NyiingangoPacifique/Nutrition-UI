import nutritionApi from '../../api/api'
import jwtDecode from 'jwt-decode';

const mealCreation = async (mealData) => {
    console.log("WWWWWWWWWWWWWWWW",mealData)
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
      // console.log("%#$#$#$====================",userId)
    const response = await nutritionApi.post(`organization/me/${user_id}/mealplan/`, mealData,{ headers });
    console.log("&&&&&&&&&&&",response)
    return response.data;
  };
  

const mealService = {
    mealCreation

};

export default mealService;