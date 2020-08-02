import React from "react";
import { Logo, Anchor } from "./navbar.styled";
import Link from "next/link";

const TextLogoIcon = () => {
  return (
    <div className="text-logo">
      <Link href="/">
        <Anchor>
          <Logo>World of diversity</Logo>
        </Anchor>
      </Link>
      <style jsx global>{`
        .text-logo a:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default TextLogoIcon;
