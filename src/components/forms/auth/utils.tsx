import styled from 'styled-components';

import { Button, StyledLink } from '../../UI';

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
