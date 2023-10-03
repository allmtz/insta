import { useSelector } from "react-redux";
import { userSelector } from "./userSlice";

export const useCurrentUser = () => {
  return useSelector(userSelector);
};
