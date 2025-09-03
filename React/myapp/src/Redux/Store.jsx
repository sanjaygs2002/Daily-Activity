
import { configureStore } from "@reduxjs/toolkit";
import CounterApp from './CounterSlice';

const store = configureStore({
    reducer:{
        counter:CounterApp,
    }
})
export default store;