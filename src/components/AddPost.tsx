import Image from "next/image";
import backArrow from "../assets/icons/back.svg";
import locationIcon from "../assets/icons/location.svg";

//redux
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/posts/postsSlice";
import { userSelector } from "../features/user/userSlice";
import { Dispatch, SetStateAction, useState } from "react";

import { ProfilePic } from "./ProfilePic";
import { nanoid } from "@reduxjs/toolkit";
import { initializeInteractions } from "../features/PostInteractions/interactionsSlice";
import { assignPost } from "../features/users/usersSlice";

import useSWR from "swr";

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

  const fetcher = async () => {
    return await fetch("https://picsum.photos/320/300");
  };
  const { data, error, isLoading, isValidating } = useSWR("/api/user", fetcher);

  const onCaptionChange = (value: string) => {
    setCaption(value);
    setCaptionLength(value.length);
  };

  const onLocationChange = (value: string) => {
    setLocation(value);
  };

  const onShareClick = () => {
    if (caption.trim()) {
      const id = nanoid();

      const postCreated = dispatch(
        createPost(id, user.handle, user.uuid, caption, location, data!.url)
      );

      dispatch(initializeInteractions(id));

      dispatch(assignPost(user, postCreated.payload));

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
        <div className="relative flex h-[468.75px] w-[500px] items-center justify-center">
          {isValidating && <h1>Loading...</h1>}
          {!isValidating && data && <Image src={data.url} fill alt=""></Image>}
        </div>
        <section className="POST-INFO mt-4">
          <div className="flex items-center gap-2 p-2 ">
            <ProfilePic picSrc={user.profilePicSrc} size={"sm"} />
            <p className="font-semibold">{user.handle}</p>
          </div>
          <textarea
            className="mt-2 min-h-[200px] w-[300px] resize-none px-2 outline-none placeholder:text-gray-300"
            placeholder="Write a caption..."
            maxLength={2200}
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
              maxLength={50}
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
