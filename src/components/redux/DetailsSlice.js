// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchStudents = createAsyncThunk(
//   "students/fetchStudents",
//   async () => {
//     const response = await fetch("  http://localhost:7500/students");
//     const data = await response.json();
//     return data;
//   }
// );



// export const addStudent = createAsyncThunk(
//   "students/addStudent",
//   async (studentData) => {
//     const response = await fetch("   http://localhost:7500/students", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(studentData),
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// const DetailsSlice = createSlice({
//   name: "students",
//   initialState: {
//     data: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchStudents.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchStudents.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data = action.payload;
//       })
//       .addCase(fetchStudents.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
   
//       .addCase(addStudent.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(addStudent.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data.push(action.payload);
//       })
//       .addCase(addStudent.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { reducer } = DetailsSlice;

// export default DetailsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await fetch("http://localhost:7500/students");
    const data = await response.json();
    return data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId) => {
    await fetch(`http://localhost:7500/students/${studentId}`, {
      method: "DELETE",
    });
    return studentId;
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (studentData) => {
    const response = await fetch("http://localhost:7500/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    const data = await response.json();
    return data;
  }
);

const DetailsSlice= createSlice({
  name: "students",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (student) => student.id !== action.payload
        );
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reducer } = DetailsSlice;

export default DetailsSlice.reducer;