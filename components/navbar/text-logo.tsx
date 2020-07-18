import React from "react";
import { Anchor } from "grommet";
import { Logo } from "./navbar.styled";

const TextLogoIcon = () => {
  return (
    <div className="text-logo">
      <Anchor href="/">
        <Logo>World of diversity</Logo>
      </Anchor>
      <style jsx global>{`
        .text-logo a:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default TextLogoIcon;
