import Image from "next/image";
import { mockUserState } from "../mockData";
import backArrow from "../assets/icons/back.svg";

//redux
import { useDispatch } from "react-redux";
import { addPost } from "../features/Post/postsSlice";
import { useState } from "react";

import tempImgSrc from "../assets/nature.jpg";
import tempProfilePicSrc from "../assets/profle.jpg";

export const AddPost = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");

  const onCaptionChange = (value) => {
    setCaption(value);
  };

  const onLocationChange = (value) => {
    setLocation(value);
  };

  const onShareClick = () => {
    if (caption.trim() && location.trim()) {
      dispatch(
        addPost(
          { name: mockUserState.name, profilePicSrc: tempProfilePicSrc },
          caption,
          location,
          tempImgSrc
        )
      );
      setModalIsOpen(false);
    }
  };
  return (
    <div className="flex flex-col rounded-md bg-white">
      <header className="flex items-center justify-between border-b-2 p-2">
        <Image
          src={backArrow}
          className="cursor-pointer"
          height={30}
          onClick={() => setModalIsOpen(false)}
        ></Image>
        <h2 className=" font-semibold">Create new post</h2>
        <button
          className="text-sm font-semibold text-blue-400"
          onClick={onShareClick}
        >
          Share
        </button>
      </header>
      <div className="flex">
        <Image
          src="https://picsum.photos/320/300"
          height={300}
          width={320}
          alt=""
        ></Image>
        <section className="POST-INFO">
          <div className="flex items-center gap-2 p-2 ">
            <Image
              src={mockUserState.profilePicSrc}
              className="PROFILE-PIC h-10 w-10 rounded-full object-cover object-top"
              height={64}
              width={64}
              alt=""
            ></Image>
            <p className="font-semibold">{mockUserState.name}</p>
          </div>
          <textarea
            className="mt-2 min-h-[200px] min-w-full resize-none border-b-2 pl-2 outline-none placeholder:text-gray-300"
            type="text"
            placeholder="Write a caption..."
            onChange={(e) => onCaptionChange(e.target.value)}
          />
          <input
            className="w-full pl-2 outline-none"
            type="text"
            placeholder="Add location"
            onChange={(e) => onLocationChange(e.target.value)}
          />
        </section>
      </div>
    </div>
  );
};
