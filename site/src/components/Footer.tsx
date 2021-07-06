import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type FooterProps = BoxProps & {};

const Footer = ({ ...boxProps }: FooterProps): JSX.Element => {
  return (
    <Box as="footer" {...boxProps}>
      <Flex
        alignItems={{ base: "center", md: "center" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-around" }}
        width="100%"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        textTransform="uppercase"
        pt="5"
      >
        <Link to="/">Kotipuu</Link>
        <Link to="/projects">Projektit</Link>
        <Link to="/contact">Ota yhteyttä</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
