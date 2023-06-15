import Image from "next/image";
import hdots from "../assets/icons/hdots.svg";
import { ProfilePic } from "./ProfilePic";
import { HeartIcon } from "./HeartIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { AddComment } from "./AddComment";
import moment from "moment";

import commentIcon from "../assets/icons/comment.svg";

export const PostFocused = ({ post }) => {
  const commentsDisplayed = post.comments.map((comment) => (
    <div className="flex gap-3 text-sm">
      <ProfilePic picSrc={comment.authorProfilePicSrc} size={"small"} />
      <div>
        <span className="font-bold">{comment.authorHandle}</span>
        <p className="max-w-md break-all">{comment.text}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex min-w-max rounded-br-md rounded-tr-md bg-white">
        <Image src={post.imgSrc} height={500} width={500} alt="" />
        <div>
          <header className="flex items-center gap-3 border-b p-3 text-sm">
            <ProfilePic picSrc={post.author.profilePicSrc} size="small" />
            <div>
              <p className="font-bold">{post.author.handle}</p>
              <p>{post.location}</p>
            </div>
            <Image
              className="ml-auto"
              src={hdots}
              height={25}
              width={25}
              alt="options"
            />
          </header>
          <section className="CONTENT flex min-w-[300px] max-w-lg flex-col gap-2 p-3 text-sm">
            <div className="CAPTION flex gap-3">
              <ProfilePic picSrc={post.author.profilePicSrc} size={"small"} />
              <p className="text-md max-w-sm">
                {" "}
                <span className="font-bold">{post.author.handle}</span>{" "}
                {post.caption}
              </p>
            </div>

            {commentsDisplayed}

            <div className="INTERACTIONS mt-2 flex items-center gap-4 border-t pt-2">
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
              <p className="font-bold">{post.likes} likes</p>
              <p>{moment(post.timestamp).fromNow()}</p>
            </div>
            <div className="COMMENT h-[80px] ">
              <AddComment post={post} id={"comment"} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
