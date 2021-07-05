import React from "react";
import { graphql, Link } from "gatsby";
import { Box } from "@chakra-ui/react";
import { Card } from "gatsby-theme-ekkus-design-library";

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

const IndexPage = ({ data }: IndexPageProps) => (
  <div>
    <Card>
      <Box color="primary">Testi</Box>
    </Card>
    <p>
      Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

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
