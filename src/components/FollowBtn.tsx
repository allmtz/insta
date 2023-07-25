import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import { User } from "../tipos/types";
import { followEvent, usersSelector } from "../features/users/usersSlice";

// user here is the "target" user
type FollowBtnProps = { user: User };

export const FollowBtn = ({ user }: FollowBtnProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);

  const allUsers = useSelector(usersSelector);

  // this is used to render the UI based on the data in the global `users` state
  const currUserInListOfUsers = allUsers.find(
    (u) => u.uuid === currentUser.uuid
  );

  const onFollowClick = (targetUser: User) => {
    dispatch(followEvent(currentUser, targetUser));
  };

  return (
    <>
      {/* don't display a follow button for the current user  */}
      {currUserInListOfUsers?.uuid === user.uuid ? (
        ""
      ) : (
        <button
          className="rounded-md bg-blue-400 px-6 py-1 font-bold text-white hover:bg-blue-600"
          onClick={() => onFollowClick(user)}
        >
          {currUserInListOfUsers?.following.some((uuid) => uuid === user.uuid)
            ? "Unfollow"
            : "Follow"}
        </button>
      )}
    </>
  );
};
