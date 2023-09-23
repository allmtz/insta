import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post } from "../../tipos/types";
import { StaticImageData } from "next/image";
import { initialPosts } from "../../mockData";

type PostsState = Post[];

const initialState: PostsState = initialPosts;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(
        id: string,
        authorID: string,
        caption: string,
        location: string,
        imgSrc: string | StaticImageData
      ): { payload: Post } {
        return {
          payload: {
            id,
            timestamp: new Date().toISOString(),
            authorID,
            caption,
            location,
            imgSrc,
          },
        };
      },
    },
  },
});

export const { createPost } = postsSlice.actions;

export const postsSelector = (state: RootState) => state.posts;

export const postsReducer = postsSlice.reducer;
