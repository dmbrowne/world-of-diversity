import { FC } from "react";
import styled from "styled-components";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import BaseLayout from "./base";
import { SocialMediaLinks } from "@components/footer/footer";

interface Props {
  menuTransparency?: number;
  showPreviewNav?: boolean;
  socialMediaLinks: SocialMediaLinks;
}

const SFixedContainer = styled.div<{ offsetTop: number }>`
  position: fixed;
  top: ${(props) => `${0 + props.offsetTop}px`};
  left: 0;
  width: 100%;
  z-index: 10;
`;

const TransparentHeaderLayout: FC<Props> = ({ children, menuTransparency = 0, showPreviewNav, socialMediaLinks }) => {
  return (
    <BaseLayout title="Welcome to diversity" showPreviewNav={showPreviewNav}>
      <div className="container" style={{ minHeight: "100vh" }}>
        <SFixedContainer offsetTop={showPreviewNav ? 68 : 0}>
          <Navbar transparency={menuTransparency} />
        </SFixedContainer>
        {children}
        <Footer socialMediaLinks={socialMediaLinks} />
      </div>
    </BaseLayout>
  );
};

export default TransparentHeaderLayout;
