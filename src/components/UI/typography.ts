import styled, { css } from 'styled-components';

import { ColorsType } from './theme';

export declare type TitleProps = {
  margin?: string;
  bold?: boolean;
  size?: string;
  align?: string;
  color?: keyof ColorsType;
};

export const Title = styled.h1<TitleProps>(
  ({ margin, bold, size, align, color, theme }) => css`
    margin: ${margin || '0 0 0.5rem 0'};
    font-weight: ${bold ? 'bold' : 'normal'};
    font-size: ${size};
    text-align: ${align};
    color: ${!color ? theme.colors.textDark : `${theme.colors[color] || color}`};
  `,
);

export const TitleWithArrow = styled(Title)`
  &::after {
    content: url('/images/arrow-right.svg');
    width: 22px;
    padding-left: 10px;
    position: absolute;
  }
`;

export const Paragraph = styled.p<TitleProps>(
  ({ margin, bold, size, align, color, theme }) => css`
    margin: ${margin || '0 0 1rem 0'};
    font-weight: ${bold ? 'bold' : 'normal'};
    font-size: ${size};
    text-align: ${align};
    color: ${color ? theme.colors[color] : theme.colors.textDark};
  `,
);
