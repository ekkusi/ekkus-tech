import * as React from "react";
import { Box } from "@chakra-ui/react";

const Header = () => (
  <Box
    as="header"
    px="5"
    position="relative"
    height={{ base: "8.8vh", sm: "6.25vh" }}
  >
    {/* <Text as={Link} to="/" fontSize="xl">
      Päämajalle
    </Text> */}
  </Box>
);

export default Header;
