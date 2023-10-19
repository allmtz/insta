import { useSelector } from "react-redux";
import { postsSelector } from "../features/posts/postsSlice";
import { Post } from "./Post";
import { nanoid } from "@reduxjs/toolkit";

export const Feed = () => {
  const posts = useSelector(postsSelector);

  // order the posts newest to oldest
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1;
  });

  const postsDisplayed = sortedPosts.map((post) => (
    <Post post={post} key={nanoid()} />
  ));

  return (
    <div className="POSTS-LAYOUT m-auto my-5 flex h-fit w-fit flex-col gap-8 ">
      {postsDisplayed}
    </div>
  );
};
