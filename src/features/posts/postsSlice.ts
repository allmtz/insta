import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post } from "../../tipos/types";
import { StaticImageData } from "next/image";
import { mockPostState } from "../../mockData";

type PostsState = Post[];

const initialState: PostsState = [mockPostState];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(
        author: User,
        caption: string,
        location: string,
        imgSrc: string | StaticImageData
      ): { payload: Post } {
        return {
          payload: {
            id: nanoid(),
            timestamp: new Date().toISOString(),
            author,
            caption,
            imgSrc,
            location,
            likes: 10,
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
