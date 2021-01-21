import styled from 'styled-components';

export declare type TitleProps = {
  bold?: boolean;
  size?: string;
  align?: string;
  color?: string;
};

export const Title = styled.h1<TitleProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => size || ''};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color, theme }) => color || theme.textDark};
`;

export const TitleWithArrow = styled(Title)`
  &::after {
    content: url('/images/arrow-right.svg');
    width: 22px;
    padding-left: 10px;
    position: absolute;
  }
`;
export const Paragraph = styled.p<TitleProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => size || ''};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color, theme }) => color || theme.textDark};
`;
