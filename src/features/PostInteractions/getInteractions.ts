import { useSelector } from "react-redux";
import { interactionsSelector } from "./interactionsSlice";

export const getInteractions = (postID: string) => {
  const interactions = useSelector(interactionsSelector);
  return interactions[postID];
};
