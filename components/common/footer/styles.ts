import styled from 'styled-components';

import { Paragraph, Title } from '../../UI';

export const StyledFooter = styled.footer`
  padding: 50px 0;
  background: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TitleBrand = styled(Title)`
  color: ${({ theme }) => theme.red};
  text-transform: uppercase;
  text-decoration: underline;
`;

export const ParagraphSlogan = styled(Paragraph)`
  color: ${({ theme }) => theme.textMuted};
`;

export const ColumnList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ColumnListItem = styled.li`
  padding-bottom: 5px;
`;
