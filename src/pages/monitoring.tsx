import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Alert } from '../components/UI/alert';
import { Button } from '../components/UI/button';
import { FormItem } from '../components/UI/form/form-item';
import { Input } from '../components/UI/form/input';
import { Divider } from '../components/UI/other';
import { Paragraph, Title } from '../components/UI/typography';
import { prepareError } from '../core/helpers/prepare-data';
import { IMonitoringResponse } from '../core/interfaces/monitoring';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { getMonitoringData, updateMonitoringData } from '../queries/monitoring';
import { useTypedMutation, useTypedQuery } from '../queries/utils';

const Monitoring = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { data: monitoringData } = useTypedQuery('monitoring', getMonitoringData);
  const { mutate, isError, isSuccess, error } = useTypedMutation(
    'monitoring',
    (payload: IMonitoringResponse) => updateMonitoringData(payload),
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
          <Title margin='0 0 40px 0' bold>
            Для сотрудников центра крови
          </Title>
          <Paragraph>
            Заполните пожалуйста форму для отображение мониторинга запасов крови. Ввод данных по
            эритроцитарной массе
          </Paragraph>
        </Article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Ваша Фамилия и Имя' columns={2}>
            <Input {...register('fullname')} />
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
              <Input type='number' {...register('O(I)+')} />
              <Input type='number' {...register('A(II)+')} />
              <Input type='number' {...register('B(III)+')} />
              <Input type='number' {...register('AB(IV)+')} />
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Отрицательная (-)
              </Paragraph>
              <Input type='number' {...register('O(I)-')} />
              <Input type='number' {...register('A(II)-')} />
              <Input type='number' {...register('B(III)-')} />
              <Input type='number' {...register('AB(IV)-')} />
            </Row>
          </TableForm>
          <Button type='submit' variant='outline-danger' size='lg'>
            Сохранить данные
          </Button>
          {isSuccess && <Alert dismissible>Данные добавлены</Alert>}
          {isError && <Alert dismissible>{prepareError(error)}</Alert>}
        </form>
      </Container>
    </HeaderContentFooter>
  );
};

export default Monitoring;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

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
