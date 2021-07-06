import { Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";
import { Heading } from "gatsby-theme-ekkus-design-library";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <Heading.H1>404</Heading.H1>
    <Text>Nyt sinä eksyit tuntemattomille alueille...</Text>
    <Text as={Link} to="/" fontSize="4xl" fontWeight="bold">
      {"<- PALUU TODELLISUUTEEN"}
    </Text>
  </Layout>
);

export default NotFoundPage;
