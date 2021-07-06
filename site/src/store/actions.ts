import { Store } from "use-global-hook";
import { ActionTypes, GlobalState } from "./types";

const actions = {
  setHasVisitedFrontPage: (
    store: Store<GlobalState, ActionTypes>,
    hasVisitedFrontPage: boolean
  ) => {
    store.setState({ ...store.state, hasVisitedFrontPage });
  },
};

export default actions;
