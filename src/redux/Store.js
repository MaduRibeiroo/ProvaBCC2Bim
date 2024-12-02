import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./usuarioReducer";

const store = configureStore({
    reducer:{
        'user':usuarioReducer
    }
});

export default store;