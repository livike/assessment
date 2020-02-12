import React from "react";
import * as API from "../util/server";
import UserForm from "./UserForm";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  console.log("AddUser");
  const history = useHistory();

  const save = async user => {
    try {
      await API.addUser({ ...user, status: "active" });
      history.push("/");
    } catch (e) {
      console.log("error");
    }
  };

  return <UserForm save={save} title={"Add user"} />;
};

export default AddUser;
