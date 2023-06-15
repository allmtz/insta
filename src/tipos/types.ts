import { StaticImageData } from "next/image";

export type Comment = {
  id: string;
  authorID: string;
  authorHandle: string;
  authorProfilePicSrc: string;
  text: string;
  likes: number;
};

export type Users = User[];

export type User = {
  uuid: string;
  handle: string;
  name: string;
  profilePicSrc: StaticImageData;
  postsLiked: { [postID: string]: Post };
  postsBookmarked: { [postID: string]: Post };
  posts: Post[];
  followers: Users;
  following: Users;
  bio: string;
};

export type Post = {
  id: string;
  timestamp: string;
  author: User;
  caption: string;
  imgSrc: string | StaticImageData;
  location: string;
  likes: number;
  likedBy: Record<string, User>;
  comments: Comment[];
  commentCount: number;
};
