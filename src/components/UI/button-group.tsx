import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IOptions } from '../../core/interfaces/IIterableStruct';
import { Button } from './button';

type ButtonGroupType = {
  buttons: IOptions[];
  onClick?: (_id: string) => void;
};

export const ButtonGroup = ({ buttons, onClick }: ButtonGroupType) => {
  const [buttonId, setButtonId] = useState('');
  const [{ _id }] = buttons;

  useEffect(() => {
    setButtonId(_id);
  }, [_id]);

  const handleClick = (id: string) => () => {
    setButtonId(id);
    onClick?.(id);
  };

  return (
    <ButtonGroupWrapper>
      {buttons.map(({ _id, text }) => (
        <StyledButton
          key={_id}
          size='lg'
          variant='outline-primary'
          active={buttonId === _id}
          onClick={handleClick(_id)}
        >
          {text}
        </StyledButton>
      ))}
    </ButtonGroupWrapper>
  );
};

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

const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & ${StyledButton} {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    max-height: 62px;
  }
`;
