import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import { postLiked } from "../features/posts/postsSlice";

export const HeartIcon = ({ post }) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const onLikeClick = (post) => {
    dispatch(postLiked({ post, user }));
  };

  const fill = post.likedBy[user.uuid] ? "red" : "none";

  return (
    // <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => onLikeClick(post)}
      className="cursor-pointer select-none hover:scale-105"
    >
      <path
        opacity="0"
        d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
        fill="#000000"
      />
      <path
        d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
        stroke={fill === "red" ? "red" : "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
