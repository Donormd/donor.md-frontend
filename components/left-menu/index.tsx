import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  display: none;
`;

const LeftMenu: React.FC = (): JSX.Element => {
  return <Aside>Left Menu</Aside>;
};

export default LeftMenu;
