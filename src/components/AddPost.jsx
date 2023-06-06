import Image from "next/image";
import { mockUserState } from "../mockData";

export const AddPost = () => {
  return (
    <div className="flex flex-col rounded-md border-2">
      <header className="flex justify-between border-b-2">
        <h2>Create new post</h2>
        <button>Share</button>
      </header>
      <div className="flex">
        <Image
          src="https://picsum.photos/320/300"
          height={300}
          width={320}
          alt=""
        ></Image>
        <section className="POST-INFO">
          <div className="flex items-center gap-2">
            <Image
              src={mockUserState.profilePicSrc}
              className="PROFILE-PIC rounded-full h-10 w-10 object-cover object-top"
              height={64}
              width={64}
              alt=""
            ></Image>
            <p className="font-semibold">{mockUserState.name}</p>
          </div>
          <input
            className="min-w-full min-h-[200px] outline-none"
            type="text"
            placeholder="Write a caption..."
          />
          <input
            className="outline-none"
            type="text"
            placeholder="Add location"
          />
        </section>
      </div>
    </div>
  );
};
