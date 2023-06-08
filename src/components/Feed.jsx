import Image from "next/image";

import { useSelector } from "react-redux";
import { postsSelector } from "../features/Post/postsSlice";
import { Post } from "./Post";

export const Feed = () => {
  const posts = useSelector(postsSelector);

  // this goes in `Feed` or `Posts`
  const postsDisplayed = posts.map((post) => <Post post={post} />);

  console.log(postsDisplayed);
  return (
    <>
      <div className="POSTS-LAYOUT m-auto my-5 h-fit w-fit ">
        <div className="POSTS flex flex-col gap-8">{postsDisplayed}</div>
      </div>
    </>
  );
};
