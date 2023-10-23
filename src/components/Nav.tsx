import Image from "next/image";
import addPost from "../assets/icons/add.svg";
import fallbackProfile from "../assets/icons/profile.svg";
import { useState } from "react";
import { AddPost } from "./AddPost";
import { Modal } from "./Modal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, switchUser } from "../features/user/userSlice";
import React from "react";
import { ProfilePic } from "./ProfilePic";

export const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onAddPostClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onModalClick = (e: React.MouseEvent) => {
    const { target } = e;

    if (target instanceof HTMLElement && target.classList.contains("MODAL")) {
      setModalIsOpen(!modalIsOpen);
    } else return;
  };

  return (
    <>
      <nav className="flex flex-col  gap-4 border p-2">
        <h1 className="cursor-default text-2xl">
          <Link href={"/"}>Instaclone</Link>
        </h1>
        <ul className="flex flex-col gap-4">
          <li className="flex cursor-pointer gap-2" onClick={onAddPostClick}>
            <Image src={addPost} width={25} height={25} alt=""></Image>
            <span>Create</span>
          </li>

          <li className="flex">
            <Link
              href={`/profile/${user.handle}`}
              className="flex items-center justify-center gap-2"
            >
              {user ? (
                <ProfilePic size="nav" picSrc={user.profilePicSrc}></ProfilePic>
              ) : (
                <Image
                  src={fallbackProfile}
                  width={25}
                  height={25}
                  alt=""
                ></Image>
              )}

              <div>Profile</div>
            </Link>
          </li>
        </ul>
        <p className="w-32">Current user: {user.name}</p>
        <button
          onClick={() => dispatch(switchUser())}
          className="mt-2 border-2 border-black p-1 hover:bg-gray-400"
        >
          Switch User
        </button>
      </nav>

      {modalIsOpen && (
        <Modal onClick={onModalClick}>
          <AddPost setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
    </>
  );
};
