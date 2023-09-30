import { useSelector } from "react-redux";
import { interactionsSelector } from "./interactionsSlice";

export const useGetInteractions = () => {
  return useSelector(interactionsSelector);
};
