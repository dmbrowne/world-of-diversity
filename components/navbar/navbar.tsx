import React from "react";
import { Anchor, Box } from "grommet";
import styled from "styled-components";

const SAnchor = styled(Anchor)`
  font-weight: 300;
  font-size: 1.125rem;
`;

const Navbar = () => {
  return (
    <Box background="brand" justify="between" direction="row" pad={{ vertical: "small", horizontal: "medium" }}>
      <img src="/assets/images/logo.png" />
      <nav>
        <SAnchor href="/books" color="dark-1" children="Books" />
      </nav>
    </Box>
  );
};

export default Navbar;
