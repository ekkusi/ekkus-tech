import { Text } from "@chakra-ui/react";
import React from "react";
import { Heading } from "gatsby-theme-ekkus-design-library";

import Layout from "../components/Layout";

const ProjectsPage = (): JSX.Element => {
  return (
    <Layout title="Projektit">
      <Heading.H1>Projektit</Heading.H1>
      <Text>Tämä sivu päivittyy aivan justiinsa! Palaa pian:)</Text>
    </Layout>
  );
};

export default ProjectsPage;
