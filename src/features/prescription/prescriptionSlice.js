import {
    createSlice, 
    createAsyncThunk
} from '@reduxjs/toolkit'
import prescriptionService from './prescriptionService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    prescription: {},
    prescriptions: [],
    onePrescription: {},
    isError: false,
    isErrorPres: false,
    isSuccess: false,
    isLoading: false,
    isLoadingPres: false,
    isCreatedPres: false,
    message: '',
  }

// Prescription
export const createPrescription = createAsyncThunk(
    'prescription/create',
    async (prescription, thunkAPI) => {
        try {
            return await prescriptionService.prescriptionCreation(prescription)
        } catch (error) {
            const message = (
                error.response.data
            ) || error.message || error.toString()
console.log("________________",message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get Prescription
export const getPrescription = createAsyncThunk(
    'organization/me/userId/prescription',
    async (thunkAPI) => {
        try {
            return await prescriptionService.getPrescription()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getOnePrescription = createAsyncThunk(
    'organization/me/userId/prescription/id',
    async (prescriptionId, thunkAPI) => {
        try {
            return await prescriptionService.getOnePrescription(prescriptionId)
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)



export const prescriptionSlice = createSlice({
    name: 'prescriptions',
    initialState,
    reducers: {
        resetPrescription: (state) => {
            state.message = ''
            state.prescriptions=[]
            state.onePrescription={}
            state.isError = false
            state.isErrorPres = false
            state.isSuccess = false
            state.isLoading = false
            state.isLoadingPres = false
            state.isCreatedPres = false
        }
    },
    extraReducers: (builder) => {
            builder
            .addCase(createPrescription.pending, (state) => {
                state.isLoadingPres = true
                state.isCreatedPres = false
                state.isErrorPres = false
            })
            .addCase(createPrescription.fulfilled, (state=[], action) => {
                state.isLoadingPres = false
                state.isCreatedPres = true
                state.isErrorPres = false
                state.prescription = action.payload
            })
            .addCase(createPrescription.rejected, (state, action) => {
                state.isLoadingPres = false
                state.isCreatedPres = false
                state.isErrorPres = true
                state.message = action.payload
            })
            .addCase(getOnePrescription.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOnePrescription.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.onePrescription = action.payload
            })
            .addCase(getOnePrescription.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getPrescription.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPrescription.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.prescriptions = action.payload
            })
            .addCase(getPrescription.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { resetPrescription } = prescriptionSlice.actions
export default prescriptionSlice.reducer