import React, { useEffect } from 'react';
import { useMenuContext } from './contexts/menuContext';
import Menu from './components/Menu';
import styled from 'styled-components';
// @ts-ignore
import anonosLogo from './assets/logo.svg';
import * as STYLE_CONSTSANTS from './constants/styling';

const MenuContainer = styled.div`
  margin-top: ${({ theme }) =>
    theme.name === STYLE_CONSTSANTS.THEME_NAKED ? theme.space.xxl : theme.space.l};
  padding: ${({ theme }) => theme.space.l};
  padding-top: ${({ theme }) => theme.space.xl};
  background: ${({ theme }) => theme.colors.light};
  border: ${({ theme }) => `${theme.border.all} solid ${theme.colors.primary}`};
  align-self: flex-start;
  position: relative;
`;

const Input = styled.input`
  border-radius: ${({ theme }) => theme.radius.all};
  border: ${({ theme }) => `${theme.border.all} solid ${theme.colors.primary}`};
  padding: ${({ theme }) => theme.input.padding};
  box-shadow: ${({ theme }) => theme.shadow[100]};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow[200]};
  }
`;

const LogoImg = styled.img`
  display: ${({ theme }) => (theme.name === STYLE_CONSTSANTS.THEME_NAKED ? 'none' : 'block')};
  width: 340px;
  align-self: flex-end;
  margin-right: 40px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const TreeLabel = styled.h3`
  position: absolute;
  background: ${({ theme }) => theme.colors.warning};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.m}`};
  box-shadow: ${({ theme }) => theme.shadow[100]};
  top: ${({ theme }) => `-${theme.space.xl}`};
  left: ${({ theme }) => theme.space.l};
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
    <>
      <LogoImg src={anonosLogo} alt="Anonos Logo" />
      <MenuContainer>
        <TreeLabel>Three</TreeLabel>
        <Input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          data-testid="INPUT_FILTER"
          placeholder="Filter menu by..."
        />
        {isMenuLoading && <div>loading</div>}
        <Menu
          options={filtered.length !== 0 ? filtered : options}
          isEmpty={filtered.length === 0 && term !== ''}
        />
      </MenuContainer>
    </>
  );
};

export default App;
