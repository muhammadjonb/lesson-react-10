import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  students: [],
  error: "",
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addStudents = createAsyncThunk(
  "students/addStudents",
  async (student) => {
    try {
      const response = await axios.post("http://localhost:3000/students", student);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      state.students = [];
      state.error = "";
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loading = false;
      state.students = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.loading = false;
      state.students = [];
      state.error = action.payload || 'Unable to fetch students';
    });
    // ADD STUDENTS
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
      state.error = action.payload || 'Unable to add student';
    });
  },
});

export const studentsReducer = studentSlice.reducer;
export const studentsAction = studentSlice.actions;
