import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { User, Post, Comment } from "../../tipos/types";
import { StaticImageData } from "next/image";
import { initialPosts } from "../../mockData";

type PostsState = Post[];

type PostInteractionAction = { payload: { user: User; post: Post } };

type CommentAction = {
  payload: { post: Post; commentObj: Comment };
};

const initialState: PostsState = initialPosts;

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
            comments: [],
            commentCount: 0,
          },
        };
      },
    },

    postLiked: {
      reducer(state, action: PostInteractionAction) {
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
      prepare(payload) {
        return { payload: payload };
      },
    },

    comment: {
      reducer(state, action: CommentAction) {
        const { post, commentObj } = action.payload;

        const matchingPost = state.find((p) => p.id === post.id);

        if (matchingPost) {
          matchingPost.comments.push(commentObj);
          matchingPost.commentCount++;
        } else {
          return;
        }
      },
      prepare(user, post, text): CommentAction {
        return {
          payload: {
            post: post,
            commentObj: {
              id: nanoid(),
              authorID: user.uuid,
              authorHandle: user.handle,
              authorProfilePicSrc: user.profilePicSrc,
              likes: 0,
              text: text,
            },
          },
        };
      },
    },
  },
});

export const { addPost, postLiked, comment } = postsSlice.actions;

export const postsSelector = (state: RootState) => state.posts;

export const postsReducer = postsSlice.reducer;
