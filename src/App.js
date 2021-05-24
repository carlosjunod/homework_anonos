import React, { useEffect } from 'react';
import { useMenuContext } from './contexts/menuContext';
import Menu from './components/Menu';

const App = () => {
  const {
    state: { term, options, filtered, isMenuLoading },
    setTerm,
    fetchMenu,
  } = useMenuContext();

  useEffect(() => {
    const fetchData = async () => {
      await fetchMenu();
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{term}</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        data-testid="INPUT_FILTER"
      />
      {isMenuLoading && <div>loading</div>}
      <Menu
        options={filtered.length !== 0 ? filtered : options}
        isEmpty={filtered.length === 0 && term !== ''}
      />
    </div>
  );
};

export default App;
