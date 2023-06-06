export type Post = {
  id: string;
  timeStamp: string;
  author: string;
  content: string;
  imgSrc: string;
  location: string;
  likes: number;
  likedBy: object;
  comments: object;
  commentCount: number;
};
