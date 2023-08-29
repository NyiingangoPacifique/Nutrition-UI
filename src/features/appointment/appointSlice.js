import {
    createSlice, 
    createAsyncThunk
} from '@reduxjs/toolkit'
import appointmentService from './appointService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    appointment: {},
    appointments: [],
    appointmentApplications: [],
    organizationAppointments: [],
    isError: false,
    isErrorApt: false,
    isSuccess: false,
    isLoading: false,
    isLoadingApt: false,
    isCreatedApt: false,
    message: '',
  }

// create new appointment
export const createAppointment = createAsyncThunk(
    'appointment/create',
    async (appointment, thunkAPI) => {
        try {
            return await appointmentService.appointmentCreation(appointment)
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const getAppointmentApplication = createAsyncThunk(
    'appointment/application',
    async (thunkAPI) => {
        try {
            return await appointmentService.getAppiotmentApplication()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getOrganizationAppointment = createAsyncThunk(
    'appointment/organization',
    async (thunkAPI) => {
        try {
            return await appointmentService.getOrganizationAppointment()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        resetAppointment: (state) => {
            state.message = ''
            state.appointmentApplications= []
            state.organizationAppointments= []
            state.isError = false
            state.isErrorApt = false
            state.isSuccess = false
            state.isLoading = false
            state.isLoadingApt = false
            state.isCreatedApt = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAppointment.pending, (state) => {
                state.isLoadingApt = true
                state.isCreatedApt = false
                state.isErrorApt = false
            })
            .addCase(createAppointment.fulfilled, (state=[], action) => {
                state.isLoadingApt = false
                state.isCreatedApt = true
                state.isErrorApt = false
                state.appointment = action.payload
            })
            .addCase(createAppointment.rejected, (state, action) => {
                state.isLoadingApt = false
                state.isCreatedApt = false
                state.isErrorApt = true
                state.message = action.payload
            })
            .addCase(getAppointmentApplication.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAppointmentApplication.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.appointmentApplications = action.payload
            })
            .addCase(getAppointmentApplication.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getOrganizationAppointment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOrganizationAppointment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.organizationAppointments = action.payload
            })
            .addCase(getOrganizationAppointment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        }
})

export const { resetAppointment } = appointmentSlice.actions
export default appointmentSlice.reducer