import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import { KeyType, ButtonsProps, Props } from './types';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  & button {
    margin-bottom: 15px;
  }
`;

const StyledButton = styled(Button)<{ active: boolean; outline: boolean }>`
  color: ${({ active, theme, color }) => (active ? 'white' : theme[color])};
  background: ${({ active, theme, color }) => (active ? theme[color] : 'white')};

  @media (min-width: 576px) {
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
          size='md'
          variant='outline-danger'
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
