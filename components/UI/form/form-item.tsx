import { FC } from 'react';
import styled from 'styled-components';

import { Title } from '../typography';

export const Form = styled.form``;

interface IProps {
  columns: number;
  columnsSm: number;
  help: string;
  label: string;
  marginBottom: string;
  required: boolean;
  error: string;
}

export const FormItem: FC<Partial<IProps>> = ({
  label,
  help,
  children,
  columns = 1,
  columnsSm = 1,
  required,
  marginBottom,
  error,
}) => {
  return (
    <FormItemWrapper marginBottom={marginBottom}>
      <Wrapper columns={columns} columnsSm={columnsSm}>
        <Column>
          {label && (
            <Label as='h5' required={required}>
              {label}
            </Label>
          )}
          {help && <Help>{help}</Help>}
        </Column>
        <Column>{children}</Column>
      </Wrapper>
      <Error>{error}</Error>
    </FormItemWrapper>
  );
};

const FormItemWrapper = styled.div<{ marginBottom?: string }>`
  padding-bottom: ${({ marginBottom }) => marginBottom || '10px'};
`;

const Wrapper = styled.div<{ columns: number; columnsSm: number }>`
  display: grid;
  grid-template-columns: ${({ columnsSm }) => `repeat(${columnsSm}, 1fr)`};
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  }
`;

const Column = styled.div``;

const Error = styled.div`
  height: 14px;
  margin: 8px 0;
  font-size: 0.8125em;
  color: ${({ theme }) => theme.colors.danger};
`;

const Label = styled(Title)<{ required?: boolean }>`
  margin: 5px 0 15px 5px;
  &::after {
    display: ${({ required }) => (required ? 'inline-block' : 'none')};
    margin-left: 4px;
    color: ${({ theme }) => theme.redDiluted};
    font-size: 0.875em;
    line-height: 1;
    content: '*';
    top: -7px;
  }
`;

const Help = styled.span`
  font-size: 0.875em;
  color: ${({ theme }) => theme.textMuted};
`;
