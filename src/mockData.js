import profilePic from "./assets/profle.jpg";

const user = {};
const comment = { author: "", authorID: 0, likes: 2, timeStamp: "" };
const post = {};

export const mockPostState = {
  author: { name: "johnthedon" },
  id: 1,
  timeStamp: "10m",
  location: "Oceanside, California",
  likes: 10,
  likedBy: { userID: user },
  comments: { userID: comment },
  commentCount: 23,
  // isBookmarked: false, keep this in `user` state ?
  caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore. Commodi temporibus saepe animi pariatur, libero culpa provident.",
};

export const mockUserState = {
  name: "machoman",
  profilePicSrc: profilePic,
  postsLiked: { postID: post },
  postsBookmarked: { postID: post },
};
