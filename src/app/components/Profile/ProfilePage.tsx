"use client";
import { User, useUsersQuery } from "../../../../lib/types/apolloComponents";

const ProfilePage = () => {
  const { data, loading } = useUsersQuery();
  const users = data?.userQuery as User;
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Profile</h1>
      <h2>{users.email}</h2>
    </div>
  );
};

export default ProfilePage;
