import { useDispatch, useSelector } from "react-redux";
import { Post, User } from "../tipos/types";
import { ProfilePic } from "./ProfilePic";
import { followEvent, userSelector } from "../features/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";

export const LikedBy = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const onFollowClick = (targetUser: User) => {
    dispatch(followEvent(targetUser));
  };

  // display all the users who like the post. Determine the content of the "Follow" button
  const displayLikedBy = Object.keys(post.likedBy).map((u) => (
    <div key={nanoid()} className="flex items-center gap-2 p-2">
      <ProfilePic picSrc={post.likedBy[u].profilePicSrc} size="small" />
      <p>{u}</p>
      {post.likedBy[u].uuid !== user.uuid && (
        <button
          className="ml-auto rounded-md bg-blue-400 px-6 py-1 font-bold text-white hover:bg-blue-600"
          onClick={() => onFollowClick(post.likedBy[u])}
        >
          {user.following.some((usr) => usr.uuid === post.likedBy[u].uuid)
            ? "Unfollow"
            : "Follow"}
        </button>
      )}
    </div>
  ));

  return (
    <div className="min-w-[300px] rounded-md bg-white">
      <h2 className="border-b py-2 text-center">Likes</h2>
      <div className="flex flex-col px-2">{displayLikedBy}</div>
    </div>
  );
};
