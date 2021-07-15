import dotenv from "dotenv";

dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Ekku's Tech`,
    description: "Yhden joka-paikan-koodarin IT-pulju",
    author: "Ekku Sipilä",
    siteUrl: "https://ekkus.tech",
    image: "/static/icon.svg",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ekku's Tech`,
        short_name: `ekkus-tech`,
        start_url: `/`,
        background_color: `#DADADA`,
        theme_color: `#DADADA`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
