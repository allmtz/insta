import Image from "next/image";

export const ProfilePic = ({ picSrc }) => {
  return (
    <Image
      src={picSrc}
      className="h-10 w-10 rounded-full object-cover object-top"
      height={64}
      width={64}
      alt=""
    ></Image>
  );
};
