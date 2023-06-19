import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followEvent, userSelector } from "../features/user/userSlice";
import { User } from "../tipos/types";

type FollowBtnProps = { user: User };

export const FollowBtn = ({ user }: FollowBtnProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);

  const onFollowClick = (targetUser: User) => {
    dispatch(followEvent(targetUser));
  };

  return (
    <button
      className="rounded-md bg-blue-400 px-6 py-1 font-bold text-white hover:bg-blue-600"
      onClick={() => onFollowClick(user)}
    >
      {currentUser.following.some((u) => u.uuid === user.uuid)
        ? "Unfollow"
        : "Follow"}
    </button>
  );
};
