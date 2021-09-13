import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../src/components/alert';
import { Button, Divider, FormItem, Input, Paragraph, Title } from '../src/components/UI';
import { IMonitoringResponse } from '../src/core/interfaces/monitoring';
import { Container } from '../src/core/layouts/container';
import { HeaderContentFooter } from '../src/core/layouts/header-content-footer';
import { getMonitoringData, updateMonitoringData } from '../src/queries/monitoring';
import { useTypedMutation, useTypedQuery } from '../src/queries/utils';

const Monitoring = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { data: monitoringData } = useTypedQuery('monitoring', getMonitoringData);
  const { mutate, isError, isSuccess } = useTypedMutation('monitoring', (payload: IMonitoringResponse) =>
    updateMonitoringData(payload),
  );

  useEffect(() => {
    monitoringData?.values?.forEach((item) => {
      setValue(item.group, item.quantity);
    });
  }, [monitoringData, setValue]);

  const onSubmit = (formData: IMonitoringResponse['values'] & { fullname: string }) => {
    if (!monitoringData) return;

    const prepareData = {
      _id: monitoringData._id,
      fullname: formData.fullname,
      values: formData,
    };

    mutate(prepareData);
  };

  return (
    <HeaderContentFooter background='/images/pages/love-pic.png'>
      <Container>
        <Article>
          <Title margin='15px' bold>
            Для сотрудников центра крови
          </Title>
          <Paragraph>
            Заполните пожалуйста форму для отображение мониторинга запасов крови. Ввод данных по
            эритроцитарной массе
          </Paragraph>
        </Article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Ваша Фамилия и Имя' columns={2}>
            <Input name='fullname' ref={register} />
          </FormItem>
          <FormItem help='Дата указывается автоматически' label='Дата ввода информации' columns={2}>
            <Input placeholder='Дата указывается автоматически' disabled />
          </FormItem>
          <StyledDivider />
          <Paragraph align='left'>
            Ввод данных для монитора крови из остатков запаса по дозам эритроцитарной массы.
          </Paragraph>
          <TableForm>
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
              <Input type='number' name='O(I)+' ref={register} />
              <Input type='number' name='A(II)+' ref={register} />
              <Input type='number' name='B(III)+' ref={register} />
              <Input type='number' name='AB(IV)+' ref={register} />
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Отрицательная (-)
              </Paragraph>
              <Input type='number' name='O(I)-' ref={register} />
              <Input type='number' name='A(II)-' ref={register} />
              <Input type='number' name='B(III)-' ref={register} />
              <Input type='number' name='AB(IV)-' ref={register} />
            </Row>
          </TableForm>
          <Button type='submit' variant='outline-danger' size='lg'>
            Сохранить данные
          </Button>
          {isSuccess && <Alert dismissible>Данные добавлены</Alert>}
          {isError && <Alert dismissible>Упс, что-то пошло не так</Alert>}
        </form>
      </Container>
    </HeaderContentFooter>
  );
};

export default Monitoring;

const TableForm = styled.div`
  margin: 50px 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 22vh 1fr 1fr 1fr 1fr;
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
