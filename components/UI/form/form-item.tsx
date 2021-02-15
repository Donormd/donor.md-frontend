import styled from 'styled-components';
import { Title } from '../typography';

export declare type FormItemProps = {
  columns?: number;
  children?: React.ReactNode;
  help?: string;
  label?: string;
  required?: boolean;
};

const Wrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  }
`;

const Column = styled.div``;

const Label = styled(Title)<{ required?: boolean }>`
  margin-top: 5px;
  &::after {
    display: ${({ required }) => (required ? 'inline-block' : 'none')};
    margin-left: 4px;
    color: ${({ theme }) => theme.redDiluted};
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
    top: -7px;
  }
`;

const Help = styled.span`
  color: ${({ theme }) => theme.textMuted};
`;

export const FormItem: React.FC<FormItemProps> = ({
  label,
  help,
  children,
  columns = 2,
  required,
}) => {
  return (
    <Wrapper columns={columns}>
      <Column>
        <Label as='h5' required={required}>
          {label}
        </Label>
        <Help>{help}</Help>
      </Column>
      <Column>{children}</Column>
    </Wrapper>
  );
};
