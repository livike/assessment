import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text
} from "grommet";

import { formatDate } from "./util";

const COLUMNS = [
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
  }
  // {
  //   property: "status",
  //   label: "Status"
  // }
];

const UserList = props => {
  console.log("users:", props.users);
  if (props.users === null) {
    return null;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {COLUMNS.map(c => (
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
        {props.users.map(user => (
          <TableRow key={user.id}>
            {COLUMNS.map(c => (
              <TableCell key={c.property} size="medium">
                <Text>{c.format ? c.format(user) : user[c.property]}</Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
