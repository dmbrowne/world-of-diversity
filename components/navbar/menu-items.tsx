import React, { useContext, FC } from "react";
import { SAnchor } from "./navbar.styled";
import { Button, Text, ResponsiveContext, Box } from "grommet";
import { Shop } from "grommet-icons";

const MenuItems: FC<{ onViewCart?: () => any }> = ({ onViewCart }) => {
  const screensize = useContext(ResponsiveContext);
  const isTabletAndSmaller = screensize === "tablet" || screensize === "small";
  const margin = isTabletAndSmaller ? "none" : undefined;
  const cartItemMargin = isTabletAndSmaller ? { top: "large" } : { left: "medium" };
  return (
    <>
      <SAnchor href="/about" color="dark-1" children="About" margin={margin} />
      <SAnchor href="/bookstore" color="dark-1" children="Books" margin={margin} />
      <Button plain className="snipcart-checkout" fill="horizontal" margin={cartItemMargin} onClick={onViewCart}>
        <Box direction="row" justify="between">
          {isTabletAndSmaller && <Text>Cart</Text>}
          <Box direction="row" align="center">
            <Shop size="20px" />
            <Text size="small" weight={300} className="snipcart-items-count" children="0" />
          </Box>
        </Box>
      </Button>
    </>
  );
};

export default MenuItems;
