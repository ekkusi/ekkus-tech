import * as React from "react";

import { Box, BoxProps, Container, Flex } from "@chakra-ui/react";
import { globalHistory } from "@reach/router";
import { motion, TargetAndTransition, Variant } from "framer-motion";
import Seo from "./Seo";
import Footer from "./Footer";

type AnimationVariants = {
  from: Variant;
  to: Variant;
};

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  noFooter?: boolean;
  animation?: AnimationVariants;
  exitAnimation?: TargetAndTransition;
};

const LayoutBackground = ({ children, ...boxProps }: BoxProps) => {
  return (
    <Box
      backgroundImage="/lined-paper-2.jpg"
      backgroundSize={{ base: "120vw 150vh", sm: "120vw 100vh" }}
      backgroundRepeat="repeat"
      width="100%"
      minHeight="100vh"
      {...boxProps}
    >
      {children}
    </Box>
  );
};

const Layout = ({
  title,
  noFooter = false,
  children,
  animation = {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  exitAnimation = {
    rotateX: "-180deg",
    translateY: "-45%",
  },
}: LayoutProps) => {
  return (
    <Box position="relative">
      <motion.div
        key={globalHistory.location.pathname}
        initial="from"
        animate="to"
        variants={animation}
        exit={exitAnimation}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originY: "20%", originX: 0, transformStyle: "preserve-3d" }}
      >
        <LayoutBackground position="relative" overflow="hidden">
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
        </LayoutBackground>
      </motion.div>
      <LayoutBackground position="absolute" top="0" left="0" zIndex="-1" />
    </Box>
  );
};

export default Layout;
