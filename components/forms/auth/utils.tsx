import React from 'react';
import styled from 'styled-components';
import { StyledLink, Button } from '../../UI';

export declare type Props = {
  btnText: string;
  linkText: string;
  linkOnClick: () => void;
};

const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionLayout: React.FC<Props> = ({ btnText, linkText, linkOnClick }): JSX.Element => (
  <StyledLayout>
    <Button variant='danger' size='lg'>
      {btnText}
    </Button>
    <StyledLink onClick={linkOnClick} color='textDark' underline>
      {linkText}
    </StyledLink>
  </StyledLayout>
);

export const WrappedLink = styled(StyledLink)`
  display: block;
  margin-top: 15px;
`;
