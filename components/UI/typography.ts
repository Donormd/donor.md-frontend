import styled from 'styled-components';

export declare type TitleProps = {
  bold?: boolean;
  size?: string;
  align?: string;
};

export const Title = styled.h1<TitleProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => size || ''};
  text-align: ${({ align }) => align || 'left'};
`;

export const Paragraph = styled.p<TitleProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => size || ''};
  text-align: ${({ align }) => align || 'left'};
`;
