import Image from "next/image";
import backArrow from "../assets/icons/back.svg";
import locationIcon from "../assets/icons/location.svg";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postsSlice";
import { userSelector } from "../features/user/userSlice";
import { Dispatch, SetStateAction, useState } from "react";

import tempPostPicSrc from "../assets/nature.jpg";
import { ProfilePic } from "./ProfilePic";
import { nanoid } from "@reduxjs/toolkit";
import { initializeInteractions } from "../features/PostInteractions/interactionsSlice";

export const AddPost = ({
  setModalIsOpen,
}: {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [caption, setCaption] = useState("");
  const [captionLength, setCaptionLength] = useState(0);
  const [location, setLocation] = useState("");

  const onCaptionChange = (value: string) => {
    setCaption(value);
    setCaptionLength(value.length);
  };

  const onLocationChange = (value: string) => {
    setLocation(value);
  };

  const onShareClick = () => {
    if (caption.trim() && location.trim()) {
      const id = nanoid();

      dispatch(addPost(id, user, caption, location, tempPostPicSrc));
      dispatch(initializeInteractions(id));

      setModalIsOpen(false);
    }
  };
  return (
    <div className="flex flex-col rounded-2xl bg-white">
      <header className="flex items-center justify-between border-b-2 p-2">
        <Image
          src={backArrow}
          alt="back"
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
          height={400}
          width={500}
          alt=""
        ></Image>
        <section className="POST-INFO mt-4">
          <div className="flex items-center gap-2 p-2 ">
            <ProfilePic picSrc={user.profilePicSrc} size={"small"} />
            <p className="font-semibold">{user.handle}</p>
          </div>
          <textarea
            className="mt-2 min-h-[200px] w-[300px] resize-none px-2 outline-none placeholder:text-gray-300"
            placeholder="Write a caption..."
            onChange={(e) => onCaptionChange(e.target.value)}
          />
          <p className="ml-auto border-b-2 pb-2 pr-2 text-right text-sm text-gray-300">
            {captionLength}/2,200
          </p>
          <div className="flex items-center border-b-2 py-2">
            <input
              className="w-full pl-2 outline-none"
              id="location"
              type="text"
              maxLength={2200}
              placeholder="Add location"
              onChange={(e) => onLocationChange(e.target.value)}
            />
            <label htmlFor="location" className="pr-2">
              <Image src={locationIcon} alt="location" height={20} width={20} />
            </label>
          </div>
        </section>
      </div>
    </div>
  );
};
