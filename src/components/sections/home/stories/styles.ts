import styled, { css } from 'styled-components';

import { DonorStory } from '../../../donor-story';
import { Button as DefaultBtn } from '../../../UI/button';
import { Section } from '../utils';

export const WrapperDonorStory = styled(DonorStory)(
  ({ theme }) => css`
    @media (max-width: ${theme.media.md}) {
      background: white;
      border: ${`1px solid ${theme.colors.redDiluted}`};
    }
  `,
);

export const WrapperSection = styled(Section)`
  position: relative;
`;

export const ButtonGroup = styled.div`
  position: absolute;
  display: none;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  top: 100px;
  right: 30px;
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    display: grid;
  } ;
`;
export const Button = styled(DefaultBtn)`
  display: inline-block;
  width: 35px;
  height: 35px;
  padding: 0;
  background: transparent;

  border-color: ${({ theme }) => theme.colors.redDiluted};

  & svg {
    width: 100%;
    height: 100%;
    padding: 7px;
  }

  & path {
    fill: ${({ theme }) => theme.colors.redDiluted};
  }

  &:hover path,
  &:focus path {
    fill: ${({ theme }) => theme.colors.red};
  }

  &:hover,
  &:focus {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.red};
  }

  @media (min-width: ${({ theme }) => theme.media.md}) {
    border-color: ${({ theme }) => theme.colors.textDark};
    background: transparent;

    & path {
      fill: ${({ theme }) => theme.colors.textDark};
    }

    &:hover path,
    &:focus path {
      fill: ${({ theme }) => theme.colors.textMuted};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.textMuted};
      background: transparent;
    }
  }
`;
