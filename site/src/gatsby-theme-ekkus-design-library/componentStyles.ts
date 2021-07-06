import { lineHeight } from "./globalStyles";

const baseStyles = {
  lineHeight,
};

export default {
  Heading: {
    baseStyle: {
      ...baseStyles,
    },
    sizes: {
      sm: {
        ...baseStyles,
      },
      md: {
        ...baseStyles,
      },
      lg: {
        ...baseStyles,
      },
      xl: {
        ...baseStyles,
      },
      "2xl": {
        ...baseStyles,
      },
      "3xl": {
        ...baseStyles,
      },
      "4xl": {
        ...baseStyles,
      },
    },
    defaultProps: {
      lineHeight,
    },
  },
};
