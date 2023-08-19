import bkApi from '../../api/api'

const userData = JSON.parse(localStorage.getItem('userData'));
const tokenn = userData?.token;
const Authorization = `Bearer ${tokenn}`;

// Get all products
const getProducts = async (token) => {
    
    const response = await bkApi.get("products")

    const data = response.data
    return data
}

// Get targets acgieved by Pfnumber
// const getTargetscPfnumberAchievements = async (pf) => {
//   console.log("@#$@@$@@#@$@$@$@$#$",pf)
//   const config = {
//         headers: {
//             Authorization: Authorization
//         }
//     }  
//     console.log("#############",pf)
//   const response = await axios.get(`http://localhost:8080/api/targets/achieved/${pfnumber}`,config)

//   const data = response.data
//   //console.log('+++++++++Achieved++++++++++ Data',data)
//   return data
// }

// Create product
const createProducts = async (newProduct,token) => {
    const config = {
        headers: {
          'Authorization': Authorization
      }
    }
    console.log("======save data====", newProduct);
    const response = await bkApi.post('products',newProduct,config)
    
    const data = response.data
    
    return data
}

const ProductService = {
    getProducts,
    createProducts,
  };
  
  export default ProductService;