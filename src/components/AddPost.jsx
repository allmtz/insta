import Image from "next/image";
import { mockUserState } from "../mockData";
import backArrow from "../assets/icons/back.svg";

export const AddPost = () => {
  return (
    <div className="flex flex-col rounded-md bg-white">
      <header className="flex items-center justify-between border-b-2 p-2">
        <Image src={backArrow} height={30}></Image>
        <h2 className=" font-semibold">Create new post</h2>
        <button className="text-sm font-semibold text-blue-400">Share</button>
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
            className="mt-2 min-h-[200px] min-w-full  resize-none border-b-2 pl-2 outline-none placeholder:text-gray-300"
            type="text"
            placeholder="Write a caption..."
          />
          <input
            className="pl-2 outline-none"
            type="text"
            placeholder="Add location"
          />
        </section>
      </div>
    </div>
  );
};
