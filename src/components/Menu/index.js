import React, { useEffect } from 'react';
import Option from '../Option';
import styled from 'styled-components';
import NoResults from '../../components/NoResults';
import { useMenuContext } from '../../contexts/menuContext';

const StyledMenu = styled.ul``;

const Menu = ({ options, level = 0, isEmpty = false }) => {
  if (isEmpty) return <NoResults />;

  return (
    <ul data-testid={`LINK_MENU_${level}`}>
      {options.map((op, i) => {
        return (
          <li>
            <Option text={op.title} url={op.url} />
            {op?.children?.length > 0 && <Menu options={op.children} level={i + 1} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
