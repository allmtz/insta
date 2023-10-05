import profilePicSrc from "./assets/profle.jpg";
import johnPic from "./assets/john.jpg";
import { Post, User } from "./tipos/types";
import img from "./assets/nature.jpg";
import pier from "./assets/pier.jpg";

const mike: User = {
  uuid: "2",
  handle: "machoman",
  name: "Mike Michaels",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore. Commodi temporibus saepe animi",
  profilePicSrc: profilePicSrc,
  postsLiked: {},
  postsBookmarked: {},
  posts: [],
  followers: [],
  following: [],
};

const john: User = {
  uuid: "1",
  handle: "johnthedon",
  name: "John Smith",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.",
  profilePicSrc: johnPic,
  postsLiked: {},
  postsBookmarked: {},
  posts: [],
  followers: [],
  following: [],
};

export const johnsPost: Post = {
  authorID: "1",
  id: "johnsPost",
  author: "johnthedon",
  timestamp: "2023-06-13T06:14:00+0000",
  location: "Oceanside, California",
  caption: "try Hodad's",
  imgSrc: pier,
};

export const mikesPost: Post = {
  authorID: "2",
  id: "mikesPost",
  author: "machoman",
  timestamp: "2023-06-09T04:00:00.977Z",
  location: "San Francisco, California",
  caption:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore.",
  imgSrc: img,
};

// chicken or the egg?
// mike.posts.push(mikesPost);
// mike.postsLiked[johnsPost.id] = johnsPost;
// mike.followers.push(john);
// mike.following.push(john);
// john.posts.push(johnsPost);

export const initialPosts = [mikesPost, johnsPost];
export { john, mike };
