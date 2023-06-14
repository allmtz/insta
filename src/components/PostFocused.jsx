import Image from "next/image";
import hdots from "../assets/icons/hdots.svg";
import { ProfilePic } from "./ProfilePic";
import { HeartIcon } from "./HeartIcon";
import { BookmarkIcon } from "./BookmarkIcon";
import { getTimeAgo } from "../helpers/getTimeAgo";
import { AddComment } from "./AddComment";

export const PostFocused = ({ post }) => {
  const commentsDisplayed = post.comments.map((comment) => (
    <div className="flex gap-1">
      <ProfilePic picSrc={comment.authorProfilePicSrc} />
      <div>
        <span className="font-bold">{comment.authorHandle}</span>
        <p>{comment.text}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex bg-white">
        <Image src={post.imgSrc} height={500} width={500} />
        <div>
          <header className="flex items-center gap-2 p-2">
            <ProfilePic picSrc={post.author.profilePicSrc} />
            <p>{post.author.handle}</p>
            <Image
              className="ml-auto"
              src={hdots}
              height={25}
              width={25}
              alt="options"
            />
          </header>
          <section className="CONTENT flex flex-col gap-2 p-2">
            <div className="CAPTION flex">
              <ProfilePic picSrc={post.author.profilePicSrc} />
              <p>
                {" "}
                <span>{post.author.handle}</span>
                {post.caption}
              </p>
            </div>

            {commentsDisplayed}

            <div className="INTERACTIONS flex gap-4">
              <HeartIcon post={post} />
              <BookmarkIcon post={post} />
            </div>
            <div className="POST-INFO">
              <p>{post.likes} likes</p>
              <p>{getTimeAgo(post.timestamp)}</p>
            </div>
            <div className="COMMENT">
              <AddComment post={post} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
