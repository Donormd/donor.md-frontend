/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
import { Divider, Form, Input, InputNumber, Checkbox, Button, DatePicker, Select } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';
import Uploader from '../components/uploader';
import Alert from '../components/alert';
import { Title } from '../components/UI/typography';

export declare type optionsBloodType = { key: string | number; value: string };
const optionsBlood: Array<optionsBloodType> = [
  {
    key: '1',
    value: 'Любая',
  },
  {
    key: '2',
    value: 'O (I) - Rh+',
  },
  {
    key: '3',
    value: 'O (I) - Rh-',
  },
  {
    key: '4',
    value: 'A (II) - Rh+',
  },
  {
    key: '5',
    value: 'A (II) - Rh-',
  },
  {
    key: '6',
    value: 'B (III) - Rh+',
  },
  {
    key: '7',
    value: 'B (III) - Rh-',
  },
  {
    key: '8',
    value: 'AB (IV) - Rh+',
  },
  {
    key: '9',
    value: 'AB (IV) - Rh-',
  },
];

const DonorSearchPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/articles/welcome.png'>
    <section className='container'>
      <article>
        <Title size='3rem' bold>
          Поиск доноров
        </Title>
        <p>
          Наш сервис постарается, что бы вы не искали доноров среди родственников и в социальных
          сетях. Наш сервис автоматически поможет Вам найти доноров с требуемой группой крови
          попросит их прийти в Центры переливания крови. Система сама пригласит нужных доноров, Ваша
          задача заполнить форму ниже.
        </p>
      </article>
      <Divider />
      <Form>
        <Form.Item
          label='ФИО реципиента'
          name='fullname'
          rules={[{ required: true, message: 'Пожалуйста укажите ФИО реципиента' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Дата рождения'
          name='dateBirth'
          rules={[{ required: true, message: 'Пожалуйста укажите дату рождения' }]}
        >
          <DatePicker onChange={(...args: any) => console.log({ args })} />
        </Form.Item>
        <Form.Item
          label='Выберите необходимую группу крови'
          name='bloodGroup'
          rules={[{ required: true, message: 'Пожалуйста выберите необходимую группу крови' }]}
        >
          <Select>
            {optionsBlood.map(({ key, value }: optionsBloodType) => (
              <Select.Option key={key} value={key}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Медицинское учреждение'
          name='dateBirth'
          rules={[{ required: true, message: 'Пожалуйста укажите медицинское учреждение' }]}
        >
          <Select>
            {optionsBlood.map(({ key, value }: optionsBloodType) => (
              <Select.Option key={key} value={key}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Заболевание кого?'
          name='disease'
          rules={[{ required: true, message: 'Пожалуйста укажите заболевание' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Укажите центр переливания крови'
          name='bloodCenter'
          rules={[{ required: true, message: 'Пожалуйста укажите центр переливания крови' }]}
        >
          <Select>
            {optionsBlood.map(({ key, value }: optionsBloodType) => (
              <Select.Option value={key}>{value}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label='Необходимое количество доноров'
          name='numberOfDonors'
          rules={[{ required: true, message: 'Пожалуйста укажите количество доноров' }]}
        >
          <InputNumber min={1} max={20} />
        </Form.Item>
        <Form.Item
          label='Срок сдачи до'
          name='deadline'
          rules={[{ required: true, message: 'Пожалуйста укажите срок сдачи' }]}
        >
          <DatePicker onChange={(...args: any) => console.log({ args })} />
        </Form.Item>
        <Form.Item
          label='Дополнительная информация'
          name='additionalInformation'
          rules={[{ required: true, message: 'Пожалуйста укажите дополнительная информацию' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label='Фото рецепиента' name='dateBirth'>
          <Uploader type='input' maxCount={1} />
        </Form.Item>
        <Divider />
        <Title as='h2' bold>
          Контактное лицо
        </Title>
        <Form.Item
          label='ФИО'
          name='fullnameOfContactPerson'
          rules={[{ required: true, message: 'Пожалуйста укажите ФИО' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Ваш email-адрес'
          name='emailOfContactPerson'
          rules={[{ required: true, message: 'Пожалуйста укажите email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Номер мобильного телефона'
          name='phoneOfContactPerson'
          rules={[{ required: true, message: 'Пожалуйста укажите номер мобильного телефона' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Кто вы для реципиента'
          name='aboutContactPerson'
          rules={[{ required: true, message: 'Пожалуйста раскажите кто вы для реципиента' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>
            Согласен с{` `}
            <Link href='/'>
              <a>правилами</a>
            </Link>
            {` `}обработки персональных данных
          </Checkbox>
        </Form.Item>
        <Button className='btn-danger' shape='round' size='large'>
          Отправить
        </Button>
      </Form>
      <Alert
        message={`
        После обработки Вашего запроса и согласования с Центром переливания крови. 
        Система автоматически отправить уведомления донорам, подходящим по параметрам.
        `}
      />
    </section>
  </HeaderContentFooter>
);

export default DonorSearchPage;
