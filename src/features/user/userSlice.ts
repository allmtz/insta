import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post } from "../../tipos/types";

import { john } from "../../mockData";

type PostBookmarkedAction = { payload: Post };

const initialState: User = john;

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

    followEvent: {
      reducer(state, action: { payload: { targetUser: User } }) {
        const { targetUser } = action.payload;

        // check if the user is already following the target user
        const following = state.following.find(
          (u) => u.uuid === targetUser.uuid
        );

        if (following) {
          const idx = state.following.indexOf(following);
          state.following.splice(idx, 1);
        } else state.following.push(targetUser);
      },
      prepare(targetUser) {
        return { payload: { targetUser } };
      },
    },
  },
});

export const { bookmarkedPost, followEvent } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
