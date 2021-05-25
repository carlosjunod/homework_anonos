import React from 'react';
import styled from 'styled-components';
import * as THEME_CONSTANTS from '../../constants/styling';

const Header = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.highlight};
  border-bottom: ${({ theme }) =>
    theme.name === THEME_CONSTANTS.THEME_NAKED
      ? `${theme.border.s} ${theme.colors.primary}`
      : `${theme.border.all}`};

  & > label {
    padding: ${({ theme }) => theme.input.padding};
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
  }
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.input.padding};
  border-radius: ${({ theme }) => theme.radius.all};
  border: ${({ theme }) => theme.border.all};
  box-shadow: ${({ theme }) => theme.shadow[100]};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow[200]};
  }
`;

const ThemeSelector = (props) => {
  const { setActiveTheme, activeTheme } = props;

  return (
    <Header>
      <label>
        Select your theme 🎨
        <Select
          onChange={(e) => setActiveTheme(e.target.value)}
          value={activeTheme}
          id="themeSelector"
        >
          <option value={THEME_CONSTANTS.THEME_NAKED}>Naked</option>
          <option value={THEME_CONSTANTS.THEME_ANONOS}>Anonos</option>
        </Select>
      </label>
    </Header>
  );
};

export default ThemeSelector;
