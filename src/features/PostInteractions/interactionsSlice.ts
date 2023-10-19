import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Comment, User, Post } from "../../tipos/types";
import { RootState } from "../../store";

type CommentedAction = {
  payload: { postID: string; comment: Comment };
};

type PostInteractionAction = { payload: { user: User; postID: string } };

type interactionsState = {
  [postID: string]: {
    comments: Comment[];
    likes: number;
    likedBy: User[];
  };
};

const initialState: interactionsState = {
  johnsPost: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
  johnsPost2: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
  johnsPost3: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
  johnsPost4: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
  mikesPost: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
  jackiePost: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
  jackiePost2: {
    comments: [],
    likes: 0,
    likedBy: [],
  },
};

const interactionsSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    initializeInteractions: {
      reducer(state, action: { payload: { id: string } }) {
        const { id } = action.payload;

        state[id] = {
          comments: [],
          likes: 0,
          likedBy: [],
        };
      },

      prepare(id: string) {
        return { payload: { id } };
      },
    },

    commented: {
      reducer(state, action: CommentedAction) {
        const { postID, comment } = action.payload;

        const matchingPost = state[postID];

        if (matchingPost) {
          state[postID].comments.push(comment);
        }
      },
      prepare(user: User, post: Post, text: string): CommentedAction {
        return {
          payload: {
            postID: post.id,
            comment: {
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

    likedPost: {
      reducer(state, action: PostInteractionAction) {
        const { user, postID } = action.payload;

        // the interactions for the provided postID
        const interactions = state[postID];

        const userAlreadyLiked = interactions.likedBy.find(
          (u) => u.uuid === user.uuid
        );

        if (userAlreadyLiked) {
          const idx = interactions.likedBy.indexOf(userAlreadyLiked);
          interactions.likedBy.splice(idx, 1);
          interactions.likes--;
        } else {
          interactions.likedBy.push(user);
          interactions.likes++;
        }
      },
      prepare(user, post) {
        return { payload: { user: user, postID: post.id } };
      },
    },
  },
});

export const { initializeInteractions, commented, likedPost } =
  interactionsSlice.actions;

export const interactionsSelector = (state: RootState) => state.interactions;

export const interactionsSliceReducer = interactionsSlice.reducer;
