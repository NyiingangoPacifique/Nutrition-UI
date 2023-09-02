import {
    createSlice, 
    createAsyncThunk
} from '@reduxjs/toolkit'
import authService from './authService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    userOrganization:[],
    allUsers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register new user
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (
                error.response.data[0]
            ) || error.message || error.toString()
            console.log("(()()()()",message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Login user
export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch (error) {
            const message = (
                error.response.data.detail
            ) || error.message || error.toString()
            console.log("(()()()()",message)

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get User by organization
export const getUserMeOrganization = createAsyncThunk(
    'organization/me/userId',
    async (userId, thunkAPI) => {
        try {
            return await authService.getUserOrganization()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get All User
export const getAllUser = createAsyncThunk(
    'organization/me/',
    async (thunkAPI) => {
        try {
            return await authService.getAllUsers()
        } catch (error) {
            const message = (
                error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Log out user 
export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.user = null
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.userOrganization=[]
            state.allUsers=[]
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state=[], action) => {
                state.isLoading = false
                state.isSuccess = true 
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload 
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true 
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload 
                state.user = null
            })
            .addCase(getUserMeOrganization.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserMeOrganization.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.userOrganization = action.payload
            })
            .addCase(getUserMeOrganization.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allUsers = action.payload
            })
            .addCase(getAllUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

export const { resetAuth } = authSlice.actions
export default authSlice.reducer