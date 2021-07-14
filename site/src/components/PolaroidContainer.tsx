import { Box, BoxProps, Text } from "@chakra-ui/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Heading } from "../../../gatsby-theme-ekkus-design-library";

type PolaroidContainerProps = BoxProps & {
  imageData?: IGatsbyImageData;
  title: string;
};

const PolaroidContainer = ({
  children,
  imageData,
  title,
  ...boxProps
}: PolaroidContainerProps): JSX.Element => {
  return (
    <Box
      bg="transparent"
      width="350px"
      height={{ base: "100vw", sm: "450px" }}
      maxWidth="100%"
      _hover={{
        "& > div": {
          transform: "rotateY(180deg)",
        },
      }}
      __css={{
        "& *": { lineHeight: "1.5em" },
        perspective: "1000px",
      }}
      {...boxProps}
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        transition="transform 0.6s"
        boxShadow="lg"
        __css={{
          transformStyle: "preserve-3d",
          "& > div": {
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "5px",
            bg: "#DADADA",
          },
        }}
      >
        <Box color="black">
          {imageData ? (
            <Box
              as={GatsbyImage}
              image={imageData}
              alt="Polaroid sub image"
              position="absolute"
              width="80%"
              height="75%"
              bg="black"
              top="9%"
              left="10%"
              __css={{
                backfaceVisibility: "hidden",
              }}
            />
          ) : (
            <Box
              position="absolute"
              width="80%"
              height="75%"
              bg="black"
              top="9%"
              left="10%"
            />
          )}
          <Text
            position="absolute"
            top={{ base: -2, sm: 0 }}
            left={{ base: "3", sm: "5" }}
            fontSize="4xl"
          >
            x
          </Text>
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
        <Box transform="rotateY(180deg)" p={{ base: "5", sm: "10" }} zIndex="5">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PolaroidContainer;
