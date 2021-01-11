import React from 'react';
import styled from 'styled-components';

export declare type Props = {
  message?: string;
  children?: React.ReactNode;
};

const StyledMessage = styled.div`
  margin: 20px 0;
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: 25px 25px 25px 0;
  box-shadow: 0 25px 25px -25px rgba(0, 0, 0, 0.25);
  background: white;
`;

const Alert: React.FC<Props> = ({ message = '', children }): JSX.Element => {
  if (children) return <StyledMessage>{children}</StyledMessage>;
  return <StyledMessage>{message}</StyledMessage>;
};

export default React.memo(Alert);
