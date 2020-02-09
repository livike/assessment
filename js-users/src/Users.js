import React, { useState, useEffect } from "react";
import * as API from "./server";
import UserList from "./UserList";

// fetch the data and compose the users view

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await API.fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setUsers(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Users;
