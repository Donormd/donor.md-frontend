import Link from 'next/link';
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
import { prepareError } from '../core/helpers/prepare-data';
import { IBecomeVolunteer } from '../core/interfaces/become-volunteer';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { createVolunteer } from '../queries/become-volunteer';
import { getOptions } from '../queries/common';
import { useTypedMutation, useTypedQuery } from '../queries/utils';

const BecomeVolunteerPage = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      cityId: '',
      typesAssistanceId: '',
      message: '',
    },
  });
  const { data: cities } = useTypedQuery('cities', () => getOptions('cities'));
  const { data: typesAssistance } = useTypedQuery('types-assistance', () => getOptions('types-assistance'));
  const { mutate, isError, isSuccess, error } = useTypedMutation('volunteer', createVolunteer);

  const onSubmit = (payload: IBecomeVolunteer) => {
    mutate(payload);
    reset();
  };

  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='0 0 15px 0' bold>
            Как стать волонтером?
          </Title>
          <Paragraph>
            Мы ищем волонтёров, которым нравится концепция “Люди помогают людям” и готовы своими усилиями и
            талантами развивать донорское сообщество в Приднестровье.
          </Paragraph>
          <Paragraph>
            Наш web-сервис активно развивается и нам всегда нужны люди, которые позволят вместе достигать
            большего.
          </Paragraph>
          <Paragraph>
            Мы приглашаем в свою команду молодых журналистов, специалистов по продвижению в социальных сетях,
            дизайнеров, фото/видео специалистов, IT-специалистах front и back разработки со знаниями JS
            (React, node.js), координаторов движение в городах Республики, которые понимают важность развития
            донорского движения.
          </Paragraph>
          <Paragraph>
            Мы планируем развивать и другие социальные IT-проекты, которые позволят нам решать различные
            социальные проблемы.
          </Paragraph>
          <Paragraph>Если Вы можете помочь, заполните форму</Paragraph>
        </article>
        <Divider />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Фамилия и имя' columns={2} required error={errors?.fullname?.message}>
            <Input {...register('fullname', requiredField)} />
          </FormItem>
          <FormItem label='Ваш email-адрес' columns={2} required error={errors?.email?.message}>
            <Input {...register('email', { ...requiredField, ...emailField })} />
          </FormItem>
          <FormItem label='Номер мобильного телефона' columns={2}>
            <Input {...register('phone')} />
          </FormItem>
          <FormItem label='Город проживания' columns={2} required error={errors?.cityId?.message}>
            <Controller
              name='cityId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {cities?.map(({ text, _id }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem label='Я могу помочь' columns={2} required error={errors?.typesAssistanceId?.message}>
            <Controller
              name='typesAssistanceId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {typesAssistance?.map(({ text, _id }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem columns={1}>
            <TextArea placeholder='Ваш комментарий' rows={5} {...register('message')} />
          </FormItem>
          <FormItem columns={1}>
            <Checkbox checked>
              <>
                Согласен с{' '}
                <Link href='/'>
                  <StyledLink color='black' underline>
                    правилами
                  </StyledLink>
                </Link>{' '}
                обработки персональных данных
              </>
            </Checkbox>
          </FormItem>
          <FormItem columns={1}>
            <Button type='submit' variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </FormItem>
        </Form>
        {isSuccess && <Alert>Спасибо что</Alert>}
        {isError && <Alert>{prepareError(error)}</Alert>}
      </Container>
    </HeaderContentFooter>
  );
};
export default BecomeVolunteerPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
