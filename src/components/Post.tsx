import Image from "next/image";

import { Post as TPost } from "../tipos/types";

import likeBtn from "../assets/icons/like.svg";
import commentBtn from "../assets/icons/comment.svg";
import horizontalDots from "../assets/icons/hdots.svg";
import bookmark from "../assets/icons/bookmark.svg";

import { getTimeAgo } from "../helpers/getTimeAgo";

import { ProfilePic } from "./ProfilePic";
import { useDispatch, useSelector } from "react-redux";
import { postLiked } from "../features/posts/postsSlice";
import { userSelector } from "../features/user/userSlice";

const imageWidth = 320;
const captionStyle = {
  320: `max-w-[320px] flex flex-col gap-1`,
};

export const Post = ({ post }: { post: TPost }) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const {
    id,
    timestamp,
    author,
    caption,
    imgSrc,
    location,
    likes,
    likedBy,
    comments,
    commentCount,
  } = post;

  const onLikeClick = (post: TPost) => {
    dispatch(postLiked({ post, user }));
  };
  return (
    <div className="POST flex max-w-fit flex-col gap-2 border-b pb-4">
      <header className="POST-HEADER flex justify-between gap-4">
        <div className="flex gap-2 ">
          <ProfilePic picSrc={author.profilePicSrc} />
          <div className="flex flex-col justify-center">
            <p className="">
              <span className="font-semibold">{author.handle} </span>
              <span className="text-gray-500">•</span>{" "}
              <span className="text-gray-500">{getTimeAgo(timestamp)}</span>
            </p>
            <p className="text-xs">{location}</p>
          </div>
        </div>

        <Image src={horizontalDots} width={25} height={10} alt=""></Image>
      </header>
      <Image
        className="POST-PIC rounded-sm"
        src={imgSrc}
        height={300}
        width={imageWidth}
        alt=""
      ></Image>
      <div className="POST-INTERACTIONS flex justify-between ">
        <div className="flex items-center gap-2 ">
          <Image
            src={likeBtn}
            height={30}
            width={30}
            alt="like"
            onClick={() => onLikeClick(post)}
          ></Image>
          <Image src={commentBtn} height={25} width={25} alt="comment"></Image>
        </div>
        <Image
          className="justify-self-end"
          src={bookmark}
          height={25}
          width={25}
          alt="bookmark"
        ></Image>
      </div>
      <div className={captionStyle[320]}>
        <p className="font-semibold">{likes} likes</p>
        <p>
          <span className="font-semibold">{author.handle} </span> {caption}{" "}
        </p>
        <div>
          <p className="text-gray-500 "> View all {commentCount} comments</p>
          <p className="COMMENTS"></p>
          <p className="text-gray-500">Add a comment...</p>
        </div>
      </div>
    </div>
  );
};
