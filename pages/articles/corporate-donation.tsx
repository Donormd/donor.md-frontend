import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Title, Divider, FormItem, Input, Button, Checkbox, StyledLink } from '../../components/UI';
import HeaderContentFooter from '../../layouts/header-content-footer';
import { Container } from '../../layouts/container';
import Alert from '../../components/alert';
import { sendData, ICorporateDonation } from '../../redux/redusers/corporate-donation';
import { useAppSelector } from '../../redux/store';

const CorporateDonationPage: React.FC = (): JSX.Element => {
  const { handleSubmit, register, reset } = useForm();
  const { status, error } = useAppSelector((state) => state.corporateDonation);
  const dispatch = useDispatch();
  const onSubmit = (data: ICorporateDonation) => {
    dispatch(sendData(data));
    reset();
  };
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='15px' bold>
            Корпоративное донорство
          </Title>
          <p>
            Мы приглашаем государственные, муниципальные, коммерческие и некоммерческие организации
            стать участниками программы “Корпоративное донорство”.
          </p>
          <p>
            Мы знаем, что многие организации с понимаем относятся к сотрудникам-донорам и многие
            руководители поддерживают продвижение донорства крови, делая это частью социальной
            ответственности организации.
          </p>
          <p>
            Мы предлагаем Вам заполнить форму, которая позволит донорам нашего сервиса в своем
            донорском кабинете отмечать в каком учреждении они работают.
          </p>
          <p>
            Ежегодно мы будем подводить итоги программы “Корпоративное донорство” и отмечать самые
            активные организации в номинациях: 1) самое большое количество доноров 2) самый большой
            охват доноров (по соотношению работников в возрасте 18-55 лет и доноров крови).
          </p>
          <p>Форма заявки для представителей организаций</p>
        </article>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Название организации'>
            <Input name='organization' innerRef={register} placeholder='Название организации' />
          </FormItem>
          <FormItem label='Руководитель организации'>
            <Input name='leader' innerRef={register} placeholder='Руководитель организации' />
          </FormItem>
          <FormItem label='Контактное лицо организации'>
            <Input name='contact' innerRef={register} placeholder='Контактное лицо организации' />
          </FormItem>
          <FormItem label='Должность'>
            <Input name='position' innerRef={register} placeholder='Должность' />
          </FormItem>
          <FormItem label='Ваш email-адрес'>
            <Input name='email' innerRef={register} placeholder='Ваш email-адрес' />
          </FormItem>
          <FormItem label='Номер мобильного телефона'>
            <Input
              name='telephoneNumber'
              innerRef={register}
              placeholder='Номер мобильного телефона'
            />
          </FormItem>
          <FormItem label='Городской номер телефона'>
            <Input
              name='cityPhoneNumber'
              innerRef={register}
              placeholder='Городской номер телефона'
            />
          </FormItem>
          <FormItem label='Количество работников в возрасте 18-55 лет'>
            <Input
              name='amountWorkers'
              innerRef={register}
              type='number'
              min={0}
              defaultValue={10}
            />
          </FormItem>
          <FormItem>
            <Checkbox checked>
              Согласен с{' '}
              <Link href='/articles/user-agreement'>
                <StyledLink underline>правилами</StyledLink>
              </Link>{' '}
              обработки обработки обработки персональных данных
            </Checkbox>
          </FormItem>
          <FormItem>
            <Button type='submit' variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </FormItem>
        </form>
        {status === 'success' && <Alert dismissible>Спасибо что оставили заявку</Alert>}
        {status === 'error' && <Alert dismissible>{error}</Alert>}
      </Container>
    </HeaderContentFooter>
  );
};

export default CorporateDonationPage;
