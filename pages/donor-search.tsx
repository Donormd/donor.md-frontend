/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
import HeaderContentFooter from '../layouts/header-content-footer';
// import Uploader from '../components/uploader';
import Alert from '../components/alert';
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
  Title,
  Button,
  StyledLink,
  Paragraph,
} from '../components/UI';
import { useAppSelector } from '../redux/store';

const DonorSearchPage: React.FC = (): JSX.Element => {
  const { bloodGroups } = useAppSelector((state) => state.common);

  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='15px' bold>
            Поиск доноров
          </Title>
          <Paragraph>
            Наш сервис постарается, что бы вы не искали доноров среди родственников и в социальных
            сетях. Наш сервис автоматически поможет Вам найти доноров с требуемой группой крови
            попросит их прийти в Центры переливания крови. Система сама пригласит нужных доноров,
            Ваша задача заполнить форму ниже.
          </Paragraph>
        </article>
        <Divider />
        <Form>
          <FormItem label='ФИО реципиента' required>
            <Input />
          </FormItem>
          <FormItem label='Дата рождения' required>
            <DatePicker onChange={(...args: any) => console.log({ args })} />
          </FormItem>
          <FormItem label='Выберите необходимую группу крови' required>
            <Select>
              {bloodGroups.map(({ key, value, text }) => (
                <Select.Option key={key} value={value}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label='Медицинское учреждение' help='В котором находится реципиент' required>
            <Select>
              {bloodGroups.map(({ key, value, text }) => (
                <Select.Option key={key} value={value}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label='Заболевание кого?' required>
            <Input />
          </FormItem>
          <FormItem label='Укажите центр переливания крови' required>
            <Select>
              {bloodGroups.map(({ key, value, text }) => (
                <Select.Option key={key} value={value}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label='Необходимое количество доноров' required>
            <InputNumber min={1} max={20} />
          </FormItem>
          <FormItem label='Срок сдачи до' required>
            <DatePicker onChange={(...args: any) => console.log({ args })} />
          </FormItem>
          <FormItem label='Дополнительная информация' required>
            <TextArea rows={4} />
          </FormItem>
          <FormItem
            label='Фото рецепиента'
            help={`
            Фотография донора не обязательна, 
            но повышает внимание доноров
          `}
            required
          >
            {/* <Uploader type='input' maxCount={1} /> */}
          </FormItem>
          <Divider />
          <Title as='h3' bold>
            Контактное лицо
          </Title>
          <FormItem label='ФИО' required>
            <Input />
          </FormItem>
          <FormItem label='Ваш email-адрес' required>
            <Input />
          </FormItem>
          <FormItem label='Номер мобильного телефона' required>
            <Input />
          </FormItem>
          <FormItem label='Кто вы для реципиента' required>
            <Input />
          </FormItem>
          <FormItem columns={1}>
            <Checkbox>
              Согласен с{` `}
              <Link href='/'>
                <StyledLink underline bold>
                  правилами
                </StyledLink>
              </Link>
              {` `}обработки персональных данных
            </Checkbox>
          </FormItem>
          <Button variant='outline-danger' size='lg'>
            Отправить
          </Button>
        </Form>
        <Alert
          dismissible
          message={`
        После обработки Вашего запроса и согласования с Центром переливания крови. 
        Система автоматически отправить уведомления донорам, подходящим по параметрам.
        `}
        />
      </Container>
    </HeaderContentFooter>
  );
};

export default DonorSearchPage;
