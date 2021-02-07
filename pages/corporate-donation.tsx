import React from 'react';
import { Title, Divider, Form, FormItem, Input, InputNumber, Button } from '../components/UI';
import HeaderContentFooter from '../layouts/header-content-footer';
import { Container } from '../layouts/container';

const CorporateDonationPage: React.FC = (): JSX.Element => {
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
        <Form>
          <FormItem label='Название организации' name='name'>
            <Input placeholder='Название организации' />
          </FormItem>
          <FormItem label='Руководитель организации' name='name'>
            <Input placeholder='Руководитель организации' />
          </FormItem>
          <FormItem label='Контактное лицо организации' name='name'>
            <Input placeholder='Контактное лицо организации' />
          </FormItem>
          <FormItem label='Должность' name='name'>
            <Input placeholder='Должность' />
          </FormItem>
          <FormItem label='Ваш email-адрес' name='name'>
            <Input placeholder='Ваш email-адрес' />
          </FormItem>
          <FormItem label='Номер мобильного телефона' name='name'>
            <Input placeholder='Номер мобильного телефона' />
          </FormItem>
          <FormItem label='Городской номер телефона' name='name'>
            <Input placeholder='Городской номер телефона' />
          </FormItem>
          <FormItem label='Количество работников в возрасте 18-55 лет' name='name'>
            <InputNumber min={0} defaultValue={10} />
          </FormItem>
          <FormItem>
            <Button size='large' shape='round' color='red'>
              Отправить
            </Button>
          </FormItem>
        </Form>
      </Container>
    </HeaderContentFooter>
  );
};

export default CorporateDonationPage;
