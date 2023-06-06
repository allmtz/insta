import Image from "next/image";
import addPost from "../assets/icons/add.svg";

export const Nav = () => {
  const onAddClick = () => {
    console.log("you want to add a post");
  };
  return (
    <>
      <nav className="flex gap-4 flex-col border p-2">
        <h1>Instaclone</h1>
        <ul>
          <li className="flex gap-2" onClick={onAddClick}>
            <Image src={addPost} height={20} width={20}></Image>
            <span>Create</span>
          </li>
        </ul>
      </nav>
    </>
  );
};
