import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import { Profile } from "../../components/Profile";
import { userSelector } from "../../features/user/userSlice";
import { Nav } from "../../components/Nav";

const ProfilePage = () => {
  const user = useSelector(userSelector);

  return (
    <Layout>
      <Nav></Nav>
      <div className="PROFILE-LAYOUT m-auto my-5 flex h-fit w-fit flex-col gap-8 ">
        <Profile user={user} />
      </div>
    </Layout>
  );
};

export default ProfilePage;
