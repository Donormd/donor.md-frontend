import React from 'react';
import styled from 'styled-components';
import Alert from '../../components/alert';
import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import SocialMediaLinks from '../../components/social-media-links';
import {
  Button,
  Form,
  FormItem,
  Input,
  TitleWithArrow,
  Select,
  DatePicker,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;

const Donations: React.FC = (): JSX.Element => {
  const { bloodCenter } = useAppSelector((state) => state.common);
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form>
        <FormItem label='Номер справки' required>
          <Input />
        </FormItem>
        <FormItem label='Номер донации' required>
          <Input />
        </FormItem>
        <FormItem label='Дата кровосдачи' required>
          <DatePicker />
        </FormItem>
        <FormItem label='Место сдачи' required>
          <Select placeholder='Выберите место сдачи'>
            {bloodCenter.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label='Ваш реципиент' required>
          <Select placeholder='Выберите реципиента'>
            {bloodCenter.map((item) => (
              <Select.Option value={item.value}>{item.text}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          label='Загрузить справку'
          help={`
          JPG , PNG объем до 10 Мб.
          Принимаются только фотографии официальных справок установленного образца. 
          После проверки вашей донации, она появится в вашем кабинете.
          `}
          required
        >
          <Input />
        </FormItem>
        <ButtonsRow>
          <Button shape='round' color='red' size='large' outline>
            Сохранить донацию
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
      <Alert dismissible>
        Спасибо, Ваша донация отправлена на проверку. Если Выправильно заполнилнили форму и
        прикрепили нужную справку,то после проверки ваша донация автоматически добавиться.Для
        проверки необходимо до 5-ти рабочих дней.Не забывайте заходить в Ваш личный кабинет.
      </Alert>
    </DashboardGrid>
  );
};

export default Donations;
