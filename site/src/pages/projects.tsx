import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { Heading } from "gatsby-theme-ekkus-design-library";

import Layout from "../components/Layout";
import { PageQuery } from "../types/PageQuery";
import { lineHeight } from "../gatsby-theme-ekkus-design-library/globalStyles";
import PostItContainer from "../components/PostItContainer";

const ProjectsPage = ({
  data,
}: PageQuery<GatsbyTypes.ProjectsPageQuery>): JSX.Element => {
  const getRandomRotateDeg = () => {
    let num = Math.floor(Math.random() * 10); // this will get a number between 1 and 99;
    num *= Math.round(Math.random()) ? 1 : -1; // this will add
    return num;
  };

  return (
    <Layout title="Projektit">
      <Heading.H1 textAlign="center">Projektit</Heading.H1>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={lineHeight}>
        {data.allSanityProject.edges.map(({ node }) => (
          <PostItContainer transform={`rotate(${getRandomRotateDeg()}deg)`}>
            <Heading.H3 fontWeight="bold">{node.name}</Heading.H3>
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
          </PostItContainer>
        ))}
      </SimpleGrid>
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
          github_url
          description
          name
          site_url
        }
      }
    }
  }
`;
