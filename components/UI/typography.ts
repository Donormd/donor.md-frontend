import styled from 'styled-components';

export declare type TitleProps = {
  bold?: boolean;
  size?: string;
  align?: string;
};

const Title = styled.h1<TitleProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ size }) => size || '3em'};
  text-align: ${({ align }) => align || 'left'};
`;

export default Title;
