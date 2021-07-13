import { Box, BoxProps } from "@chakra-ui/react";
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import React from "react";
import { chakraMotionWrapper } from "../../../gatsby-theme-ekkus-design-library";
import Heading from "../gatsby-theme-ekkus-design-library/components/Heading";

type PolaroidContainerProps = BoxProps & {
  title: string;
  imageData?: IGatsbyImageData;
};

const BoxWithMotion = chakraMotionWrapper(Box);

const PolaroidContainer = ({
  children,
  title,
  imageData,
  ...boxProps
}: PolaroidContainerProps): JSX.Element => {
  return (
    <BoxWithMotion
      p="5"
      {...boxProps}
      position="relative"
      __css={{ "& *": { lineHeight: "1.5em" } }}
      cursor="pointer"
      whileHover={{
        rotateY: 180,
        transition: {
          duration: 1,
        },
      }}
    >
      <StaticImage src="../../static/polaroid-2.png" alt="Polaroid" />
      {imageData && (
        <Box
          as={GatsbyImage}
          image={imageData}
          alt="Polaroid sub image"
          position="absolute"
          top="9%"
          left="12%"
          zIndex={5}
          width="76%"
          height="70%"
        />
      )}
      <Heading.H3
        position="absolute"
        bottom={{ base: "5%", sm: "8%" }}
        left="0"
        right="0"
        textAlign="center"
      >
        {title}
      </Heading.H3>
      <Box
        display="none"
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
    </BoxWithMotion>
  );
};

export default PolaroidContainer;
