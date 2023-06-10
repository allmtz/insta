import { StaticImageData } from "next/image";

export type User = {
  uuid: string;
  handle: string;
  profilePicSrc: StaticImageData;
  postsLiked: { [postID: string]: Post };
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
  comments: object;
  commentCount: number;
};
