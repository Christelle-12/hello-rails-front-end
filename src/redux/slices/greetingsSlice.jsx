import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    greeting: "",
    error: null,
} 

export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
    const response = await fetch('http://127.0.0.1:3000/messages');
    const data = await response.json();
    return data.greetings;
});

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchRandomGreeting.fulfilled, (state, action) => { 
                state.greeting = action.payload;
            }
        );
        builder.addCase(
            fetchRandomGreeting.rejected, (state, action) => {
                state.error = action.error.message;
            }
        );
    }
});

export default greetingsSlice.reducer;
