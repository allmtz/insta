import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import { Profile } from "../../components/Profile";
import { Nav } from "../../components/Nav";
import { useRouter } from "next/router";
import { usersSelector } from "../../features/users/usersSlice";

const ProfilePage = () => {
  const router = useRouter();
  const username = router.query.username;

  const users = useSelector(usersSelector);

  const user = users.find((u) => u.handle === username);

  return (
    <Layout>
      <Nav></Nav>
      <div className="PROFILE-LAYOUT m-auto my-5 flex h-fit w-fit flex-col gap-8">
        {/* need to add some kind of <UserNotFound /> error handler  */}
        {user && <Profile user={user} />}
      </div>
    </Layout>
  );
};

export default ProfilePage;
