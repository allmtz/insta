import profilePicSrc from "./assets/profile/mike.jpg";
import johnPic from "./assets/profile/john.jpg";
import { Post, User } from "./tipos/types";
import defaultProfilePic from "./assets/profile/default.jpeg";
import jackie from "./assets/profile/jackie.jpeg";
import basketBall from "./assets/posts/bball.jpg";
import hoop from "./assets/posts/hoop.jpg";

export const mockPosts: Post[] = [
  {
    authorID: "1",
    id: "johnsPost",
    author: "jsmith",
    timestamp: "2023-10-19T22:14:00+0000",
    location: "CA",
    caption: "Spring",
    imgSrc: "https://picsum.photos/id/152/320/300",
  },
  {
    authorID: "1",
    id: "johnsPost2",
    author: "jsmith",
    timestamp: "2023-10-18T06:14:00+0000",
    location: "Nature",
    caption: "🌳",
    imgSrc: "https://picsum.photos/id/28/320/300",
  },
  {
    authorID: "1",
    id: "johnsPost3",
    author: "jsmith",
    timestamp: "2023-10-18T16:14:00+0000",
    location: "London",
    caption: "Lorem Ipsum sit amet.",
    imgSrc: "https://picsum.photos/id/57/320/300",
  },
  {
    authorID: "1",
    id: "johnsPost4",
    author: "jsmith",
    timestamp: "2023-10-19T04:14:00+0000",
    location: "Movies",
    caption: "Lorem Ipsum sit amet.",
    imgSrc: "https://picsum.photos/id/153/320/300",
  },
  {
    authorID: "2",
    id: "mikesPost",
    author: "mike",
    timestamp: "2023-10-19T15:14:00+0000",
    location: "Cuba",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore.",
    imgSrc: "https://picsum.photos/id/133/320/300",
  },
  {
    authorID: "4",
    id: "jackiePost",
    author: "jmoon",
    timestamp: "2023-10-10T04:00:00.977Z",
    location: "",
    caption: "",
    imgSrc: hoop,
  },
  {
    authorID: "4",
    id: "jackiePost2",
    author: "jmoon",
    timestamp: "2023-10-19T12:00:00.977Z",
    location: "",
    caption: "",
    imgSrc: basketBall,
  },
];

export const mockUsers: User[] = [
  {
    uuid: "1",
    handle: "jsmith",
    name: "John Smith",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit.",
    profilePicSrc: johnPic,
    postsLiked: {},
    postsBookmarked: {},
    posts: mockPosts.filter((p) => p.authorID === "1"),
    followers: [],
    following: [],
  },
  {
    uuid: "2",
    handle: "mike",
    name: "Mike Michaels",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum laudantium dolore. Commodi temporibus saepe animi",
    profilePicSrc: profilePicSrc,
    postsLiked: {},
    postsBookmarked: {},
    posts: mockPosts.filter((p) => p.authorID === "2"),
    followers: [],
    following: [],
  },
  {
    uuid: "3",
    handle: "mock",
    name: "Mock User",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, dolores laborum. Distinctio autem cumque provident doloremque obcaecati.",
    profilePicSrc: defaultProfilePic,
    postsLiked: {},
    postsBookmarked: {},
    posts: [],
    followers: [],
    following: [],
  },
  {
    uuid: "4",
    handle: "jmoon",
    name: "Jackie Moon",
    bio: `Go Tropics!`,
    profilePicSrc: jackie,
    postsLiked: {},
    postsBookmarked: {},
    posts: mockPosts.filter((p) => p.authorID === "4"),
    followers: [],
    following: [],
  },
];
