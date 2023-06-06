import Image from "next/image";
import addPost from "../assets/icons/add.svg";
import { useState } from "react";
import { AddPost } from "../components/AddPost";
import { Modal } from "./Modal";

export const Nav = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const onAddPostClick = () => {
    setmodalIsOpen(!modalIsOpen);
  };

  const onModalClick = (e) => {
    if (e.target.classList.contains("MODAL")) {
      setmodalIsOpen(!modalIsOpen);
    } else return;
  };

  return (
    <>
      <nav className="flex flex-col gap-4 border p-2">
        <h1>Instaclone</h1>
        <ul>
          <li className="flex gap-2" onClick={onAddPostClick}>
            <Image src={addPost} height={20} width={20}></Image>
            <span>Create</span>
          </li>
        </ul>
      </nav>

      {modalIsOpen && (
        <Modal onClick={onModalClick}>
          <AddPost />
        </Modal>
      )}
    </>
  );
};
