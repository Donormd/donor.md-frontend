import React from 'react';
import { Divider, Form, Input, InputNumber, Button } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';

const CorporateDonationPage: React.FC = (): JSX.Element => {
  return (
    <HeaderContentFooter background='/images/pages/articles/welcome.png'>
      <section className='container'>
        <article>
          <h1>Корпоративное донорство</h1>
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
          <Form.Item label='Название организации' name='name'>
            <Input placeholder='Название организации' />
          </Form.Item>
          <Form.Item label='Руководитель организации' name='name'>
            <Input placeholder='Руководитель организации' />
          </Form.Item>
          <Form.Item label='Контактное лицо организации' name='name'>
            <Input placeholder='Контактное лицо организации' />
          </Form.Item>
          <Form.Item label='Должность' name='name'>
            <Input placeholder='Должность' />
          </Form.Item>
          <Form.Item label='Ваш email-адрес' name='name'>
            <Input placeholder='Ваш email-адрес' />
          </Form.Item>
          <Form.Item label='Номер мобильного телефона' name='name'>
            <Input placeholder='Номер мобильного телефона' />
          </Form.Item>
          <Form.Item label='Городской номер телефона' name='name'>
            <Input placeholder='Городской номер телефона' />
          </Form.Item>
          <Form.Item label='Количество работников в возрасте 18-55 лет' name='name'>
            <InputNumber min={0} defaultValue={10} />
          </Form.Item>
          <Form.Item>
            <Button size='large' shape='round' className='btn-danger'>
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </section>
    </HeaderContentFooter>
  );
};

export default CorporateDonationPage;
