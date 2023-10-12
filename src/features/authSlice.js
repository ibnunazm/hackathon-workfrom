// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URI;

const initialState = {
    user: null,
    regist:null,
    getMeData: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: null
}

export const LoginUser = createAsyncThunk("user/LoginUser", async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post(`${apiUrl}/login`, {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${apiUrl}/me`);
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const registPost = createAsyncThunk('data/regist',
    async ({ name, email, phoneNumber, password, confirmPassword }, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phoneNumber', phoneNumber);
            formData.append('password', password);
            formData.append('confirmPassword', confirmPassword);
            const response = await axios.post(
                `${apiUrl}/customers`,
                formData,
                {},
            );
            return response.data;
        } catch (error) {
            if (error.response) {
                const message = error.response.data.msg;
                return thunkAPI.rejectWithValue(message);
            }
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        // Get User Login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.getMeData = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(registPost.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registPost.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.regist = action.payload;
            state.isError = false;
        })
        .addCase(registPost.rejected, (state) => {
            state.isError = true;
        })
    }
});

export const { setUser, reset } = authSlice.actions;
export default authSlice.reducer;
