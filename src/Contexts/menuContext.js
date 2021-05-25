import React, { createContext, useReducer, useMemo, useContext } from 'react';
import * as CONSTANTS from '../constants/menuActions';
import { handleFetchErrors } from '../Utils';

import * as UTILS from '../Utils';

const menuContextDefault = { options: [], term: '', filtered: [], isMenuLoading: true };

export const MenuContext = createContext([]);

function menuReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.SET_OPTIONS:
      return { ...state, options: action.payload };
    case CONSTANTS.SET_TERM:
      return { ...state, term: action.payload };
    case CONSTANTS.SET_DISPLAY:
      return { ...state, filtered: action.payload };
    case CONSTANTS.SET_MENU_LOADING:
      return { ...state, isMenuLoading: action.payload };
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
  const setTerm = (term) => {
    const options = [...state.options];
    const filteredOptions = term && term.length > 1 ? UTILS.filterOptions(options, term) : options;
    dispatch({ type: CONSTANTS.SET_DISPLAY, payload: filteredOptions });
    dispatch({ type: CONSTANTS.SET_TERM, payload: term.toLowerCase() });
  };

  const fetchMenu = async () => {
    dispatch({ type: CONSTANTS.SET_MENU_LOADING, payload: true });

    await fetch(`${process.env.API_URL}/menu`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: CONSTANTS.SET_OPTIONS, payload: data }))
      .catch(handleFetchErrors)
      .finally(() => dispatch({ type: CONSTANTS.SET_MENU_LOADING, payload: false }));
  };

  return {
    state,
    dispatch,
    setTerm,
    fetchMenu,
  };
}
