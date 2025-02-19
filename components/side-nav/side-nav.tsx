import { bubble as Menu } from "react-burger-menu";
import { FC, useState } from "react";
import styled from "styled-components";
import TextLogoIcon from "@components/navbar/text-logo";
import { Box } from "grommet";
import MenuItems from "@components/navbar/menu-items";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "24px",
    left: "12px",
    top: "12px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#373a47",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#f1f1f1",
    padding: "0em 1.5em 0px 1em",
    fontSize: "1.15em",
    width: "100%",
  },
  bmMorphShape: {
    fill: "#f1f1f1",
  },
  // bmItemList: {
  //   color: "#b8b7ad",
  // },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const BurgerBar = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.global?.colors?.brand?.toString()};
  z-index: 900;
`;

const SideNav: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuProps = {
    isOpen,
    styles,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
  };
  return (
    <div className="sidenav">
      <BurgerBar justify="center" pad={{ left: "58px" }}>
        <TextLogoIcon />
      </BurgerBar>
      <Menu {...menuProps}>
        <TextLogoIcon />
        <MenuItems onViewCart={() => setIsOpen(false)} />
      </Menu>
      <style jsx global>{`
        .sidenav a {
          display: block;
          padding: 16px 0;
        }
      `}</style>
    </div>
  );
};

export default SideNav;
