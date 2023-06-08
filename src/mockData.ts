import profilePicSrc from "./assets/profle.jpg";
import { Post } from "./tipos/types";

const user = {};
const comment = { author: "", authorID: 0, likes: 2, timeStamp: "" };
const post = {};

export const mockPostState: Post = {
  author: { handle: "johnthedon", profilePicSrc, uuid: "1" },
  id: "og",
  timestamp: "10m",
  location: "Oceanside, California",
  likes: 10,
  likedBy: { uuid: user },
  comments: { uuid: comment },
  commentCount: 23,
  // isBookmarked: false, keep this in `user` state ?
  caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore. Commodi temporibus saepe animi pariatur, libero culpa provident.",
  imgSrc: "",
};

export const mockUserState = {
  name: "machoman",
  profilePicSrc: profilePicSrc,
  postsLiked: { postID: post },
  postsBookmarked: { postID: post },
};
