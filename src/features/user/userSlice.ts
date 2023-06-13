import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post } from "../../tipos/types";

import tempProfilePic from "../../assets/profle.jpg";

type PostBookmarkedAction = { payload: Post };

const initialState: User = {
  handle: "machomike",
  profilePicSrc: tempProfilePic,
  uuid: "1",
  postsLiked: {},
  postsBookmarked: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    bookmarkedPost: {
      reducer(state, action: PostBookmarkedAction) {
        const post = action.payload;

        const isBookmarked = state.postsBookmarked[post.id];

        if (isBookmarked) {
          delete state.postsBookmarked[post.id];
        } else {
          state.postsBookmarked[post.id] = post;
        }
      },
      prepare(post) {
        return { payload: post };
      },
    },
  },
});

export const { bookmarkedPost } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
