import dotenv from "dotenv";

dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Ekku's Tech`,
    description: "Independent tech house of E.S.",
    author: "Ekku Sipilä",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    `gatsby-theme-ekkus-design-library`,
    `gatsby-plugin-typegen`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ridvf1vx`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};
