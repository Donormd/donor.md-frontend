import { FC } from 'react';
import styled from 'styled-components';
import { StyledLink, Button } from '../../UI';

export declare type Props = {
  btnText: string;
  linkText: string;
  linkOnClick: () => void;
};

export const ActionLayout: FC<Props> = ({ btnText, linkText, linkOnClick }) => (
  <StyledLayout>
    <Button type='submit' variant='danger' size='lg'>
      {btnText}
    </Button>
    <StyledLink onClick={linkOnClick} color='textDark' underline>
      {linkText}
    </StyledLink>
  </StyledLayout>
);

const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrappedLink = styled(StyledLink)`
  display: block;
  margin-top: 15px;
`;
