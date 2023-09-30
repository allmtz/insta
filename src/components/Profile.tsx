import Image from "next/image";
import { Post, User } from "../tipos/types";
import { ProfilePic } from "./ProfilePic";

import { nanoid } from "@reduxjs/toolkit";
import { FollowBtn } from "./FollowBtn";
import { useState } from "react";
import { Modal } from "./Modal";
import { List } from "./List";

import whiteHeart from "../assets/icons/white-heart.svg";
import whiteComment from "../assets/icons/white-comment.svg";

import { PostFocused } from "./PostFocused";
import {
  closeModal,
  modalSelector,
  openModal,
} from "../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetInteractions } from "../features/PostInteractions/getInteractions";

export const Profile = ({ user }: { user: User }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);
  const allInteractions = useGetInteractions();

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [focusedPost, setFocusedPost] = useState<Post | undefined>();

  const onModalClick = (e: React.MouseEvent) => {
    const { target } = e;
    // Move this check to the modal slice?
    if (target instanceof HTMLElement && target.classList.contains("MODAL")) {
      setShowFollowers(false);
      setShowFollowing(false);
      dispatch(closeModal());
    } else return;
  };

  const onFollowingClick = () => {
    setShowFollowing(true);
  };
  const onFollowersClick = () => {
    setShowFollowers(true);
  };

  const onPostClick = (post: Post) => {
    setFocusedPost(post);
    dispatch(openModal());
  };

  return (
    <>
      <header className="m-auto flex gap-20">
        <ProfilePic picSrc={user.profilePicSrc} size="large" />
        <div>
          <div className="INTERACTIONS flex items-center gap-7">
            <p className="font-bold">{user.handle}</p>
            <FollowBtn user={user} />
          </div>
          <div className="INFO mt-2 flex gap-4">
            <p>
              <span className="font-bold">{user.posts.length}</span> posts
            </p>
            <p className="cursor-pointer" onClick={onFollowersClick}>
              <span className="font-bold">{user.followers.length}</span>{" "}
              followers
            </p>
            <p className="cursor-pointer" onClick={onFollowingClick}>
              <span className="font-bold">{user.following.length}</span>{" "}
              following
            </p>
          </div>
          <div className="mt-2">
            <p className="font-semibold">{user.name}</p>
            <p className="max-w-sm break-all text-sm">{user.bio}</p>
          </div>
        </div>
      </header>
      <main>
        <div className="posts grid grid-cols-3 gap-1">
          {user.posts.map((post) => (
            <>
              <div
                onClick={() => onPostClick(post)}
                key={nanoid()}
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
            </>
          ))}
        </div>
      </main>

      {modal.showModal && (
        <Modal onClick={onModalClick}>
          <PostFocused post={focusedPost!} />
        </Modal>
      )}

      {showFollowers && (
        <Modal onClick={onModalClick}>
          <List
            setShowFollowing={setShowFollowing}
            setShowFollowers={setShowFollowers}
            user={user}
            listType="followers"
          ></List>
        </Modal>
      )}

      {showFollowing && (
        <Modal onClick={onModalClick}>
          <List
            setShowFollowing={setShowFollowing}
            setShowFollowers={setShowFollowers}
            user={user}
            listType="following"
          ></List>
        </Modal>
      )}
    </>
  );
};
