import styled from 'styled-components';
import { Title } from '../typography';

export const Form = styled.form``;

export declare type FormItemProps = {
  columns?: number;
  columnsSm?: number;
  children?: React.ReactNode;
  help?: string;
  label?: string;
  marginBottom?: string;
  required?: boolean;
  error?: string;
};

export const FormItem: React.FC<FormItemProps> = ({
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
    <Wrapper columns={columns} columnsSm={columnsSm} marginBottom={marginBottom}>
      <Column>
        <Label as='h5' required={required}>
          {label}
        </Label>
        <Help>{help}</Help>
      </Column>
      <Column>{children}</Column>
      {error && <ErrorColumn columns={columns}>{error}</ErrorColumn>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ columns: number; columnsSm: number; marginBottom?: string }>`
  display: grid;
  grid-template-columns: ${({ columnsSm }) => `repeat(${columnsSm}, 1fr)`};
  margin-bottom: ${({ marginBottom }) => marginBottom || '25px'};
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  }
`;

const Column = styled.div``;

const ErrorColumn = styled.div<{ columns: number }>`
  grid-column: ${({ columns }) => (columns === 2 ? '2 / 3' : '1 / 3')};
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
