import React, { useState, useEffect } from "react";
import * as API from "../util/server";
import UserForm from "./UserForm";
import { useParams, useHistory } from "react-router-dom";

const EditUser = () => {
  console.log("EditUser");
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await API.fetchUser(userId);
        setUser(data);
      } catch (error) {
        console.log("EditUser error", error);
        history.push("/");
      }
    };
    fetchUser();
  }, [userId, history]);

  const save = async user => {
    try {
      await API.updateUser({ ...user, id: userId });
      setUser(user);
      history.push("/");
    } catch (e) {
      console.log("error", e);
    }
  };

  return <UserForm save={save} user={user} title={"Edit user"} />;
};

export default EditUser;
