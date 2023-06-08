import { StaticImageData } from "next/image";

export type Author = {
  handle: string;
  profilePicSrc: StaticImageData;
  uuid: string;
};

export type Post = {
  id: string;
  timestamp: string;
  author: Author;
  caption: string;
  imgSrc: string;
  location: string;
  likes: number;
  likedBy: object;
  comments: object;
  commentCount: number;
};
