import React from 'react';
import styled from 'styled-components';

export declare type Props = {
  message?: string;
  className?: string;
  children?: React.ReactNode;
};

const StyledMessage = styled.div`
  margin: 20px 0;
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: ${({ theme }) => `${theme.radius} ${theme.radius} ${theme.radius} 0`};
  box-shadow: 0 25px 25px -25px rgba(0, 0, 0, 0.25);
  background: white;
`;

const Alert: React.FC<Props> = ({ message = '', children, className }): JSX.Element => {
  if (children) return <StyledMessage className={className}>{children}</StyledMessage>;
  return <StyledMessage className={className}>{message}</StyledMessage>;
};

export default React.memo(Alert);
