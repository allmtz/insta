import Image from "next/image";
import addPost from "../assets/icons/add.svg";
import { useState } from "react";
import { AddPost } from "../components/AddPost";
import { Modal } from "./Modal";

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
        <h1 className="cursor-default">Instaclone</h1>
        <ul>
          <li className="flex cursor-pointer gap-2" onClick={onAddPostClick}>
            <Image src={addPost} width={25} height={25} alt=""></Image>
            <span>Create</span>
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
