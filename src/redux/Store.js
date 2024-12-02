import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./UsuarioReducer";

const store = configureStore({
    reducer:{
        'user':usuarioReducer
    }
});

export default store;