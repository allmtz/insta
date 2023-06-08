import { useSelector } from "react-redux";
import { postsSelector } from "../features/Post/postsSlice";
import { Post } from "./Post";
import { nanoid } from "@reduxjs/toolkit";

export const Feed = () => {
  const posts = useSelector(postsSelector);

  const postsDisplayed = posts.map((post) => (
    <Post post={post} key={nanoid()} />
  ));

  return (
    <div className="POSTS-LAYOUT m-auto my-5 flex h-fit w-fit flex-col gap-8 ">
      {postsDisplayed}
    </div>
  );
};
