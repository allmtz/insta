import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commented } from "../features/PostInteractions/interactionsSlice";
import { userSelector } from "../features/user/userSlice";
import { Post, User } from "../tipos/types";
import "linkify-plugin-mention";
import { usersSelector } from "../features/users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";
import { ProfilePic } from "./ProfilePic";

type AddCommentProps = { post: Post; id: string };

export const linkifyOptions = {
  className: "text-blue-500",
  attributes: { target: { url: "_blank" } },
  formatHref: (href: string, type: string) => {
    const handle = href.substring(1);
    const link = `/profile/${handle}`;

    return link;
  },
};

export const AddComment = ({ post, id }: AddCommentProps) => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [text, setText] = useState("");
  const [showPostBtn, setShowPostBtn] = useState(false);

  const [suggestions, setSuggestions] = useState<null | User[]>(null);
  const users = useSelector(usersSelector);

  const commentRef = useRef<null | HTMLTextAreaElement>(null);

  const onPostClick = (post: Post) => {
    if (text.trim() === "") return;

    dispatch(commented(user, post, text));
    setText("");
    setShowPostBtn(false);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && text.trim() != "") {
      e.preventDefault();

      dispatch(commented(user, post, text));
      setText("");
      setShowPostBtn(false);
    }
  };

  const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== "") {
      setShowPostBtn(true);
    } else {
      setShowPostBtn(false);
    }

    setText(e.target.value);
    const match = e.target.value.match(new RegExp(/@[a-zA-Z0-9]+$/));
    let sugg: User[] = [];

    if (match) {
      const mention = match[0].substring(1);

      // search through users for a handle matching the current mention
      users.map((u) =>
        u.handle.slice(0, mention.length) === mention ? sugg.push(u) : ""
      );

      setSuggestions(sugg);
    } else {
      setSuggestions([]);
    }
  };

  const onSuggestionClick = (user: User) => {
    const match = text.match(new RegExp(/@[a-zA-Z0-9]+$/));

    if (match) {
      // autocomplete the mention when a suggestion is clicked
      setText(text.replace(match[0], `@${user.handle}`) + " ");
      // refocus the comment box
      commentRef.current?.focus();
    }

    // reset the suggestion list once a suggestion is clicked
    setSuggestions([]);
  };

  return (
    <div className="ADD-COMMENT relative flex items-start">
      <textarea
        className="flex-grow resize-none outline-none placeholder:text-gray-500"
        placeholder="Add a comment..."
        name="add-comment"
        maxLength={2200}
        autoComplete="off"
        autoCorrect="off"
        onChange={onCommentChange}
        onKeyDown={handleKeydown}
        ref={commentRef}
        value={text}
        id={id}
      ></textarea>

      {suggestions && suggestions.length > 0 && (
        <div className="absolute -top-[150%] left-0 flex flex-col gap-4 border-2 bg-white p-2 shadow">
          {suggestions.map((u) => (
            <div
              className="z-50 flex cursor-pointer items-center gap-2"
              key={nanoid()}
              onClick={() => onSuggestionClick(u)}
            >
              <ProfilePic picSrc={u.profilePicSrc} size="small"></ProfilePic>
              <p className="">{u.handle}</p>
            </div>
          ))}
        </div>
      )}
      <button
        className={
          showPostBtn
            ? "cursor-pointer text-blue-500 hover:text-black"
            : "cursor-default text-transparent hover:text-transparent"
        }
        onClick={() => onPostClick(post)}
      >
        Post
      </button>
    </div>
  );
};
