import { StaticImageData } from "next/image";

type userID = string;

export type Comment = {
  id: string;
  authorID: string;
  authorHandle: string;
  authorProfilePicSrc: string | StaticImageData;
  text: string;
  likes: number;
};

export type User = {
  uuid: string;
  handle: string;
  name: string;
  profilePicSrc: StaticImageData | string;
  postsLiked: { [postID: string]: Post };
  postsBookmarked: { [postID: string]: Post };
  posts: Post[];
  followers: userID[];
  following: userID[];
  bio: string;
};

export type Post = {
  id: string;
  timestamp: string;
  author: string;
  authorID: userID;
  caption: string;
  imgSrc: string | StaticImageData;
  location: string;
};
