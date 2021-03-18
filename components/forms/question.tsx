import React, { memo } from 'react';
import styled from 'styled-components';
import { Paragraph, Switch, Select, Title, Input } from '../UI';

export interface IQuestion {
  title: string;
  paragraph: string;
  control: {
    type: string;
    options?: Array<string | number>;
    placeholder?: string;
  };
}

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: grid;
  @media (min-width: 768px) {
    column-gap: 30px;
    grid-template-columns: 1fr 150px;
  }
  @media (min-width: 1200px) {
    column-gap: 30px;
    grid-template-columns: 1fr 250px;
  }
`;

const WrapperSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  & > * {
    margin-right: 15px;
  }
`;

const StyledSwitch = () => (
  <WrapperSwitch>
    <span>Да</span>
    <Switch />
    <span>Нет</span>
  </WrapperSwitch>
);

const Question: React.FC<IQuestion> = ({ title, paragraph, control }): JSX.Element => {
  return (
    <Wrapper>
      <div>
        <Title as='h4' margin='10px'>
          {title}
        </Title>
        <Paragraph color='textMuted' margin='10px'>
          {paragraph}
        </Paragraph>
      </div>
      <div>
        {control.type === 'switch' && <StyledSwitch />}
        {control.type === 'input' && <Input placeholder={control.placeholder} />}
        {control.type === 'select' && (
          <Select size='large'>
            {control.options &&
              control.options.map((opt) => (
                <Select.Option key={opt} value={opt}>
                  {opt}
                </Select.Option>
              ))}
          </Select>
        )}
      </div>
    </Wrapper>
  );
};

export default memo(Question);
