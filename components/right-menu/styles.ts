import styled from 'styled-components';
import { Paragraph } from '../UI';

export const Aside = styled.aside`
  display: none;
  padding: 25px;
  background: ${({ theme }) => theme.primary};
  @media (min-width: 992px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  padding: 0;
`;
export const MenuItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px 0 15px;
  color: black;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};

  &:hover {
    background: ${({ theme }) => theme.redDiluted};
  }

  &:hover path {
    stroke: white;
  }
`;

export const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 120px min-content;
`;

export const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
`;

export const ItemParagraph = styled(Paragraph)`
  display: flex;
  align-items: center;
  margin: 0;
`;
