import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post } from "../../tipos/types";
import { StaticImageData } from "next/image";
import { mockPostState } from "../../mockData";

type PostsState = Post[];

type PostLikedAction = { payload: { user: User; post: Post } };

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
    postLiked: {
      reducer(state, action: PostLikedAction) {
        const { user, post } = action.payload;

        const match = state.find((p) => p.id === post.id);

        if (match) {
          if (match.likedBy[user.uuid]) {
            delete match.likedBy[user.uuid];
            match.likes--;
          } else {
            match.likedBy[user.uuid] = user;
            match.likes++;
          }
        }
      },
    },
  },
});

export const { addPost, postLiked } = postsSlice.actions;

export const postsSelector = (state: RootState) => state.posts;

export const postsReducer = postsSlice.reducer;
