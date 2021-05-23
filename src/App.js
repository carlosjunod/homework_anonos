import React, { useEffect } from 'react';
import { useMenuContext } from './contexts/menuContext';
import Menu from './components/Menu';

const App = () => {
  const {
    state: { term, options, filtered },
    setTerm,
    fetchMenu,
  } = useMenuContext();

  useEffect(() => {
    console.log('CALLING API');
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
      <Menu
        options={filtered.length !== 0 ? filtered : options}
        isEmpty={filtered.length === 0 && term !== ''}
      />
    </div>
  );
};

export default App;
