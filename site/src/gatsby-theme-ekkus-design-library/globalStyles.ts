export const lineHeight = { base: "6.55vh", sm: "4.2vh" };

export default {
  body: {
    fontSize: {
      base: "md",
      md: "lg",
    },
  },
  "p, a, span, h1, h2, h3, h4, h5, h6, ul, li": {
    lineHeight,
  },
  "p > *, span > *, a > *, h1 > *, h2 > *, h3 > *, h4 > *, h5 > *, h6 > *": {
    lineHeight: 1,
  },
  h1: {
    fontSize: "4xl",
  },
};
