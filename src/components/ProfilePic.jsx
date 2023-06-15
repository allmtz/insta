import Image from "next/image";

export const ProfilePic = ({ picSrc, size }) => {
  const styles = {
    small: "h-10 w-10 rounded-full object-cover object-top",
    large: "h-40 w-40 rounded-full object-cover object-top",
  };
  return (
    <Image
      src={picSrc}
      className={styles[size]}
      height={64}
      width={64}
      alt=""
    ></Image>
  );
};
