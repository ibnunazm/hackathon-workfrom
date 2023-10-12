import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/authSlice";
import dataReducer from "../features/dataSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dataUser: dataReducer
    },
});
