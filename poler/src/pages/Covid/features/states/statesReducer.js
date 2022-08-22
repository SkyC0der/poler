// const axios = require('axios')
// const createSlice = require('@reduxjs/toolkit').createSlice
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  user: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return (
    axios.get("https://covidnigeria.herokuapp.com/").then((response) => response.data.data)
  )
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default userSlice.reducer;
// module.exports.fetchUsers = fetchUsers
