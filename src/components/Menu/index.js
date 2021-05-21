import React from 'react';
import Option from '../Option';
import styled from 'styled-components';
import NoResults from '../../components/NoResults';

const StyledMenu = styled.ul``;

const Menu = ({ options, isEmpty = false }) => {
  if (isEmpty) return <NoResults />;
  return (
    <ul>
      {options.map((op) => {
        return (
          <>
            <Option text={op.title} url={op.url} />
            {op.children && op.children.length > 0 && <Menu options={op.children} />}
          </>
        );
      })}
    </ul>
  );
};

export default Menu;
