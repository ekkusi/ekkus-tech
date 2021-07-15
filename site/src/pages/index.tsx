import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { globalHistory } from "@reach/router";
import {
  chakraMotionWrapper,
  Heading,
  HoverUnderline,
} from "gatsby-theme-ekkus-design-library";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
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
        fontStyle="italic"
        textAlign="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Yhden joka-paikan-koodarin IT-pulju
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
      <Flex position="absolute" bottom="0">
        <Text
          as="a"
          href="https://fi.linkedin.com/in/ekku-sipila"
          target="_blank"
          mr="5"
        >
          <Icon as={AiOutlineLinkedin} mb="1" mr="1" />
          <HoverUnderline as="span">Linkedin</HoverUnderline>
        </Text>
        <Text
          display="inline-block"
          as="a"
          href="https://github.com/ekkusi"
          target="_blank"
        >
          <Icon as={AiOutlineGithub} mb="1" mr="1" />
          <HoverUnderline as="span">Github</HoverUnderline>
        </Text>
      </Flex>
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
