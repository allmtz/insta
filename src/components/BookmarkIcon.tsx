import { useDispatch, useSelector } from "react-redux";
import { bookmarkedPost, userSelector } from "../features/user/userSlice";
import { Post } from "../tipos/types";

export const BookmarkIcon = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const onBookmarkClick = (post: Post) => {
    dispatch(bookmarkedPost(post));
  };

  const isBookmarked = Boolean(user.postsBookmarked[post.id]);

  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill={isBookmarked ? "black" : "white"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onBookmarkClick(post)}
      className="cursor-pointer select-none hover:scale-105"
    >
      <path
        opacity="0.15"
        d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V21L12 15L6 21V6Z"
        fill="#000000"
      />
      <path
        d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V21L12 15L6 21V6Z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
