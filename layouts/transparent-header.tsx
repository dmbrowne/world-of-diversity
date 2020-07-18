import { FC } from "react";
import styled from "styled-components";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import BaseLayout from "./base";

const SFixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const TransparentHeaderLayout: FC<{ menuTransparency?: number }> = ({ children, menuTransparency = 0 }) => {
  return (
    <BaseLayout title="Welcome to diversity">
      <div className="container" style={{ minHeight: "100vh" }}>
        <SFixedContainer>
          <Navbar transparency={menuTransparency} />
        </SFixedContainer>
        {children}
        <Footer />
      </div>
    </BaseLayout>
  );
};

export default TransparentHeaderLayout;
