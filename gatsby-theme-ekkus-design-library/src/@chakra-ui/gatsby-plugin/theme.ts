import { extendTheme } from "@chakra-ui/react";
import componentStyles from "../../componentStyles";
import globalStyles from "../../globalStyles";

const theme = {
  styles: {
    global: globalStyles,
  },
  components: componentStyles,
  // components: {
  //   Heading: {
  //     baseStyle: {
  //       textTransform: "uppercase",
  //     },
  //   },
  // },
};
export default extendTheme(theme);
