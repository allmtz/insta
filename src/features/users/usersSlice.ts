import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../tipos/types";
import { RootState } from "../../store";

//mock users
import { john, mike } from "../../mockData";

const initialState: Users = [john, mike];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export const usersReducer = usersSlice.reducer;
