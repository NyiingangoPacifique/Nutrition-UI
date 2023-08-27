import {
    createSlice, 
    createAsyncThunk
} from '@reduxjs/toolkit'
import healthService from './healthService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    health: {},
    healths: [],
    isError: false,
    isErrorHealth: false,
    isSuccess: false,
    isLoading: false,
    isLoadingHealth: false,
    isCreatedHealth: false,
    message: '',
  }

// create new appointment
export const createHealth = createAsyncThunk(
    'health/create',
    async (health, thunkAPI) => {
        try {
            return await healthService.healthCreation(health)
        } catch (error) {
            const message = (
                error.response.data
            ) || error.message || error.toString()
console.log("________________",message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const healthSlice = createSlice({
    name: 'healths',
    initialState,
    reducers: {
        resetHealth: (state) => {
            state.message = ''
            state.isError = false
            state.isErrorHealth = false
            state.isSuccess = false
            state.isLoading = false
            state.isLoadingHealth = false
            state.isCreatedHealth = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createHealth.pending, (state) => {
                state.isLoadingHealth = true
                state.isCreatedHealth = false
                state.isErrorHealth = false
            })
            .addCase(createHealth.fulfilled, (state=[], action) => {
                state.isLoadingHealth = false
                state.isCreatedHealth = true
                state.isErrorHealth = false
                state.health = action.payload
            })
            .addCase(createHealth.rejected, (state, action) => {
                state.isLoadingHealth = false
                state.isCreatedHealth = false
                state.isErrorHealth = true
                state.message = action.payload
            })
        }
})

export const { resetHealth } = healthSlice.actions
export default healthSlice.reducer