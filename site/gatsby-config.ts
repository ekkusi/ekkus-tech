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
  ],
};
