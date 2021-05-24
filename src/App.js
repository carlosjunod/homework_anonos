import React, { useEffect } from 'react';
import { useMenuContext } from './contexts/menuContext';
import Menu from './components/Menu';
import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: ${({ theme }) => theme.space.padding};
  background: ${({ theme }) => theme.colors.light};
`;

const Input = styled.input`
  border-radius: ${({ theme }) => theme.radius.all};
  border: ${({ theme }) => theme.border.all};
  padding: ${({ theme }) => theme.input.padding};
  box-shadow: ${({ theme }) => theme.shadow[100]};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow[200]};
  }
`;

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
    <MenuContainer>
      <Input
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
    </MenuContainer>
  );
};

export default App;
