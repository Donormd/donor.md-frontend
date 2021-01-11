import React from 'react';
import { Divider, Form, Input, Button, Select } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';

type typeData = {
  key: string | number;
  value: string;
};

const cityes: Array<typeData> = [
  { key: 1, value: 'Тирасполь' },
  { key: 2, value: 'Бендеры' },
  { key: 3, value: 'Рыбница' },
  { key: 4, value: 'Слободзея' },
  { key: 5, value: 'Днестровск' },
  { key: 6, value: 'Дубосары' },
  { key: 7, value: 'Каменка' },
];

const typesAssistance: Array<typeData> = [
  { key: 1, value: 'Написание статьей' },
  { key: 2, value: 'SMM-помощь' },
  { key: 3, value: 'IT-помощь' },
  { key: 4, value: 'Создание роликов' },
  { key: 5, value: 'Фото помощь' },
  { key: 6, value: 'Дизайнерские услуги' },
  { key: 7, value: 'Координатор по городу' },
  { key: 8, value: 'Другое' },
];

const BecomeVolunteerPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/articles/welcome.png'>
    <section className='container'>
      <article>
        <h1>Как стать волонтером?</h1>
        <p>
          Мы ищем волонтёров, которым нравится концепция “Люди помогают людям” и готовы своими
          усилиями и талантами развивать донорское сообщество в Приднестровье.
        </p>
        <p>
          Наш web-сервис активно развивается и нам всегда нужны люди, которые позволят вместе
          достигать большего.
        </p>
        <p>
          Мы приглашаем в свою команду молодых журналистов, специалистов по продвижению в социальных
          сетях, дизайнеров, фото/видео специалистах, IT-специалистах front и back разработки со
          знаниями JS (React, Vue.js), Python (Django), людей, которые понимают важность развития
          донорского движения.
        </p>
        <p>
          Мы планируем развивать и другие социальные IT-проекты, которые позволят нам решать
          различные социальные проблемы.
        </p>
        <p>Если Вы можете помочь, заполните форму</p>
      </article>
      <Divider />
      <Form>
        <Form.Item
          label='Фамилия и имя'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Ваш email-адрес'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Номер мобильного телефона'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Должность'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Город проживания'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Select>
            {cityes.map(({ key, value }: typeData) => (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Я могу помочь'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Select>
            {typesAssistance.map(({ key, value }: typeData) => (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Пожалуйста укажите фамилию и имя' }]}
        >
          <Input.TextArea placeholder='Ваш комментарий' rows={5} />
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

export default BecomeVolunteerPage;
