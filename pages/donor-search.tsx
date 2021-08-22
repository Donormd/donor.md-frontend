import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Alert } from '../src/components/alert';
import {
  Button,
  Checkbox,
  Divider,
  FormItem,
  Input,
  Paragraph,
  Select,
  StyledLink,
  TextArea,
  Title,
} from '../src/components/UI';
import { IRecipient } from '../src/core/interfaces/recipient';
import { Container } from '../src/core/layouts/container';
import { HeaderContentFooter } from '../src/core/layouts/header-content-footer';
import { getOptions } from '../src/queries/common';
import { createRecipients } from '../src/queries/recipients';
import { useTypedMutation, useTypedQuery } from '../src/queries/utils';

const DonorSearchPage = () => {
  const { data: bloodGroups } = useTypedQuery('bloodGroups', () => getOptions('bloodGroups'));
  const { data: bloodCenter } = useTypedQuery('bloodCenter', () => getOptions('bloodCenter'));
  const { data: transfusionCenter } = useTypedQuery('transfusionCenter', () =>
    getOptions('transfusionCenter'),
  );
  const { mutate } = useTypedMutation('recipient', (payload: IRecipient) =>
    createRecipients(payload),
  );
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: IRecipient) => {
    mutate(data);
    reset();
  };

  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='15px' bold>
            Поиск доноров
          </Title>
          <Paragraph>
            Наш сервис постарается, чтобы Вы не искали доноров среди родственников и в социальных
            сетях. Наш сервис автоматически поможет Вам найти доноров с требуемой группой крови,
            попросит их прийти в Центры переливания крови. Система сама пригласит нужных доноров,
            Ваша задача заполнить форму ниже.
          </Paragraph>
        </article>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='ФИО реципиента' required>
            <Input name='fullname' innerRef={register} />
          </FormItem>
          <FormItem label='Дата рождения' required>
            <Input type='date' name='dateBirth' innerRef={register} />
          </FormItem>
          <FormItem label='Выберите необходимую группу крови' required>
            <Select size='large'>
              {bloodGroups &&
                bloodGroups.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          </FormItem>
          <FormItem label='Медицинское учреждение' help='В котором находится реципиент' required>
            <Select size='large'>
              {bloodCenter &&
                bloodCenter.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          </FormItem>
          <FormItem label='Заболевание/травма' required>
            <Input name='' innerRef={register} />
          </FormItem>
          <FormItem label='Укажите центр переливания крови' required>
            <Select size='large'>
              {transfusionCenter &&
                transfusionCenter.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          </FormItem>
          <FormItem label='Необходимое количество доноров' required>
            <Input name='' innerRef={register} type='number' min={1} max={20} />
          </FormItem>
          <FormItem label='Срок сдачи до' required>
            <Input type='date' name='dateBirth' innerRef={register} />
          </FormItem>
          <FormItem label='Дополнительная информация' required>
            <TextArea
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
            required
          >
            <Input type='file' />
          </FormItem>
          <Divider />
          <Title as='h3' bold>
            Контактное лицо
          </Title>
          <FormItem label='ФИО' required>
            <Input name='' innerRef={register} />
          </FormItem>
          <FormItem label='Ваш email-адрес' required>
            <Input name='' innerRef={register} />
          </FormItem>
          <FormItem label='Номер мобильного телефона' required>
            <Input name='' innerRef={register} />
          </FormItem>
          <FormItem label='Кто вы для реципиента' required>
            <Input name='' innerRef={register} />
          </FormItem>
          <FormItem columns={1}>
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
        </form>
        <Alert
          dismissible
          message={`
        После обработки Вашего запроса и согласования с Центром переливания крови. 
        Система автоматически отправить уведомления донорам подходящим по параметрам.
        `}
        />
      </Container>
    </HeaderContentFooter>
  );
};

export default DonorSearchPage;
