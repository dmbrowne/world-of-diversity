import { FC } from "react";
import { Box } from "grommet";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import BaseLayout from "./base";
import SideNav from "@components/side-nav";

const DefaultLayout: FC = ({ children }) => {
  return (
    <BaseLayout title="Welcome to diversity">
      <Box className="container" style={{ minHeight: "100vh" }}>
        <Box flex={{ grow: 1 }}>
          <Navbar />
          {children}
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
};

export default DefaultLayout;
