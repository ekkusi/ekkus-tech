import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import React from "react";
import { lineHeight } from "../globalStyles";

type HeadingType = {
  H1: (props: HeadingProps) => JSX.Element;
  H2: (props: HeadingProps) => JSX.Element;
  H3: (props: HeadingProps) => JSX.Element;
};

const Heading: HeadingType = {
  H1: ({ children, ...rest }: HeadingProps) => (
    <ChakraHeading
      as="h1"
      fontSize={{ base: "2xl", md: "4xl" }}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </ChakraHeading>
  ),
  H2: ({ children, ...rest }: HeadingProps) => (
    <ChakraHeading
      as="h2"
      fontSize={{ base: "xl", md: "2xl" }}
      fontWeight="normal"
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </ChakraHeading>
  ),
  H3: ({ children, ...rest }: HeadingProps) => (
    <ChakraHeading
      as="h3"
      fontSize={{ base: "lg", md: "xl" }}
      fontWeight="normal"
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </ChakraHeading>
  ),
};

export default Heading;
