import * as React from "react";

import { Box, Container, Flex } from "@chakra-ui/react";
import Seo from "./Seo";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  noFooter?: boolean;
};

const Layout = ({ title, noFooter = false, children }: LayoutProps) => {
  return (
    <Box
      backgroundImage="/lined-paper-2.jpg"
      backgroundSize={{ base: "120vw 150vh", sm: "120vw 100vh" }}
      backgroundRepeat="repeat"
      width="100%"
      minHeight="100vh"
      position="relative"
    >
      <Seo title={title} />
      <Flex
        minHeight="100vh"
        pt={{ base: "8.8vh", sm: "6.25vh" }}
        direction="column"
      >
        {/* <Header /> */}
        <Container
          as="main"
          px={{ base: "3", xl: "5" }}
          pb="10"
          maxWidth="auto"
        >
          {children}
        </Container>
        {!noFooter && <Footer mt="auto" />}{" "}
      </Flex>
    </Box>
  );
};

export default Layout;
