import profilePicSrc from "./assets/profle.jpg";
import johnPic from "./assets/john.jpg";
import { Post, User } from "./tipos/types";
import img from "./assets/nature.jpg";
import pier from "./assets/pier.jpg";
import { nanoid } from "@reduxjs/toolkit";

const mike: User = {
  uuid: "20",
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
  followers: [mike],
  following: [mike],
};

export const johnsPost: Post = {
  author: john,
  id: "johnsPost",
  timestamp: "2023-06-13T06:14:00+0000",
  location: "Oceanside, California",
  likes: 2,
  likedBy: { [john.handle]: john, [mike.handle]: mike },
  comments: [
    {
      authorHandle: mike.handle,
      authorID: mike.uuid,
      id: nanoid(),
      likes: 0,
      text: "so sick!",
      authorProfilePicSrc: mike.profilePicSrc,
    },
    {
      authorHandle: john.handle,
      authorID: john.uuid,
      id: nanoid(),
      likes: 0,
      text: "thanks mike",
      authorProfilePicSrc: john.profilePicSrc,
    },
  ],
  commentCount: 2,
  caption: "try Hodad's",
  imgSrc: pier,
};

export const mikesPost: Post = {
  author: mike,
  id: "mikesPost",
  timestamp: "2023-06-09T04:00:00.977Z",
  location: "San Francisco, California",
  likes: 2,
  likedBy: { [john.handle]: john, [mike.handle]: mike },
  comments: [
    {
      authorHandle: john.handle,
      authorID: john.uuid,
      id: nanoid(),
      likes: 0,
      text: "love this",
      authorProfilePicSrc: john.profilePicSrc,
    },
  ],
  commentCount: 1,
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
