import { useDispatch, useSelector } from "react-redux";
import { bookmarkedPost, userSelector } from "../features/user/userSlice";
import { useRouter } from "next/router";
import { Post } from "../tipos/types";

export const PostInteractionList = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector(userSelector);
  const favoritesText = user.postsBookmarked[post.id]
    ? "Remove from favorites"
    : "Add to favorites";

  return (
    <ul className="flex min-w-[300px] flex-col items-center  rounded-md bg-white">
      <li
        className="w-full cursor-pointer select-none border-b py-2 text-center"
        onClick={() => dispatch(bookmarkedPost(post))}
      >
        {favoritesText}
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
