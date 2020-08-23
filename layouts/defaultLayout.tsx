import { FC } from "react";
import { Box } from "grommet";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import BaseLayout from "./base";
import { SocialMediaLinks } from "@components/footer";

const DefaultLayout: FC<{ showPreviewNav?: boolean; socialMediaLinks: SocialMediaLinks }> = ({
  children,
  showPreviewNav,
  socialMediaLinks,
}) => {
  return (
    <BaseLayout title="Welcome to diversity" showPreviewNav={showPreviewNav}>
      <Box className="container" style={{ minHeight: "100vh" }}>
        <Box flex={{ grow: 1 }}>
          <Navbar />
          {children}
        </Box>
        <Footer socialMediaLinks={socialMediaLinks} />
      </Box>
    </BaseLayout>
  );
};

export default DefaultLayout;
