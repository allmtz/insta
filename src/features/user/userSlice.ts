import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post } from "../../tipos/types";

import { john, mike } from "../../mockData";

type PostBookmarkedAction = { payload: Post };

const initialState: { currentUser: User } = { currentUser: john };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    bookmarkedPost: {
      prepare(post) {
        return { payload: post };
      },
      reducer(state, action: PostBookmarkedAction) {
        const post = action.payload;

        const isBookmarked = state.currentUser.postsBookmarked[post.id];

        if (isBookmarked) {
          delete state.currentUser.postsBookmarked[post.id];
        } else {
          state.currentUser.postsBookmarked[post.id] = post;
        }
      },
    },

    switchUser: (state) => {
      if (state.currentUser.uuid === "1") {
        state.currentUser = mike;
      } else {
        state.currentUser = john;
      }
    },
  },
});

export const { bookmarkedPost, switchUser } = userSlice.actions;

export const userSelector = (state: RootState) => state.user.currentUser;

export const userReducer = userSlice.reducer;
