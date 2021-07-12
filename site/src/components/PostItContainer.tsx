import { Box, BoxProps } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

type PostItContainerProps = BoxProps & {};

const PostItContainer = ({
  children,
  ...boxProps
}: PostItContainerProps): JSX.Element => {
  return (
    <Box
      p="5"
      {...boxProps}
      position="relative"
      __css={{ "& *": { lineHeight: "1.5em" } }}
    >
      <StaticImage src="../../static/postit.png" alt="Postit" />
      <Box
        position="absolute"
        width="60%"
        height="70%"
        top="20%"
        left="20%"
        overflow="hidden"
        transform="rotate(-2deg)"
      >
        {children}
      </Box>
    </Box>
  );
};

export default PostItContainer;
