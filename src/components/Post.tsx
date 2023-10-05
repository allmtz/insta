import Image from "next/image";

import { Post as TPost } from "../tipos/types";

import commentBtn from "../assets/icons/comment.svg";
import horizontalDots from "../assets/icons/hdots.svg";

import { getTimeAgo } from "../helpers/getTimeAgo";

import { ProfilePic } from "./ProfilePic";
import { useSelector } from "react-redux";
import { HeartIcon } from "./HeartIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { AddComment } from "./AddComment";
import { useState } from "react";
import { PostFocused } from "./PostFocused";
import { Modal } from "./Modal";
import Link from "next/link";
import { PostInteractionList } from "./PostInteractionList";
import { LikedBy } from "./LikedBy";
import { interactionsSelector } from "../features/PostInteractions/interactionsSlice";
import { usersSelector } from "../features/users/usersSlice";

const imageWidth = 320;
const captionStyle = {
  320: `max-w-[320px] flex flex-col gap-1`,
};

export const Post = ({ post }: { post: TPost }) => {
  const allInteractions = useSelector(interactionsSelector);
  const postInteractions = allInteractions[post.id];
  const users = useSelector(usersSelector);

  const { comments, likes } = postInteractions;

  const [showFocusedPost, setShowFocusedPost] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLikedBy, setShowLikedBy] = useState(false);

  const onModalClick = (e: any) => {
    if (e.target.classList.contains("MODAL")) {
      setShowFocusedPost(false);
      setShowSettings(false);
      setShowLikedBy(false);
    } else return;
  };

  const onViewCommentsClick = () => {
    setShowFocusedPost(true);
  };

  const onHdotsClick = () => {
    setShowSettings(true);
  };

  const onLikesClick = () => {
    setShowLikedBy(true);
  };

  const {
    id,
    timestamp,
    author: handle,
    authorID,
    caption,
    imgSrc,
    location,
  } = post;

  const author = users.find((u) => u.uuid === authorID);

  return (
    <div className="POST flex flex-col gap-2 border-b">
      <header className="POST-HEADER flex justify-between gap-4">
        <Link href={`/profile/${handle}`} className="flex gap-2 ">
          <ProfilePic picSrc={author?.profilePicSrc || ""} size={"small"} />
          <div className="flex flex-col justify-center">
            <p className="">
              <span className="font-semibold">{author?.handle} </span>
              <span className="text-gray-500">•</span>{" "}
              <span className="text-gray-500">{getTimeAgo(timestamp)}</span>
            </p>
            <p className="text-xs">{location}</p>
          </div>
        </Link>

        <Image
          src={horizontalDots}
          width={25}
          height={25}
          alt=""
          onClick={() => onHdotsClick()}
          className="cursor-pointer"
        ></Image>
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
            onClick={() => onViewCommentsClick()}
          ></Image>
        </div>
        <BookmarkIcon post={post} />
      </div>
      <div className={captionStyle[320]}>
        <p
          className="cursor-pointer font-semibold"
          onClick={() => {
            onLikesClick();
          }}
        >
          {likes} likes
        </p>

        <div>
          <Link href={`/profile/${handle}`} className="font-semibold">
            {author?.handle}
          </Link>{" "}
          {caption}
        </div>
        <div>
          <p
            className="cursor-pointer text-gray-500"
            onClick={() => onViewCommentsClick()}
          >
            View all {comments.length} comments
          </p>
          <AddComment post={post} id="" />
        </div>
      </div>

      {showSettings && (
        <Modal onClick={onModalClick}>
          <PostInteractionList post={post} />
        </Modal>
      )}

      {showFocusedPost && (
        <Modal onClick={onModalClick}>
          <PostFocused post={post} />
        </Modal>
      )}

      {showLikedBy && (
        <Modal onClick={onModalClick}>
          <LikedBy post={post} />
        </Modal>
      )}
    </div>
  );
};
