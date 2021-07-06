import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { globalHistory } from "@reach/router";
import {
  chakraMotionWrapper,
  Heading,
} from "gatsby-theme-ekkus-design-library";
import { Text } from "@chakra-ui/react";
import NavigationTree from "../components/NavigationTree";
import Layout from "../components/Layout";
import useGlobal from "../store";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const MotionText = chakraMotionWrapper(Text);

const IndexPage = ({ data }: IndexPageProps) => {
  const setHasVisitedFrontPage = useGlobal(
    () => {},
    (actions) => actions.setHasVisitedFrontPage
  )[1];
  useEffect(() => {
    globalHistory.listen((routeProps) => {
      if (routeProps.action === "PUSH") {
        setHasVisitedFrontPage(true);
      }
    });
  });

  return (
    <Layout noFooter>
      <Heading.H1 textAlign="center">{data.site.siteMetadata.title}</Heading.H1>
      <MotionText
        as="h3"
        fontSize={{ base: "lg", md: "xl" }}
        fontStyle="italic"
        textAlign="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Yhden sitä-sun-tätä-koodarin IT-pulju
      </MotionText>
      <NavigationTree
        width={{ base: "120%", md: "70%" }}
        height="70vh"
        position="absolute"
        bottom={{ base: "50px", md: "10vh" }}
        left="50%"
        transform="translateX(-50%)"
        transitionDelay={1}
      />
      {/* <Text
      as={Link}
      to="/projects"
      fontSize="3xl"
      fontWeight="bold"
      position="absolute"
      top="49vh"
      left="33%"
    >
      Projektit
    </Text>
    <Text
      as={Link}
      to="/contact"
      fontSize="3xl"
      fontWeight="bold"
      position="absolute"
      top="42vh"
      left="61%"
    >
      Ota yhteyttä
    </Text> */}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
