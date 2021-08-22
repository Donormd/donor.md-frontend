import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Alert } from '../../src/components/alert';
import {
  Button,
  Checkbox,
  Divider,
  FormItem,
  Input,
  StyledLink,
  Title,
} from '../../src/components/UI';
import { ICorporateDonation } from '../../src/core/interfaces/donation';
import { Container } from '../../src/core/layouts/container';
import { HeaderContentFooter } from '../../src/core/layouts/header-content-footer';
import { createCorporateDonations } from '../../src/queries/corporate-donation';
import { useTypedMutation } from '../../src/queries/utils';

const CorporateDonationPage = () => {
  const { handleSubmit, register, reset } = useForm();
  const { mutate, isError, isSuccess, error } = useTypedMutation(
    ['corporate', 'donation'],
    (payload: ICorporateDonation) => createCorporateDonations(payload),
  );
  const onSubmit = (data: ICorporateDonation) => {
    mutate(data);
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
              defaultValue={0}
            />
          </FormItem>
          <FormItem>
            <Checkbox checked>
              Согласен с{' '}
              <Link href='/articles/user-agreement'>
                <StyledLink underline>политикой конфиденциальности</StyledLink>
              </Link>{' '}
              и правилами обработки персональных данных Web-сервиса Donor.md
            </Checkbox>
          </FormItem>
          <FormItem>
            <Button type='submit' variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </FormItem>
        </form>
        {isSuccess && <Alert dismissible>Спасибо что оставили заявку</Alert>}
        {isError && <Alert dismissible>{error}</Alert>}
      </Container>
    </HeaderContentFooter>
  );
};

export default CorporateDonationPage;
