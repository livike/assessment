import React from "react";

import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from "grommet";
import { grommet } from "grommet/themes";

const Navigation = () => (
  <Header background="accent-1" pad="medium">
    <Box direction="row" align="center" gap="small">
      Users
    </Box>
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
  </Header>
);

export default Navigation;
