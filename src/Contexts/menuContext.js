import React, { createContext, useReducer, useMemo } from 'react';
import * as CONSTANTS from '../Constants/menuActions';

const menuContext = {
  options: [],
  term: '',
  display: [],
};

function menuReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.SET_OPTIONS: {
      return {
        ...state,
        options: action.payload,
      };
    }
    case CONSTANTS.SET_TERM: {
      return {
        ...state,
        term: action.payload,
      };
    }
    case CONSTANTS.SET_DISPLAY: {
      return {
        ...state,
        display: action.payload,
      };
    }
    default: {
      throw new Error(`action ${action.type} is not avialable`);
    }
  }
}

export const MenuContext = createContext(menuContext);

export function MenuProvider(props) {
  const [state, dispatch] = useReducer(menuReducer, menuContext);
  const value = useMemo(() => [state, dispatch], [state]);
  return <MenuContext.Provider value={value} {...props} />;
}
