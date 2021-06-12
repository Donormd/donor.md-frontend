import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../button';
import { IProps } from './types';

export const ButtonGroup: FC<IProps> = ({ buttons, handleClick }) => {
  const [buttonId, setButtonId] = useState<string>('0');
  const [{ _id }] = buttons;

  const onClick = useCallback(
    (_id: string) => {
      if (_id === buttonId) return;
      handleClick(_id);
      setButtonId(_id);
    },
    [buttonId, handleClick],
  );

  useEffect(() => onClick(_id), [_id, onClick]);

  return (
    <ButtonsWrapper>
      {buttons.map(({ _id, text }) => (
        <StyledButton
          key={_id}
          size='lg'
          variant='outline-primary'
          active={buttonId === _id}
          onClick={() => onClick(_id)}
        >
          {text}
        </StyledButton>
      ))}
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 576px) {
    flex-direction: row;
    max-height: 62px;
  }

  & button {
    margin-bottom: 15px;
  }
`;

const StyledButton = styled(Button)<{ active: boolean }>`
  width: 100%;
  color: ${({ active }) => active && 'white'};
  background: ${({ active, theme }) => active && theme.colors.danger};

  @media (min-width: ${({ theme }) => theme.media.sm}) {
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 0;
    }

    &:nth-of-type(2):not(:last-child) {
      border-radius: 0;
      border-right-width: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
