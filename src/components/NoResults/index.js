import React from 'react';
import styled from 'styled-components';

const StyledNoResult = styled.div`
  padding: ${({ theme }) => theme.space.padding};
  color: ${({ theme }) => theme.colors.warning};
  text-transform: uppercase;
  font-weight: bolder;
`;

const NoResults = () => {
  return <StyledNoResult>No results</StyledNoResult>;
};

export default NoResults;
