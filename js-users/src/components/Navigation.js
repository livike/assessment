import React from "react";

import {
  Anchor,
  Box,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Heading
} from "grommet";
import { grommet } from "grommet/themes";

const Navigation = () => (
  <Header background="brand" pad="medium">
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === "small" ? (
          <Menu
            label="Menu"
            items={[
              { label: "All users", onClick: () => {} },
              { label: "Add user", onClick: () => {} }
            ]}
          />
        ) : (
          <Nav direction="row">
            <Anchor href="#" label="All users" />
            <Anchor href="#" label="Add user" />
          </Nav>
        )
      }
    </ResponsiveContext.Consumer>
    <Box direction="row" align="center" gap="small">
      <Heading level={2}>Users</Heading>
    </Box>
  </Header>
);

export default Navigation;
