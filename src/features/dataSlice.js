import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URI;

// ---------------------------------------------------GET------------------------------------------------------
// Fetch all presensis



// ---------------------------------------------------POST------------------------------------------------------

// Registration

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        regist: null,
        isSuccess: false,
        isError: false,
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            
    },
});

export default dataSlice.reducer;
