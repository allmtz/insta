import { useSelector } from "react-redux";
import { Post } from "../tipos/types";
import { ProfilePic } from "./ProfilePic";
import { userSelector } from "../features/user/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { interactionsSelector } from "../features/PostInteractions/interactionsSlice";
import { FollowBtn } from "./FollowBtn";
import { ScrollArea } from "./shadcn/scroll-area";

export const LikedBy = ({ post }: { post: Post }) => {
  const user = useSelector(userSelector);

  const allInteractions = useSelector(interactionsSelector);
  const postInteractions = allInteractions[post.id];

  const displayUsersWhoLiked = postInteractions.likedBy.map((u) => (
    <div key={nanoid()} className="flex items-center gap-2 p-2">
      <ProfilePic picSrc={u.profilePicSrc} size="sm" />
      <p className="mr-auto">{u.handle}</p>
      <FollowBtn user={u} />
    </div>
  ));

  return (
    <div className="min-w-[300px] rounded-md bg-white pb-2">
      <h2 className="border-b py-2 text-center">Likes</h2>
      <ScrollArea className="px-2">{displayUsersWhoLiked}</ScrollArea>
    </div>
  );
};
