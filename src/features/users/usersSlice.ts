import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../tipos/types";
import { RootState } from "../../store";

//mock users
import { john, mike } from "../../mockData";

const initialState: User[] = [john, mike];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export const usersReducer = usersSlice.reducer;
