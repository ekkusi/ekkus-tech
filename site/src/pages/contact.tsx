import { Text, ListItem, UnorderedList, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Heading } from "gatsby-theme-ekkus-design-library";
import Layout from "../components/Layout";
import { lineHeight } from "../gatsby-theme-ekkus-design-library/globalStyles";

const ContactPage = (): JSX.Element => {
  return (
    <Layout title="Ota yhteyttä">
      <Heading.H1>Etsin jatkuvasti:</Heading.H1>
      <UnorderedList>
        {/* <StaticImage src="../../static/polaroid.png" alt="polaroid" /> */}
        <Box as="br" display={{ base: "none", md: "block" }} />
        <ListItem>
          Mieltä kutkuttavia projekteja, joihin lyöttäytyä mukaan
        </ListItem>
        <ListItem>Lyhyitä tai keskipitkiä koodailukeikkoja</ListItem>
        <br />
      </UnorderedList>
      <Flex alignItems="center" justifyContent="center">
        <Box
          textAlign="center"
          p={lineHeight}
          border="2px solid black"
          borderRadius="50%"
        >
          <Heading.H3>
            Osuiko joku kohta? Ota yhteyttä, niin höpötellään:)
          </Heading.H3>
          <Text
            as="a"
            href="mailto:ekku.eki@gmail.com"
            textDecoration="underline"
            fontStyle="italic"
            fontWeight="bold"
            fontSize="2xl"
          >
            ekku.eki@gmail.com
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ContactPage;
