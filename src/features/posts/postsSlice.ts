import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { Post } from "../../tipos/types";
import { StaticImageData } from "next/image";
import { mockPosts } from "../../mockData";

type PostsState = Post[];

const initialState: PostsState = mockPosts;

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
        author: string,
        authorID: string,
        caption: string,
        location: string,
        imgSrc: string | StaticImageData
      ): { payload: Post } {
        return {
          payload: {
            id,
            timestamp: new Date().toISOString(),
            author,
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
