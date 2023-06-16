import { useDispatch } from "react-redux";
import { bookmarkedPost } from "../features/user/userSlice";
import { useRouter } from "next/router";
import { Post } from "../tipos/types";

export const PostInteractionList = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <ul className="flex min-w-[300px] flex-col items-center  rounded-md bg-white">
      <li
        className="w-full cursor-pointer select-none border-b py-2 text-center"
        onClick={() => dispatch(bookmarkedPost(post))}
      >
        Add to favorites
      </li>
      <li
        className="w-full cursor-pointer py-2 text-center"
        onClick={() => router.push(`/profile/${post.author.uuid}`)}
      >
        Go to account
      </li>
    </ul>
  );
};
