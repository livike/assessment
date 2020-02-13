import React, { useState } from "react";
import * as API from "../util/server";
import UserForm from "./UserForm";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  console.log("AddUser");
  const history = useHistory();
  const [error, setError] = useState(null);

  const save = async user => {
    try {
      await API.addUser({ ...user, status: "active" });
      history.push("/");
    } catch (e) {
      setError(e.response.data);
    }
  };

  const cancel = () => history.push("/");

  return (
    <UserForm save={save} cancel={cancel} error={error} title={"Add user"} />
  );
};

export default AddUser;
