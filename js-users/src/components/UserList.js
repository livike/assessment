import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  Button,
  Box
} from "grommet";

import { formatDate } from "../util/util";

const UserList = ({ users, toggleStatus }) => {
  // console.log("UserList render");
  // console.log(users);
  if (users === null) {
    return null;
  }
  const columns = [
    {
      property: "first_name",
      label: "First Name"
    },
    {
      property: "last_name",
      label: "Last Name"
    },
    {
      property: "created_at",
      label: "Created At",
      format: user => formatDate(user.created_at)
    },
    {
      property: "status",
      label: "Status",
      format: user => {
        return (
          <Button
            type="button"
            onClick={() => {
              // console.log("clicked button user status ", user.status);
              toggleStatus(user.id, user.status);
            }}
          >
            {user.status === "active" ? "lock" : "activate"}
          </Button>
        );
      }
    }
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map(c => (
            <TableCell
              key={c.property}
              scope="col"
              border="bottom"
              align={c.align}
            >
              <Text>{c.label}</Text>
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            {columns.map(c => (
              <TableCell key={c.property} size="medium">
                <Text status={user.status}>
                  {c.format ? c.format(user) : user[c.property]}
                </Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
