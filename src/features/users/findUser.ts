import { useSelector } from "react-redux";
import { usersSelector } from "./usersSlice";

export const findUser = (userID: string) => {
  const users = useSelector(usersSelector);

  return users.find((u) => u.uuid === userID);
};
