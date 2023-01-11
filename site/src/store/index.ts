import { createGlobalState } from 'react-hooks-global-state';

const initialState = { hasVisitedFrontPage: false };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
