import Image, { StaticImageData } from "next/image";

export const ProfilePic = ({
  picSrc,
  size,
}: {
  picSrc: string | StaticImageData;
  size: "sm" | "lg" | "md" | "nav";
}) => {
  const styles = {
    nav: "h-7 w-7 rounded-full object-cover object-top",
    sm: "h-10 w-10 rounded-full object-cover object-top",
    md: "h-20 w-20 rounded-full object-cover object-top",
    lg: "h-40 w-40 rounded-full object-cover object-top",
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
