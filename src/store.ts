import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { postsReducer } from "./features/Post/postsSlice";

export function makeStore() {
  return configureStore({
    reducer: { posts: postsReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// figure this out later
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,a
//   unknown,
//   Action<string>
// >

export default store;
