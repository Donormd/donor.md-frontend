import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Alert } from '../components/UI/alert';
import { Button } from '../components/UI/button';
import { Checkbox } from '../components/UI/form/checkbox';
import { Form, FormItem } from '../components/UI/form/form-item';
import { Input } from '../components/UI/form/input';
import { StyledLink } from '../components/UI/links';
import { Divider } from '../components/UI/other';
import { Paragraph, Title } from '../components/UI/typography';
import { emailField, requiredField } from '../core/helpers/form-validate';
import { prepareError } from '../core/helpers/prepare-data';
import { ICorporateDonation } from '../core/interfaces/donation';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { createCorporateDonations } from '../queries/corporate-donation';
import { useTypedMutation } from '../queries/utils';

const CorporateDonationPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      organization: '',
      leader: '',
      contact: '',
      position: '',
      email: '',
      telephoneNumber: '',
      cityPhoneNumber: '',
      amountWorkers: 10,
    },
  });
  const { mutate, isError, isSuccess, error } = useTypedMutation(
    ['corporate', 'donation'],
    (payload: ICorporateDonation) => createCorporateDonations(payload),
  );
  const onSubmit = (payload: ICorporateDonation) => {
    mutate(payload);
    reset();
  };
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='0 0 15px 0' bold>
            Корпоративное донорство
          </Title>
          <Paragraph>
            Мы приглашаем государственные, муниципальные, коммерческие и некоммерческие организации стать
            участниками программы “Корпоративное донорство”.
          </Paragraph>
          <Paragraph>
            Мы знаем, что многие организации с понимаем относятся к сотрудникам-донорам и многие руководители
            поддерживают продвижение донорства крови, делая это частью социальной ответственности организации.
          </Paragraph>
          <Paragraph>
            Мы предлагаем Вам заполнить форму, которая позволит донорам нашего сервиса в своем донорском
            кабинете отмечать в каком учреждении они работают.
          </Paragraph>
          <Paragraph>
            Ежегодно мы будем подводить итоги программы “Корпоративное донорство” и отмечать самые активные
            организации в номинациях: 1) самое большое количество доноров 2) самый большой охват доноров (по
            соотношению работников в возрасте 18-55 лет и доноров крови).
          </Paragraph>
          <Paragraph>Форма заявки для представителей организаций</Paragraph>
        </article>
        <Divider />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Название организации' columns={2} required error={errors?.organization?.message}>
            <Input {...register('organization', { ...requiredField })} placeholder='Название организации' />
          </FormItem>
          <FormItem label='Руководитель организации' columns={2} required error={errors?.leader?.message}>
            <Input {...register('leader', { ...requiredField })} placeholder='Руководитель организации' />
          </FormItem>
          <FormItem label='Контактное лицо организации' columns={2} required error={errors?.contact?.message}>
            <Input {...register('contact', { ...requiredField })} placeholder='Контактное лицо организации' />
          </FormItem>
          <FormItem label='Должность' columns={2} required error={errors?.position?.message}>
            <Input {...register('position', { ...requiredField })} placeholder='Должность' />
          </FormItem>
          <FormItem label='Ваш email-адрес' columns={2} required error={errors?.email?.message}>
            <Input
              {...register('email', { ...requiredField, ...emailField })}
              placeholder='Ваш email-адрес'
            />
          </FormItem>
          <FormItem
            label='Номер мобильного телефона'
            columns={2}
            required
            error={errors?.telephoneNumber?.message}
          >
            <Input
              {...register('telephoneNumber', { ...requiredField })}
              placeholder='Номер мобильного телефона'
            />
          </FormItem>
          <FormItem
            label='Городской номер телефона'
            columns={2}
            required
            error={errors?.cityPhoneNumber?.message}
          >
            <Input
              {...register('cityPhoneNumber', { ...requiredField })}
              placeholder='Городской номер телефона'
            />
          </FormItem>
          <FormItem
            label='Количество работников в возрасте 18-55 лет'
            columns={2}
            required
            error={errors?.amountWorkers?.message}
          >
            <Input {...register('amountWorkers', { ...requiredField })} type='number' min={0} />
          </FormItem>
          <FormItem
            columns={2}
            label={
              <Button type='submit' variant='outline-danger' size='lg'>
                Отправить
              </Button>
            }
          >
            <Checkbox checked>
              Согласен с{' '}
              <Link href='/user-agreement'>
                <StyledLink underline>правилами</StyledLink>
              </Link>{' '}
              обработки персональных данных
            </Checkbox>
          </FormItem>
        </Form>
        {isSuccess && <Alert dismissible>Спасибо что оставили заявку</Alert>}
        {isError && <Alert dismissible>{prepareError(error)}</Alert>}
      </Container>
    </HeaderContentFooter>
  );
};

export default CorporateDonationPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
