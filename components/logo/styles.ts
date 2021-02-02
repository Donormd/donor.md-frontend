import styled from 'styled-components';
import { Paragraph, Title } from '../UI/typography';

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 10px;
`;

export const WrapperImage = styled.div`
  width: 45px;
  height: 45px;
`;

export const WrappedParagraph = styled(Paragraph)`
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
  font-size: 0.8rem;
`;

export const TextWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 5px;
`;

export const ResponsiveLogoWrapper = styled(LogoWrapper)`
  grid-template-columns: 1fr;
  column-gap: 0;
  justify-items: center;
  @media (min-width: 1200px) {
    grid-template-columns: min-content 1fr;
    column-gap: 10px;
  }
`;
