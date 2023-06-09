import { createSlice } from "@reduxjs/toolkit";

import { User } from "../../tipos/types";
// import type { RootState } from "../../app/store";

import tempProfilePic from "../../assets/profle.jpg";

const initialState: User = {
  handle: "machomike",
  profilePicSrc: tempProfilePic,
  uuid: "1",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userSelector = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
