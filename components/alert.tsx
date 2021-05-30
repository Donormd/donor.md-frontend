import { FC, memo, useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from './UI';

interface IProps {
  dismissible?: boolean;
  message?: string;
  className?: string;
}

export const Alert: FC<IProps> = memo(({ message, children, className, dismissible }) => {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <Message hide={hide}>
      <Paragraph className={className}>{message || children}</Paragraph>
      {dismissible && (
        <ButtonWrapper>
          <CloseIcon arial-role='button' onClick={() => setHide(true)}>
            <Line />
            <Line />
          </CloseIcon>
        </ButtonWrapper>
      )}
    </Message>
  );
});

const ButtonWrapper = styled.div`
  align-self: center;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.textDark};
`;

const CloseIcon = styled.div`
  cursor: pointer;
  min-width: 30px;
  height: 30px;

  ${Line}:nth-of-type(1) {
    transform: rotate(45deg) translate(8px, 9px);
  }
  ${Line}:nth-of-type(2) {
    transform: rotate(-45deg) translate(-7px, 7px);
  }
`;

const Message = styled.div<{ hide: boolean }>`
  display: ${({ hide }) => (hide ? 'none' : 'grid')};
  grid-template-columns: 1fr min-content;
  margin: 20px 0;
  padding: 15px 25px;
  border: 1px solid black;
  border-radius: ${({ theme }) => `${theme.radius} ${theme.radius} ${theme.radius} 0`};
  box-shadow: 0 25px 25px -25px rgba(0, 0, 0, 0.25);
  background: white;
`;
