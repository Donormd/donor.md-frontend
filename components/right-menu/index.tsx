import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  display: none;
`;

const RightMenu: React.FC = (): JSX.Element => {
  return <Aside>Right Menu</Aside>;
};

export default RightMenu;
