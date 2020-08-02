import React, { FC } from "react";
import { Text, Box } from "grommet";
import Quotes from "./quotes.svg";

const Quote: FC = ({ children }) => {
  return (
    <Box border={{ side: "left", size: "6px", color: "brand" }} pad={{ left: "small" }}>
      <Quotes />
      <Text size="large" margin={{ vertical: "small" }} children={children} />
    </Box>
  );
};

export default Quote;
