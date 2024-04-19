import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  students: [],
  error: "",
  searchedStudents: [],
  filteredStudents: [],
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    try {
      const res = await axios.get("http://localhost:3000/students");
      const data = await res.data;
      return data;
    } catch (error) {
      return error.messege;
    }
  }
);

export const addStudents = createAsyncThunk(
  "students/addStudents",
  async (student) => {
    try {
      const res = await axios.post("http://localhost:3000/students", student);
      const data = await res.data;
      return data;
    } catch (error) {
      return error.messege;
    }
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // FETCH STUDENTS
    builder.addCase(fetchStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.stunets = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.loading = false;
      state.students = [];
      state.error = action.payload;
    });
    // ADD STUDEBTS
    builder.addCase(addStudents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.students = [...state.students, action.payload];
      state.error = "";
    });
    builder.addCase(addStudents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const studentsReducer = studentSlice.reducer;
export const studentsAction = studentSlice.actions;
