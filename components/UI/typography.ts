import styled from 'styled-components';

export declare type TitleProps = {
  margin?: boolean;
  bold?: boolean;
  size?: string;
  align?: string;
  color?: string;
};

export const Title = styled.h1<TitleProps>`
  margin-bottom: ${({ margin }) => (!margin ? 0 : '0.5rem')};
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
  margin-bottom: ${({ margin }) => (!margin ? 0 : '1rem')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => size || ''};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color, theme }) => color || theme.textDark};
`;
