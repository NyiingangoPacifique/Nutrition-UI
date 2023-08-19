import {
    createSlice, 
    createAsyncThunk
} from '@reduxjs/toolkit'

import ProductService from './productService'

const initialState = {
    product: {},
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    isCreated: false,
    isErrorC: false,
    message: '',
}

// Add new Product
export const createProduct = createAsyncThunk(
    'create/product',
    async (product, thunkAPI) => {
        try {
            return await ProductService.createProducts(product)
        } catch (error) {
            console.log("+================",error)
            console.log("+================",error.response)
            console.log("+================",error.response.data.errors[0])
            const message = (
                error.response && error.response.data && error.response.data.errors[0]
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get products
export const getProducts = createAsyncThunk(
    'products/',
    async (_, thunkAPI) => {
        try {
            return await ProductService.getProducts()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => {
            state.message = ''
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.isErrorC=false
            state.products = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
                state.isCreated = false
                state.isError = false
                state.isErrorC = false
            })
            .addCase(createProduct.fulfilled, (state = [], action) => {
                state.isLoading = false
                state.isCreated = true
                state.isError = false
                state.isErrorC = false
                state.product = action.payload
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isCreated = false
                state.isError = true
                state.isErrorC = true
                state.message = action.payload
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            
    }
})

export const { reset } = productSlice.actions
export default productSlice.reducer
