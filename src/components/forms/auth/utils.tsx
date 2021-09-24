import styled from 'styled-components';

import { Button } from '../../UI/button';
import { StyledLink } from '../../UI/links';

type ActionLayoutType = {
  btnText: string;
  linkText: string;
  linkOnClick: () => void;
};

export const ActionLayout = ({ btnText, linkText, linkOnClick }: ActionLayoutType) => (
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
