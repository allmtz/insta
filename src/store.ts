import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { postsReducer } from "./features/posts/postsSlice";
import { userReducer } from "./features/user/userSlice";
import { usersReducer } from "./features/users/usersSlice";

export function makeStore() {
  return configureStore({
    reducer: { posts: postsReducer, user: userReducer, users: usersReducer },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// figure this out later
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,a
//   unknown,
//   Action<string>
// >

export default store;
