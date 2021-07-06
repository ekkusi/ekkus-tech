import React from "react";
import { WrapPageElementNodeArgs } from "gatsby";
import { AnimatePresence } from "framer-motion";
// import { globalHistory } from "@reach/router";

export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => {
  // useEffect(() => {
  //   console.log(props);
  //   console.log(element);
  // });

  return (
    <>
      <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </>
  );
};
