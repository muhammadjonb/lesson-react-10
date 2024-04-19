import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer } from "./students/studentSlice";

const store = configureStore({
  reducer: {
    student: studentsReducer,
  },
});

export default store;
