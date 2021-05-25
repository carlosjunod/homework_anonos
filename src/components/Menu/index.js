import React, { useEffect } from 'react';
import Option from '../Option';
import NoResults from '../../components/NoResults';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Menu = ({ options, level = 0, isEmpty = false }) => {
  if (isEmpty) return <NoResults />;

  return (
    <ul data-testid={`LINK_MENU_${level}`}>
      {options.map((op, i) => {
        let key = uniqid.time();
        return (
          <li key={key}>
            <Option text={op.title} url={op.url} />
            {op?.children?.length > 0 && <Menu options={op.children} level={i + 1} />}
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
