import { GetStaticProps } from "next";
import { User } from "../types/user";
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { fetchUsers } from "@/services/user_service";

interface HomeProps {
  users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await fetchUsers();
  return {
    props: {
      users,
    },
  };
};

const Home: React.FC<HomeProps> = ({ users }) => {
  return (
    <div className={styles.container}>
      <h1>Daftar Pengguna</h1>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
