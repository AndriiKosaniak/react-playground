import React, { useEffect, useState } from "react";

import { SingleUser } from "./SingleUser";

import { User } from "types";

import classes from "./UserList.module.css";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (!users.length) return <h1>Loading...</h1>;

  return (
    <div className={classes.userListWrapper}>
      {users.map((user) => (
        <SingleUser key={user.id.value} user={user} />
      ))}
    </div>
  );
};
