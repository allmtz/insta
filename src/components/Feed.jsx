import Image from "next/image";
import { mockPostState } from "../mockData";
import postImage from "../assets/nature.jpg";
import profilePic from "../assets/profle.jpg";
import likeBtn from "../assets/icons/like.svg";
import commentBtn from "../assets/icons/comment.svg";
import horizontalDots from "../assets/icons/hdots.svg";
import bookmark from "../assets/icons/bookmark.svg";

const imageWidth = 320;
const captionStyle = `max-w-[${String(imageWidth)}px] flex flex-col gap-1`;

export const Feed = () => {
  return (
    <>
      <div className="POSTS-LAYOUT m-auto h-fit w-fit pt-8">
        <div className="POSTS">
          <div className="POST flex flex-col gap-2 max-w-fit">
            <header className="POST-HEADER flex justify-between gap-4">
              <div className="flex gap-2 ">
                <Image
                  className="PROFILE-PIC rounded-full h-10 w-10 object-cover object-top"
                  height={64}
                  width={64}
                  src={profilePic}
                ></Image>
                <div className="flex flex-col justify-center">
                  <p className="">
                    <span className="font-semibold">
                      {mockPostState.author.name}{" "}
                    </span>
                    <span className="text-gray-500">•</span>{" "}
                    <span className="text-gray-500">
                      {mockPostState.timeStamp}{" "}
                    </span>
                  </p>
                  <p className="text-xs">{mockPostState.location}</p>
                </div>
              </div>

              <Image src={horizontalDots} width={25} height={10}></Image>
            </header>
            <Image
              className="POST-PIC rounded-sm"
              src={postImage}
              height={300}
              width={imageWidth}
            ></Image>
            <div className="POST-INTERACTIONS flex justify-between ">
              <div className="flex items-center gap-2 ">
                <Image src={likeBtn} height={30} width={30}></Image>
                <Image src={commentBtn} height={25} width={25}></Image>
              </div>
              <Image
                className="justify-self-end"
                src={bookmark}
                height={25}
                width={25}
              ></Image>
            </div>
            <div className={captionStyle}>
              <p className="font-semibold">{mockPostState.likes} likes</p>
              <p>
                <span className="font-semibold">
                  {mockPostState.author.name}{" "}
                </span>{" "}
                {mockPostState.caption}{" "}
              </p>
              <div>
                <p className="text-gray-500 ">
                  {" "}
                  View all {mockPostState.commentCount} comments
                </p>
                <p className="COMMENTS"></p>
                <p className="text-gray-500">Add a comment...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
