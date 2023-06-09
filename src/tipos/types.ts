import { StaticImageData } from "next/image";

export type User = {
  handle: string;
  profilePicSrc: StaticImageData;
  uuid: string;
};

export type Post = {
  id: string;
  timestamp: string;
  author: User;
  caption: string;
  imgSrc: string | StaticImageData;
  location: string;
  likes: number;
  likedBy: object;
  comments: object;
  commentCount: number;
};
