import { Post, User } from "../tipos/types";
import whiteHeart from "../assets/icons/white-heart.svg";
import whiteComment from "../assets/icons/white-comment.svg";
import { nanoid } from "@reduxjs/toolkit";
import Image from "next/image";
import { useGetInteractions } from "../features/PostInteractions/getInteractions";
import { openModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";

export const ProfilePostDisplay = ({
  posts,
  setFocusedPost,
}: {
  posts: Post[];
  setFocusedPost: any;
}) => {
  const dispatch = useDispatch();
  const allInteractions = useGetInteractions();

  const onPostClick = (post: Post) => {
    setFocusedPost(post);
    dispatch(openModal());
  };

  return (
    <div className="posts grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <div key={nanoid()}>
          <div
            onClick={() => onPostClick(post)}
            className="PROFILE-POST relative cursor-pointer"
          >
            <Image src={post.imgSrc} height={300} width={300} alt="" />
            <div className="OVERLAY absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <div className="flex gap-2 text-xl text-white">
                <Image src={whiteHeart} alt=""></Image>
                <p>{post && allInteractions[post.id].likedBy.length}</p>

                <Image src={whiteComment} alt="" className="ml-5"></Image>
                <p>{post && allInteractions[post.id].comments.length}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
