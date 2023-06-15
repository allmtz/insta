import Image from "next/image";
import addPost from "../assets/icons/add.svg";
import profile from "../assets/icons/profile.svg";
import { useState } from "react";
import { AddPost } from "../components/AddPost";
import { Modal } from "./Modal";
import Link from "next/link";

export const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onAddPostClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onModalClick = (e) => {
    if (e.target.classList.contains("MODAL")) {
      setModalIsOpen(!modalIsOpen);
    } else return;
  };

  return (
    <>
      <nav className="flex flex-col gap-4 border p-2">
        <h1 className="cursor-default">
          <Link href={"/"}>Instaclone</Link>
        </h1>
        <ul className="flex flex-col gap-4">
          <li className="flex cursor-pointer gap-2" onClick={onAddPostClick}>
            <Image src={addPost} width={25} height={25} alt=""></Image>
            <span>Create</span>
          </li>
          <li>
            <Link href={"/u/1"} className="flex gap-2">
              <Image src={profile} width={25} height={25} alt=""></Image>
              <div>Profile</div>
            </Link>
          </li>
        </ul>
      </nav>

      {modalIsOpen && (
        <Modal onClick={onModalClick}>
          <AddPost setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
    </>
  );
};
