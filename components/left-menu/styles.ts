import styled from 'styled-components';

export declare type MenuItemProps = { active: boolean };

export const Aside = styled.aside<{ image?: string }>`
  display: none;
  padding: 25px;
  background: white;
  border-right: 1px solid ${({ theme }) => theme.redDiluted};

  @media (min-width: 576px) {
    display: block;
  }

  @media (min-width: 1200px) {
    background-image: ${({ image }) => `url(${image})`};
    background-size: 100% 24vw;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`;

export const Menu = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  padding: 0;
`;
export const MenuItem = styled.li<MenuItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 5px;
  color: ${({ active }) => (active ? 'white' : 'black')};
  & svg path {
    fill: ${({ active }) => (active ? 'white' : 'black')};
  }
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme, active }) => (active ? theme.red : 'white')};

  &:hover {
    color: white;

    background: ${({ theme, active }) => (active ? theme.redDark : theme.redDiluted)};
  }

  &:hover svg path {
    fill: white;
  }
`;

export const Paragraph = styled.p`
  display: none;
  @media (min-width: 1200px) {
    display: inline;
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  &,
  & svg {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1200px) {
    margin-right: 10px;
  }
`;
