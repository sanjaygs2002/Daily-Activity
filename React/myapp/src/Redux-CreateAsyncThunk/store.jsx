import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,   // 👈 matches useSelector((state) => state.user)
  },
});

export default store;
