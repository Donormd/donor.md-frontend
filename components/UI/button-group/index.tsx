import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import { KeyType, ButtonsProps, Props } from './types';

const ButtonGroup: React.FC<Props> = ({ buttons, handleClick }): JSX.Element => {
  const [buttonId, setButtonId] = useState<KeyType>(0);

  const onClick = (key: KeyType) => {
    if (key === buttonId) return;
    handleClick(key);
    setButtonId(key);
  };

  const [{ key }] = buttons;
  useEffect(() => onClick(key), []);

  return (
    <ButtonsWrapper>
      {buttons.map(({ key, text }: ButtonsProps) => (
        <StyledButton
          key={key}
          size='lg'
          variant='outline-primary'
          active={buttonId === key}
          onClick={() => onClick(key)}
        >
          {text}
        </StyledButton>
      ))}
    </ButtonsWrapper>
  );
};

export * from './types';
export default React.memo(ButtonGroup);

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
