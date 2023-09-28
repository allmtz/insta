import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Could store state of multiple modals here. ex: showFollowers, showFollowing etc.
const initialState = {
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalSelector = (state: RootState) => state.modal;

export const modalReducer = modalSlice.reducer;
