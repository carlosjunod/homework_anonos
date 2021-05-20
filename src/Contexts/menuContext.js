import React, { createContext, useReducer, useMemo, useContext } from 'react';
import * as CONSTANTS from '../Constants/menuActions';

const menuContextDefault = { options: [], term: '', display: [] };

export const MenuContext = createContext();

function menuReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.SET_OPTIONS:
      return { ...state, options: action.payload };
    case CONSTANTS.SET_TERM:
      return { ...state, term: action.payload };
    case CONSTANTS.SET_DISPLAY:
      return { ...state, display: action.payload };
    default: {
      throw new Error(`action ${action.type} is not avialable`);
    }
  }
}

export function MenuProvider(props) {
  const [state, dispatch] = useReducer(menuReducer, menuContextDefault);
  const value = useMemo(() => [state, dispatch], [state]);
  return <MenuContext.Provider value={value} {...props} />;
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(`useMenuContext cannot be used outside of menuContext`);
  }
  const [state, dispatch] = context;
  const setTerm = (term) => dispatch({ type: CONSTANTS.SET_TERM, payload: term });

  return {
    state,
    dispatch,
    setTerm,
  };
}
