import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import { comment } from "../features/posts/postsSlice";
import { useState } from "react";

export const AddComment = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [text, setText] = useState("");

  const onPostClick = (post) => {
    if (text.trim() === "") return;

    dispatch(comment(user, post, text));
  };

  const onCommentChange = (value) => {
    setText(value);
  };

  return (
    <div className="ADD-COMMENT flex items-start">
      <textarea
        className="h-fit w-full resize-none outline-none placeholder:text-gray-500"
        placeholder="Add a comment..."
        name="add-comment"
        maxLength={2200}
        onChange={(e) => onCommentChange(e.target.value)}
      ></textarea>
      <p
        className="cursor-pointer text-blue-500 hover:text-black"
        onClick={() => onPostClick(post)}
      >
        Post
      </p>
    </div>
  );
};
