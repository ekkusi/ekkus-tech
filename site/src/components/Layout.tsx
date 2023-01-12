import * as React from "react";

import { Box, BoxProps, Container, Flex } from "@chakra-ui/react";
import { globalHistory } from "@reach/router";
import { motion, TargetAndTransition, Variant } from "framer-motion";
import { Helmet } from "react-helmet";
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

function LayoutBackground({ children, ...boxProps }: BoxProps) {
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
}

function Layout({
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
}: LayoutProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Helmet>
        <link rel="prefetch" href="/" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/contact" />
        <link rel="preload" href="/fonts/whatever-it-takes.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/whatever-it-takes-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Helmet>
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
                flex="1"
                px={{ base: "3", xl: "10" }}
                pb="10"
                maxWidth="auto"
                position="relative"
              >
                {children}
              </Container>
              {!noFooter && <Footer mt="auto" />}{" "}
            </Flex>
          </LayoutBackground>
        </motion.div>
        <LayoutBackground position="absolute" top="0" left="0" zIndex="-1" />
      </Box>
    </>
  );
}

export default Layout;
