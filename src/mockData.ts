import profilePicSrc from "./assets/profle.jpg";
import { Post, User } from "./tipos/types";
import img from "./assets/nature.jpg";

const comment = {
  author: "",
  authorID: 0,
  likes: 2,
  timeStamp: "",
};

const john: User = {
  uuid: "1",
  handle: "johnthedon",
  profilePicSrc,
  postsLiked: {},
  postsBookmarked: {},
};

export const mockPostState: Post = {
  author: john,
  id: "og",
  timestamp: "2023-06-09T04:00:00.977Z",
  location: "Oceanside, California",
  likes: 10,
  likedBy: { [john.handle]: john },
  comments: [],
  commentCount: 23,
  caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore. Commodi temporibus saepe animi pariatur, libero culpa provident.",
  imgSrc: img,
};

export const mockUserState: User = {
  uuid: "20",
  handle: "machoman",
  profilePicSrc: profilePicSrc,
  postsLiked: { postID: mockPostState },
  postsBookmarked: {},
};
