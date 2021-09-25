import styled from 'styled-components';

import { Paragraph } from '../../../components/UI/typography';

export const Grid = styled.div`
  display: grid;

  @media (min-width: 992px) {
    grid-template-columns: 55% 45%;
    grid-column-gap: 20px;
  }
`;
export const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;
export const SectionParagraph = styled(Paragraph)`
  margin: 15px 0;
`;

export const Social = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-top: 40px;
  }
`;
