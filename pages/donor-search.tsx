/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';
import Uploader from '../components/uploader';
import Alert from '../components/alert';
import { Title } from '../components/UI/typography';
import { Container } from '../layouts/container';
import {
  Form,
  FormItem,
  Input,
  TextArea,
  DatePicker,
  Select,
  InputNumber,
  Checkbox,
  Divider,
} from '../components/UI';

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
    <Container>
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
        <FormItem
          label='ФИО реципиента'
          name='fullname'
          rules={[{ required: true, message: 'Пожалуйста укажите ФИО реципиента' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Дата рождения'
          name='dateBirth'
          rules={[{ required: true, message: 'Пожалуйста укажите дату рождения' }]}
        >
          <DatePicker onChange={(...args: any) => console.log({ args })} />
        </FormItem>
        <FormItem
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
        </FormItem>
        <FormItem
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
        </FormItem>
        <FormItem
          label='Заболевание кого?'
          name='disease'
          rules={[{ required: true, message: 'Пожалуйста укажите заболевание' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Укажите центр переливания крови'
          name='bloodCenter'
          rules={[{ required: true, message: 'Пожалуйста укажите центр переливания крови' }]}
        >
          <Select>
            {optionsBlood.map(({ key, value }: optionsBloodType) => (
              <Select.Option key={key} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          label='Необходимое количество доноров'
          name='numberOfDonors'
          rules={[{ required: true, message: 'Пожалуйста укажите количество доноров' }]}
        >
          <InputNumber min={1} max={20} />
        </FormItem>
        <FormItem
          label='Срок сдачи до'
          name='deadline'
          rules={[{ required: true, message: 'Пожалуйста укажите срок сдачи' }]}
        >
          <DatePicker onChange={(...args: any) => console.log({ args })} />
        </FormItem>
        <FormItem
          label='Дополнительная информация'
          name='additionalInformation'
          rules={[{ required: true, message: 'Пожалуйста укажите дополнительная информацию' }]}
        >
          <TextArea rows={4} />
        </FormItem>
        <FormItem label='Фото рецепиента' name='dateBirth'>
          <Uploader type='input' maxCount={1} />
        </FormItem>
        <Divider />
        <Title as='h2' bold>
          Контактное лицо
        </Title>
        <FormItem
          label='ФИО'
          name='fullnameOfContactPerson'
          rules={[{ required: true, message: 'Пожалуйста укажите ФИО' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Ваш email-адрес'
          name='emailOfContactPerson'
          rules={[{ required: true, message: 'Пожалуйста укажите email' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Номер мобильного телефона'
          name='phoneOfContactPerson'
          rules={[{ required: true, message: 'Пожалуйста укажите номер мобильного телефона' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label='Кто вы для реципиента'
          name='aboutContactPerson'
          rules={[{ required: true, message: 'Пожалуйста раскажите кто вы для реципиента' }]}
        >
          <Input />
        </FormItem>
        <FormItem name='remember' valuePropName='checked'>
          <Checkbox>
            Согласен с{` `}
            <Link href='/'>
              <a>правилами</a>
            </Link>
            {` `}обработки персональных данных
          </Checkbox>
        </FormItem>
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
    </Container>
  </HeaderContentFooter>
);

export default DonorSearchPage;
