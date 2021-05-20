import React from 'react';
import { useMenuContext } from './Contexts/menuContext';

const App = () => {
  const { state, setTerm } = useMenuContext();

  console.log('STATE:::', state);
  return (
    <div>
      <h1>{state.term}</h1>
      <input type="text" value={state.term} onChange={(e) => setTerm(e.target.value)} />
    </div>
  );
};

export default App;
