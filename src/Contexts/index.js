import { createContext } from 'react';

const searchContext = {
  options: [],
  term: '',
  dispay: [],
};

export const SearchContext = createContext(
  searchContext.dark // default value
);
