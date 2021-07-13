import { Box, BoxProps, Text } from "@chakra-ui/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState } from "react";
import { chakraMotionWrapper } from "../../../gatsby-theme-ekkus-design-library";
import Heading from "../gatsby-theme-ekkus-design-library/components/Heading";

type PolaroidContainerProps = BoxProps & {
  title: string;
  imageData?: IGatsbyImageData;
};

const BoxWithMotion = chakraMotionWrapper(Box);

const variants = {
  flipped: { rotateY: 180 },
  notFlipped: { rotateY: 0 },
};

const PolaroidContainer = ({
  children,
  title,
  imageData,
  ...boxProps
}: PolaroidContainerProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <BoxWithMotion
      p="5"
      {...boxProps}
      position="relative"
      __css={{ "& *": { lineHeight: "1.5em" } }}
      cursor="pointer"
      initial="notFlipped"
      whileHover="flipped"
      animate={isFlipped ? "flipped" : "notFlipped"}
      onTouchEnd={() => {
        setIsFlipped(!isFlipped);
      }}
      width="450px"
      height={{ base: "100vw", sm: "500px" }}
      maxWidth="100%"
    >
      <BoxWithMotion
        position="relative"
        width="100%"
        height="100%"
        variants={variants}
        boxShadow="lg"
        bg="#DADADA"
        borderRadius="5px"
        transition={{ duration: 1 }}
        __css={{
          transformStyle: "preserve-3d",
        }}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
          transform="rotateY(0deg)"
          __css={{
            "&, & * ": {
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            },
          }}
        >
          <Box
            position="absolute"
            width="80%"
            height="75%"
            bg="black"
            top="9%"
            left="10%"
          />
          <Text position="absolute" top="0" left="5" fontSize="4xl">
            x
          </Text>
          {imageData && (
            <Box
              as={GatsbyImage}
              image={imageData}
              alt="Polaroid sub image"
              position="absolute"
              zIndex={5}
              width="80%"
              height="75%"
              bg="black"
              top="9%"
              left="10%"
            />
          )}
          <Heading.H3
            position="absolute"
            bottom="1"
            left="0"
            right="0"
            textAlign="center"
          >
            {title}
          </Heading.H3>
        </Box>
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="#DADADA"
          borderRadius="5px"
          p={{ base: "5", sm: "10" }}
          overflow="hidden"
          transform="rotateY(180deg)"
          __css={{
            "&, & * ": {
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            },
          }}
          fontSize={{ base: "xl", sm: "3xl" }}
        >
          {children}
        </Box>
      </BoxWithMotion>
    </BoxWithMotion>
  );
};

export default PolaroidContainer;
