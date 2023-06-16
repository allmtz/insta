import Image from "next/image";
import { User } from "../tipos/types";
import HorizontalDots from "./HorizontalDots";
import { ProfilePic } from "./ProfilePic";

import TEMPimg from "../assets/nature.jpg";

//change this to real users once they have some posts
const mockUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Profile = ({ user }: { user: User }) => {
  return (
    <>
      <header className="m-auto flex gap-20">
        <ProfilePic picSrc={user.profilePicSrc} size="large" />
        <div>
          <div className="INTERACTIONS flex items-center gap-7">
            <p className="font-bold">{user.handle}</p>
            <button className="rounded-md bg-blue-400 px-6 py-1 font-bold text-white hover:bg-blue-600">
              Follow
            </button>
            <HorizontalDots />
          </div>
          <div className="INFO mt-2 flex gap-4">
            <p>
              <span className="font-bold">{user.posts.length}</span> posts
            </p>
            <p>
              <span className="font-bold">{user.followers.length}</span>{" "}
              followers
            </p>
            <p>
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
      <main>
        <div className="posts grid grid-cols-3 gap-1">
          {mockUsers.map((post) => (
            <>
              <div className="PROFILE-POST relative">
                <Image src={TEMPimg} height={300} width={300} alt="" />
                <div className="OVERLAY absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <div>LIKES #</div>
                  <div>COMMENTS #</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </main>
    </>
  );
};
