import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";
import { Post } from "../../tipos/types";

type PostsState = Post[];

const initialState: PostsState = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(author, content, location, imgSrc) {
        return {
          payload: {
            id: nanoid(),
            timeStamp: new Date().toISOString(),
            author,
            content,
            imgSrc,
            location,
            likes: 0,
            likedBy: {},
            comments: {},
            commentCount: 0,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;

export const postsSelector = (state: RootState) => state.posts;

export const postsReducer = postsSlice.reducer;
