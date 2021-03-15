import React from 'react';
import styled from 'styled-components';
import HeaderContentFooter from '../layouts/header-content-footer';
import { Container } from '../layouts/container';
import { Form, FormItem, Input, Paragraph, Title, Divider, Button } from '../components/UI';

const InputsTable = styled.div`
  margin: 50px 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  margin-bottom: 15px;

  &:first-child {
    text-align: left;
  }
`;

const Article = styled.div`
  margin-bottom: 50px;
`;

const StyledDivider = styled(Divider)`
  margin: 50px 0;
`;

const Monitoring: React.FC = () => {
  return (
    <HeaderContentFooter background='/images/pages/love-pic.png'>
      <Container>
        <Article>
          <Title margin='15px' bold>
            Для сотрудников центра крови
          </Title>
          <Paragraph>
            Заполните пожалуйста форму для отбражение мониторинга запасов крови. Ввод данных по
            эретрацитной массе.
          </Paragraph>
        </Article>
        <Form>
          <FormItem label='Ваша Фамилия и Имя' columns={2}>
            <Input />
          </FormItem>
          <FormItem help='Дата указывается автоматически' label='Дата ввода информации' columns={2}>
            <Input
              placeholder='Дата указывается автоматически'
              value={new Date().toDateString()}
              disabled
            />
          </FormItem>
          <StyledDivider />
          <Paragraph align='left'>
            Ввод данных для монитора крови из остатков запаса по дозам эритроцитную массы.
          </Paragraph>
          <InputsTable>
            <Row>
              <div>&nbsp;</div>
              <Title as='h5' bold align='center'>
                O(I)
              </Title>
              <Title as='h5' bold align='center'>
                A(II)
              </Title>
              <Title as='h5' bold align='center'>
                В(III)
              </Title>
              <Title as='h5' bold align='center'>
                AB(IV)
              </Title>
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Положительная (+)
              </Paragraph>
              <Input type='number' />
              <Input type='number' />
              <Input type='number' />
              <Input type='number' />
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Отрицательная (-)
              </Paragraph>
              <Input type='number' />
              <Input type='number' />
              <Input type='number' />
              <Input type='number' />
            </Row>
          </InputsTable>
          <Button variant='outline-danger' size='lg'>
            Сохранить данные
          </Button>
        </Form>
      </Container>
    </HeaderContentFooter>
  );
};

export default Monitoring;
