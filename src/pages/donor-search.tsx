import Link from 'next/link';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Alert } from '../components/UI/alert';
import { Button } from '../components/UI/button';
import { Checkbox } from '../components/UI/form/checkbox';
import { Form, FormItem } from '../components/UI/form/form-item';
import { Input } from '../components/UI/form/input';
import { Select } from '../components/UI/form/select';
import { TextArea } from '../components/UI/form/textarea';
import { StyledLink } from '../components/UI/links';
import { Divider } from '../components/UI/other';
import { Paragraph, Title } from '../components/UI/typography';
import { emailField, requiredField } from '../core/helpers/form-validate';
import { IRecipient } from '../core/interfaces/recipient';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { getOptions } from '../queries/common';
import { createRecipients } from '../queries/recipients';
import { useTypedMutation, useTypedQuery } from '../queries/utils';

const DonorSearchPage = () => {
  const { data: bloodGroups } = useTypedQuery('blood-groups', () => getOptions('blood-groups'));
  const { data: bloodCenter } = useTypedQuery('blood-center', () => getOptions('blood-center'));
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { mutate } = useTypedMutation('recipient', (payload: IRecipient) => createRecipients(payload));
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IRecipient>();

  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    if (!ref.current) return;
    const payload = new FormData(ref.current) as unknown as IRecipient;
    mutate(payload);
    reset();
  };

  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='0 0 40px 0' bold>
            Поиск доноров
          </Title>
          <Paragraph>
            Наш сервис постарается, чтобы Вы не искали доноров среди родственников и в социальных сетях. Наш
            сервис автоматически поможет Вам найти доноров с требуемой группой крови, попросит их прийти в
            Центры переливания крови. Система сама пригласит нужных доноров, Ваша задача заполнить форму ниже.
          </Paragraph>
        </article>
        <Divider />
        <Form ref={ref} onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='ФИО реципиента' columns={2} required error={errors?.recipient?.fullname?.message}>
            <Input {...register('recipient.fullname', requiredField)} />
          </FormItem>
          <FormItem label='Дата рождения' columns={2} required error={errors?.recipient?.dateBirth?.message}>
            <Input type='date' {...register('recipient.dateBirth', requiredField)} />
          </FormItem>
          <FormItem
            label='Выберите необходимую группу крови'
            columns={2}
            required
            error={errors?.recipient?.bloodGroupId?.message}
          >
            <Controller
              name='recipient.bloodGroupId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {bloodGroups?.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem
            label='Медицинское учреждение'
            help='В котором находится реципиент'
            columns={2}
            required
            error={errors?.recipient?.bloodCenterId?.message}
          >
            <Controller
              name='recipient.bloodCenterId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {bloodCenter?.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem
            label='Заболевание/травма'
            help='Причина поиска крови'
            columns={2}
            required
            error={errors?.recipient?.disease?.message}
          >
            <Input {...register('recipient.disease', requiredField)} />
          </FormItem>
          <FormItem
            label='Укажите центр переливания крови'
            columns={2}
            required
            error={errors?.recipient?.transfusionCenterId?.message}
          >
            <Controller
              name='recipient.transfusionCenterId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {transfusionCenter?.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem
            label='Необходимое количество доноров'
            columns={2}
            required
            error={errors?.recipient?.numberDonors?.message}
          >
            <Input {...register('recipient.numberDonors', requiredField)} type='number' min={1} max={20} />
          </FormItem>
          <FormItem label='Срок сдачи до' columns={2} required error={errors?.recipient?.deadline?.message}>
            <Input type='date' {...register('recipient.deadline', requiredField)} />
          </FormItem>
          <FormItem
            label='Дополнительная информация'
            columns={2}
            required
            error={errors?.recipient?.info?.message}
          >
            <TextArea
              {...register('recipient.info', requiredField)}
              rows={4}
              placeholder='Представьте полную информацию,
              чтобы мы могли Вам максимально эффективно помочь'
            />
          </FormItem>
          <FormItem
            label='Фото рецепиента'
            help={`
            Фотография донора не обязательна, 
            но повышает внимание доноров
          `}
            columns={2}
            error={errors?.recipient?.file?.message}
          >
            <Input type='file' {...register('recipient.file')} />
          </FormItem>
          <Divider />
          <Title as='h3' margin='30px 0' bold>
            Контактное лицо
          </Title>
          <FormItem label='ФИО' columns={2} required error={errors?.contactPerson?.fullname?.message}>
            <Input {...register('contactPerson.fullname', requiredField)} />
          </FormItem>
          <FormItem
            label='Ваш email-адрес'
            columns={2}
            required
            error={errors?.contactPerson?.email?.message}
          >
            <Input {...register('contactPerson.email', { ...requiredField, ...emailField })} />
          </FormItem>
          <FormItem
            label='Номер мобильного телефона'
            columns={2}
            required
            error={errors?.contactPerson?.phone?.message}
          >
            <Input {...register('contactPerson.phone', requiredField)} />
          </FormItem>
          <FormItem
            label='Кто Вы для реципиента '
            columns={2}
            required
            error={errors?.contactPerson?.whoAreYou?.message}
          >
            <Input {...register('contactPerson.whoAreYou', requiredField)} />
          </FormItem>
          <FormItem>
            <Checkbox checked>
              Согласен с{` `}
              <Link href='/'>
                <StyledLink underline bold>
                  правилами
                </StyledLink>
              </Link>
              {` `} пользования Web-сервиса и обработки персональных данных
            </Checkbox>
          </FormItem>
          <Button type='submit' variant='outline-danger' size='lg'>
            Отправить
          </Button>
        </Form>
        <Alert>
          После обработки Вашего запроса и согласования с Центром переливания крови система автоматически
          отправит уведомления донорам, подходящим по параметрам.
        </Alert>
      </Container>
    </HeaderContentFooter>
  );
};

export default DonorSearchPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
