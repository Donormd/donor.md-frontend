import styled from 'styled-components';

import { StyledLink } from '../../../UI/links';
import { Title } from '../../../UI/typography';

export const SectionTitle = styled(Title)`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const Underline = styled(StyledLink)`
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.red};
  text-decoration: underline;
`;
export const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ArticleGrid = styled.div`
  padding-top: 30px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
`;
export const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
  padding: 25px;
  margin-bottom: 30px;
  border: ${({ theme }) => `1px solid ${theme.colors.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};
  background: white;

  @media (min-width: 576px) {
    grid-template-columns: max-content 1fr;
  }
`;
