import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../features/user/userSlice";
import { comment } from "../features/posts/postsSlice";
import { useState } from "react";

export const AddComment = ({ post, id }) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [text, setText] = useState("");
  const [showPostBtn, setShowPostBtn] = useState(false);

  const onPostClick = (post) => {
    if (text.trim() === "") return;

    dispatch(comment(user, post, text));
  };

  const onCommentChange = (value) => {
    if (value.trim() !== "") {
      setShowPostBtn(true);
    } else {
      setShowPostBtn(false);
    }
    setText(value);
  };

  return (
    <div className="ADD-COMMENT flex h-full items-start">
      <textarea
        className="h-full w-full resize-none outline-none placeholder:text-gray-500"
        placeholder="Add a comment..."
        name="add-comment"
        maxLength={2200}
        onChange={(e) => onCommentChange(e.target.value)}
        id={id}
      ></textarea>

      {showPostBtn && (
        <p
          className="cursor-pointer text-blue-500 hover:text-black"
          onClick={() => onPostClick(post)}
        >
          Post
        </p>
      )}
    </div>
  );
};
