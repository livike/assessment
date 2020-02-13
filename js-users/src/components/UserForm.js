import React, { useEffect, useState } from "react";
import { Text, TextInput, Box, Button } from "grommet";

const UserForm = ({ user, cancel, save, title }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  // if called for editing
  useEffect(() => {
    if (user) {
      setLastName(user.last_name);
      setFirstName(user.first_name);
    }
  }, [user]);

  const onSave = e => {
    e.preventDefault();
    save({
      first_name: firstName,
      last_name: lastName
    });
  };

  const onCancel = () => cancel();

  return (
    <Box width="medium" align="center" gap="small" pad="small">
      <form onSubmit={onSave}>
        <h2 className={"heading-secondary"}>{title}</h2>
        <Text>First Name</Text>
        <TextInput
          name={"first_name"}
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          size="medium"
        />
        <Text>Last Name</Text>
        <TextInput
          name={"last_name"}
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          size="medium"
        />
        <Box direction="row" alignSelf="center" gap="medium" pad="small">
          <Button type={"submit"}>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserForm;
