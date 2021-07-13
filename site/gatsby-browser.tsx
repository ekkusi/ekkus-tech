import React from "react";
import { WrapPageElementNodeArgs } from "gatsby";
import { AnimatePresence } from "framer-motion";
import { Global } from "@emotion/react";
// import { globalHistory } from "@reach/router";

export const wrapPageElement = ({ element }: WrapPageElementNodeArgs) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
      <Global
        styles={`
          /* latin */
          @font-face {
            font-family: StayWriter;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url("/fonts/StayWriter-Bold.otf") format("opentype");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin */
          @font-face {
            font-family: StayWriter;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/fonts/StayWriter-Handmade.otf") format("opentype");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin */
          @font-face {
            font-family: "Skinny Regular";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/fonts/Skinny-Regular.otf") format("opentype");
          }
          /* latin */
          @font-face {
            font-family: WhateverItTakes;
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url("/fonts/whatever-it-takes-bold.otf") format("truetype");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin */
          @font-face {
            font-family: WhateverItTakes;
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url("/fonts/whatever-it-takes.ttf") format("truetype");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
      `}
      />
    </>
  );
};
