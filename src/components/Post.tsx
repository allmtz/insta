import Image from "next/image";

import { Post as TPost } from "../tipos/types";

import commentBtn from "../assets/icons/comment.svg";
import horizontalDots from "../assets/icons/hdots.svg";

import { getTimeAgo } from "../helpers/getTimeAgo";

import { ProfilePic } from "./ProfilePic";
// import { useDispatch, useSelector } from "react-redux";
// import { userSelector } from "../features/user/userSlice";
import { HeartIcon } from "./HeartIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { AddComment } from "./AddComment";
import { useState } from "react";
import { PostFocused } from "./PostFocused";
import { Modal } from "./Modal";

const imageWidth = 320;
const captionStyle = {
  320: `max-w-[320px] flex flex-col gap-1`,
};

export const Post = ({ post }: { post: TPost }) => {
  // const user = useSelector(userSelector);
  // const dispatch = useDispatch();

  const [showFocusedPost, setShowFocusedPost] = useState(false);

  const onModalClick = (e: any) => {
    if (e.target.classList.contains("MODAL")) {
      setShowFocusedPost((showFocusedPost) => !showFocusedPost);
    } else return;
  };

  const onViewCommentsClick = (post: TPost) => {
    setShowFocusedPost(true);
  };

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

  return (
    <div className="POST flex max-w-fit flex-col gap-2 border-b">
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

        <Image src={horizontalDots} width={25} height={25} alt=""></Image>
      </header>
      <Image
        className="POST-PIC h-auto w-auto rounded-sm"
        src={imgSrc}
        height={320}
        width={imageWidth}
        alt=""
      ></Image>
      <div className="POST-INTERACTIONS flex justify-between ">
        <div className="flex items-center gap-2 ">
          <HeartIcon post={post} />
          <Image
            src={commentBtn}
            className="cursor-pointer hover:scale-105"
            height={25}
            width={25}
            alt="comment"
            onClick={() => onViewCommentsClick(post)}
          ></Image>
        </div>
        <BookmarkIcon post={post} />
      </div>
      <div className={captionStyle[320]}>
        <p className="font-semibold">{likes} likes</p>
        <p>
          <span className="font-semibold">{author.handle} </span> {caption}{" "}
        </p>
        <div>
          <p
            className="cursor-pointer text-gray-500"
            onClick={() => onViewCommentsClick(post)}
          >
            View all {commentCount} comments
          </p>
          <AddComment post={post} id="" />
        </div>
      </div>
      {showFocusedPost && (
        <Modal onClick={onModalClick}>
          <PostFocused post={post} />
        </Modal>
      )}
    </div>
  );
};
