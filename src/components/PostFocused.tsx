import Image from "next/image";
import { ProfilePic } from "./ProfilePic";
import { HeartIcon } from "./HeartIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { AddComment } from "./AddComment";
import moment from "moment";

import commentIcon from "../assets/icons/comment.svg";
import { useSelector } from "react-redux";
import { interactionsSelector } from "../features/PostInteractions/interactionsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { ScrollArea } from "./shadcn/scroll-area";
import { Post } from "../tipos/types";
import Link from "next/link";
import { LikedBy } from "./LikedBy";
import { useState } from "react";
import { findUser } from "../features/users/findUser";

export const PostFocused = ({ post }: { post: Post }) => {
  const [showLikedBy, setShowLikedBy] = useState(false);

  const allInteractions = useSelector(interactionsSelector);
  const postInteractions = allInteractions[post.id];

  // NOTE: not handling the case of author being undefined
  const author = findUser(post.authorID);

  const profileLink = `/profile/${author!.uuid}`;

  const comments = postInteractions.comments;
  const commentsDisplayed = comments.map((comment) => (
    <div key={nanoid()} className="items-top mt-2 flex gap-3 text-sm">
      <Link href={`/profile/${comment.authorID}`}>
        <ProfilePic picSrc={comment.authorProfilePicSrc} size={"small"} />
      </Link>
      <p className="max-w-[320px]">
        <Link href={`/profile/${comment.authorID}`}>
          <span className="font-bold">{comment.authorHandle}</span>
        </Link>{" "}
        <span className="break-all">{comment.text}</span>
      </p>
    </div>
  ));

  const handleLikesClick = () => {
    setShowLikedBy(true);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const { target } = e;

    if (target instanceof HTMLElement && target.classList.contains("MODAL")) {
      setShowLikedBy(false);
    }
  };

  return (
    <>
      <div className="flex min-w-max rounded-br-md rounded-tr-md bg-white">
        <Image src={post.imgSrc} height={500} width={500} alt="" />
        <div>
          <div className="flex items-center border-b p-3 text-sm">
            <Link
              href={`/profile/${author!.uuid}`}
              className="flex items-center gap-3"
            >
              <ProfilePic picSrc={author!.profilePicSrc} size="small" />
              <div>
                <p className="font-bold">{author!.handle}</p>
                <p>{post.location}</p>
              </div>
            </Link>
          </div>

          <section className="CONTENT flex min-w-[300px] max-w-lg flex-col gap-2 p-3 text-sm">
            <ScrollArea className=" h-[200px] w-[400px] border-b pb-2">
              <div className="CAPTION flex gap-3">
                <Link href={profileLink}>
                  <ProfilePic picSrc={author!.profilePicSrc} size={"small"} />
                </Link>
                <p className="max-w-[320px]">
                  <Link href={profileLink} className="font-bold">
                    {author!.handle}
                  </Link>{" "}
                  <span className="break-all">{post.caption}</span>
                </p>
              </div>
              {commentsDisplayed}
            </ScrollArea>

            <div className="INTERACTIONS HERE mt-2 flex items-center gap-4">
              <HeartIcon post={post} />

              <label htmlFor="comment">
                <Image
                  src={commentIcon}
                  className="cursor-pointer hover:scale-105"
                  height={25}
                  width={25}
                  alt="comment"
                ></Image>
              </label>
              <div className="ml-auto">
                <BookmarkIcon post={post} />
              </div>
            </div>
            <div className="POST-INFO border-b pb-2">
              <p
                className="cursor-pointer font-bold"
                onClick={() => handleLikesClick()}
              >
                {postInteractions.likes} likes
              </p>
              <p>{moment(post.timestamp).fromNow()}</p>
            </div>
            <div className="COMMENT h-[80px] ">
              <AddComment post={post} id={"comment"} />
            </div>
          </section>
        </div>
      </div>

      {showLikedBy && (
        <div
          className="MODAL fixed right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-70"
          onClick={(e) => handleModalClick(e)}
        >
          <LikedBy post={post} />
        </div>
      )}
    </>
  );
};
