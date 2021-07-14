import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { Heading } from "gatsby-theme-ekkus-design-library";

import Layout from "../components/Layout";
import { PageQuery } from "../types/PageQuery";
import PolaroidContainer from "../components/PolaroidContainer";

const ProjectsPage = ({
  data,
}: PageQuery<GatsbyTypes.ProjectsPageQuery>): JSX.Element => {
  const getRandomRotateDeg = () => {
    let num = Math.floor(Math.random() * 5); // this will get a number between 1 and 99;
    num *= Math.round(Math.random()) ? 1 : -1; // this will add
    return num;
  };

  return (
    <Layout title="Projektit">
      <Heading.H1 textAlign="center" mb={{ base: "14", sm: "10" }}>
        Projektit
      </Heading.H1>
      <Flex wrap="wrap" justifyContent="space-around" px={{ base: 3, sm: 2 }}>
        {data.allSanityProject.edges.map(({ node }) => (
          <>
            <PolaroidContainer
              key={node.id}
              title={node.name || ""}
              imageData={node.image?.asset?.gatsbyImageData}
              transform={`rotate(${getRandomRotateDeg()}deg)`}
              width={{ base: "100%", sm: "400px" }}
              mr={{ base: "0", md: "10" }}
              mb={{ base: "16", sm: "10" }}
            >
              <Text mb="2">{node.description}</Text>
              {node.github_url && (
                <Text
                  as="a"
                  target="_blank"
                  href={node.github_url}
                  display="block"
                  textDecoration="underline"
                  fontStyle="italic"
                >
                  {"Koodiin ->"}
                </Text>
              )}
              {node.site_url && (
                <Text
                  as="a"
                  target="_blank"
                  textDecoration="underline"
                  fontStyle="italic"
                  href={node.site_url}
                  display="block"
                >
                  {"Sivulle ->"}
                </Text>
              )}
            </PolaroidContainer>
          </>
        ))}
      </Flex>
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query ProjectsPage {
    allSanityProject {
      edges {
        node {
          id
          image {
            asset {
              gatsbyImageData(
                width: 500
                height: 500
                backgroundColor: "#000000"
              )
            }
          }
          github_url
          description
          name
          site_url
        }
      }
    }
  }
`;
