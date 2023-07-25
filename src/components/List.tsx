import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { FollowBtn } from "./FollowBtn";
import { ProfilePic } from "./ProfilePic";
import { User } from "../tipos/types";
import { usersSelector } from "../features/users/usersSlice";

type ListProps = {
  user: User;
  listType: "followers" | "following";
};

export const List = ({ user, listType }: ListProps) => {
  const users = useSelector(usersSelector);

  const allConnections = new Set(user[listType]);

  // filter out users who aren't in the `listType`
  const show = users.filter((u) => allConnections.has(u.uuid));

  const capitalizedListType =
    `${listType[0].toUpperCase()}` + listType.slice(1);

  const display = show.map((u) => (
    <div key={nanoid()} className="flex items-center gap-2 p-2">
      <ProfilePic picSrc={u.profilePicSrc} size="small" />
      <p className="mr-auto">{u.handle}</p>
      <FollowBtn user={u} />
    </div>
  ));

  return (
    <div className="min-w-[300px] rounded-md bg-white pb-2">
      <h2 className="border-b py-2 text-center">{capitalizedListType}</h2>
      <ScrollArea className="px-2">{display}</ScrollArea>
    </div>
  );
};
