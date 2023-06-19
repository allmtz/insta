import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commented } from "../features/PostInteractions/interactionsSlice";
import { userSelector } from "../features/user/userSlice";
import { Post } from "../tipos/types";

type AddCommentProps = { post: Post; id: string };

export const AddComment = ({ post, id }: AddCommentProps) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [text, setText] = useState("");
  const [showPostBtn, setShowPostBtn] = useState(false);

  const onPostClick = (post: Post) => {
    if (text.trim() === "") return;

    dispatch(commented(user, post, text));
    setText("");
    setShowPostBtn(false);
  };

  const onCommentChange = (value: string) => {
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
        value={text}
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
