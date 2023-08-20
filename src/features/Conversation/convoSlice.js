import {
    createSlice, 
    createAsyncThunk
} from '@reduxjs/toolkit'
import convoService from './convoService'

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    conversataion: {},
    conversataions: [],
    isError: false,
    isErrorConvo: false,
    isSuccess: false,
    isLoading: false,
    isLoadingConvo: false,
    isCreatedConvo: false,
    message: '',
  }

// create new appointment
export const createconversation = createAsyncThunk(
    'conversation/create',
    async (conversation, thunkAPI) => {
        try {
            return await convoService.convoCreation(conversation)
        } catch (error) {
            const message = (
                error.response.data
            ) || error.message || error.toString()
console.log("________________",message)
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const conversationSlice = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        resetConversation: (state) => {
            state.message = ''
            state.isError = false
            state.isErrorConvo = false
            state.isSuccess = false
            state.isLoading = false
            state.isLoadingConvo = false
            state.isCreatedConvo = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createconversation.pending, (state) => {
                state.isLoadingConvo = true
                state.isCreatedConvo = false
                state.isErrorConvo = false
            })
            .addCase(createconversation.fulfilled, (state=[], action) => {
                state.isLoadingConvo = false
                state.isCreatedConvo = true
                state.isErrorConvo = false
                state.conversataion = action.payload
            })
            .addCase(createconversation.rejected, (state, action) => {
                state.isLoadingConvo = false
                state.isCreatedConvo = false
                state.isErrorConvo = true
                state.message = action.payload
            })
        }
})

export const { resetConversation } = conversationSlice.actions
export default conversationSlice.reducer