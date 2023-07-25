import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../tipos/types";
import { RootState } from "../../store";

//mock users
import { john, mike } from "../../mockData";

//normalize this for faster lookup?
const initialState: User[] = [john, mike];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    followEvent: {
      reducer(
        state,
        action: { payload: { currentUser: User; targetUser: User } }
      ) {
        const { currentUser, targetUser } = action.payload;

        const cu = state.find((u) => u.uuid === currentUser.uuid);
        const tu = state.find((u) => u.uuid === targetUser.uuid);

        // check if the user is already following the target user
        const following = cu?.following.find(
          (uuid) => uuid === targetUser.uuid
        );

        if (cu && tu) {
          if (following) {
            //stop following
            const idx = cu.following.indexOf(following);
            cu.following.splice(idx, 1);

            //remove current user from targets followers
            const match = tu.followers.find((uuid) => uuid === cu.uuid);
            const i = tu.followers.indexOf(match!);
            tu.followers.splice(i, 1);
          } else {
            // start following
            cu.following.push(tu.uuid);

            // update the target users followers
            tu.followers.push(cu.uuid);
          }
        }
      },
      prepare(currentUser, targetUser) {
        return {
          payload: {
            currentUser,
            targetUser,
          },
        };
      },
    },
  },
});

export const { followEvent } = usersSlice.actions;

export const usersSelector = (state: RootState) => state.users;

export const usersReducer = usersSlice.reducer;
