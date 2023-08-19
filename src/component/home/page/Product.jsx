import React, { useEffect, useState } from 'react';
import Navbar from '../../NavBar';
import { useSelector, useDispatch } from 'react-redux'
import { createProduct,getProducts,reset } from '../../../features/product/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const logo="http://10.1.5.54/intranet/templates/ja_mercury/images/logo-default.png"
function Product() {

    const dispatch = useDispatch()
    const [inputName, setInputName] = useState('');
    const [errorName, setErrorName] = useState('Enter Valid Name');

    const [inputCategory, setInpuCategroy] = useState('');
    const [erroratgeory, setErrorCategory] = useState('Enter Valid category');
    
    const [inputKgAcre, setInputKgAcre] = useState('');
    const [errorKgAcre, setErrorKgAcre] = useState('Enter Valid kilo per Acre');

    const [inputCost, setInputCost] = useState('');
    const [errorCost, setErrorCost] = useState('Enter Valid Cost');

    const [inputStock, setInpuStock] = useState('');
    // const [erroratgeory, setErrorCategory] = useState('Enter Valid category');
    
    const [inputImage, setInputImage] = useState('');
    // const [errorKgAcre, setErrorKgAcre] = useState('Enter Valid kilo per Acre');

    const [inputDesc, setInputDesc] = useState('');
    // const [errorCost, setErrorCost] = useState('Enter Valid Cost');

    const {
        isError,
        message,
        products,
        isCreated,
        isErrorC,
        isSuccess,
        isLoading,
      } = useSelector((state) => state.products)

    //User
    const { user } = useSelector((state) => state.auths)

    const notify = () => toast("Wow so easy!");
    useEffect(() => {
        if(isErrorC){
            toast.error(message);
            dispatch(reset())
            dispatch(getProducts())
        }
        if(isCreated)
        {
            toast.success('Product Added Successfully')
            dispatch(reset())
            dispatch(getProducts())
        }
      }, [dispatch,isCreated,isErrorC]);

    const handleNameChange = (e) => {
        const value = e.target.value;
        setInputName(value);
        
        // Validate input value
        if (!value)
        {
            setErrorName('name can not be Empty');
        }
        else {
            setErrorName('');
        }
      };

      const handleCategoryChange = (e) => {
        const value = e.target.value;
        setInpuCategroy(value);
        
      };  

    const handleKgAcreChange = (e) => {
        const value = e.target.value;
        setInputKgAcre(value);
        
        // Validate input value
        if (!value)
        {
            setErrorKgAcre('Kg/acre can not be Empty');
        }
        else {
            setErrorKgAcre('');
        }
    };  

    const handleCostChange = (e) => {
        const value = e.target.value;
        setInputCost(value);
        
        // Validate input value
        if (!value)
        {
            setErrorCost('cost can not be Empty');
        }
        else {
            setErrorCost('');
        }
    }; 

    const handleStockChange = (e) => {
        const value = e.target.value;
        setInpuStock(value);
        
    }; 
    const handleImageChange = (e) => {
        const value = e.target.value;
        setInputImage(value);
        
    }; 
    const handleDescChange = (e) => {
        const value = e.target.value;
        setInputDesc(value);
        
    }; 

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form if there are no errors
        const newData = {
            name: inputName,
            category: inputCategory,
            kgAcre : inputKgAcre,
            cost : inputCost,
            stock : inputStock,
            image : inputImage,
            description : inputDesc,
        }
        

        if (setErrorName) {
            dispatch(createProduct(newData));
        }
        // setInpuCategroy("");
        // setInputName("");
        // setInputKgAcre("");
        // setInputCost("");
        // setInpuStock("");
        // setInputDesc("");
        // setInputImage("");
      };

      

    return (
      <>
        <Navbar />
        <ToastContainer />
        <div className="p-4 sm:ml-80">
            <div class="p-4">
                <div class="grid grid-cols gap-4 mb-4">
                </div>
                <div class="flex items-center justify-center h-fit mb-8">
                    <h1 class="text-2xl text-red-900 font-bold">Enter Product Details</h1>
                </div>
                <div class="flex items-center justify-center h-fit mb-4 ">
                    <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    name
                                </label>
                                <div class="relative">
                                <input  value={inputName} onChange={handleNameChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="name" />
                                {errorName && <div style={{ color: 'red' }}>{errorName}</div>}
                                </div>

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Category
                                </label>
                                <div class="relative">
                                    <input  value={inputCategory} onChange={handleCategoryChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="category" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Kg/Acre
                                </label>
                                <input  value={inputKgAcre} onChange={handleKgAcreChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Kg/Acre" />
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Cost
                                </label>
                                <input value={inputCost} onChange={handleCostChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Cost" />
                                {errorCost && <div style={{ color: 'red' }}>{errorCost}</div>}
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Stock
                                </label>
                                <input value={inputStock} onChange={handleStockChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Stock" />
                                
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Image
                                </label>
                                <input value={inputImage} onChange={handleImageChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="image" />
                                
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Description
                                </label>
                                <input value={inputDesc} onChange={handleDescChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Descriptiom" />
                                
                            </div>
                        </div>
                        <div>
                            <button
                                    className="bg-sky-600 text-white active:bg-cyan-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 
                                    ease-linear transition-all duration-150"
                                    type="submit"
                                    disabled={errorName}
                                >
                                    Save
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    {/* <TargetTable /> */}
                </div>
            </div>
        </div>
      </>
    );
  }
  export default Product;