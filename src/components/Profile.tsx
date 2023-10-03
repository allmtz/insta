import { Post, User } from "../tipos/types";
import { ProfilePic } from "./ProfilePic";

import { FollowBtn } from "./FollowBtn";
import { useState } from "react";
import { Modal } from "./Modal";
import { List } from "./List";

import { PostFocused } from "./PostFocused";
import { closeModal, modalSelector } from "../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../features/user/useCurrentUser";
import { ProfilePostDisplay } from "./ProfilePostDisplay";

export const Profile = ({ user }: { user: User }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);

  const currUser = useCurrentUser();

  const bookmarkedPosts = Object.values(currUser.postsBookmarked);
  const viewingOwnProfile = currUser.uuid === user.uuid;

  const [display, setDisplay] = useState<"user" | "saved">("user");

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

  return (
    <>
      <header className="m-auto flex gap-20 border-b-2 pb-14">
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
      <div className="mx-auto flex gap-8 text-lg uppercase tracking-wider text-slate-300">
        {viewingOwnProfile ? (
          <>
            <p
              className={
                display === "user"
                  ? "cursor-pointer text-black"
                  : "cursor-pointer"
              }
              onClick={() => setDisplay("user")}
            >
              Posts
            </p>
            <p
              className={
                display === "saved"
                  ? "cursor-pointer text-black"
                  : "cursor-pointer"
              }
              onClick={() => setDisplay("saved")}
            >
              Saved
            </p>
          </>
        ) : (
          <p className="cursor-pointer text-black">Posts</p>
        )}
      </div>

      <main>
        <ProfilePostDisplay
          posts={display === "user" ? user.posts : bookmarkedPosts}
          setFocusedPost={setFocusedPost}
        />
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
