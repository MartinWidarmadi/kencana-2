import { GetServerSideProps } from "next";
import React from "react";
import styles from "@/styles/User.module.css";
import { User } from "@/types/user";
import { fetchUserById } from "@/services/user_service";

interface UserDetailProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const user = await fetchUserById(id as string);

  return {
    props: {
      user,
    },
  };
};

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Detail pengguna: {user.name}</h1>
      <p>
        <strong>Email: </strong> {user.email}
      </p>
      <p>
        <strong>Phone: </strong> {user.phone}
      </p>
      <p>
        <strong>Website: </strong> {user.website}
      </p>
      <p>
        <strong>Company: </strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserDetail;
