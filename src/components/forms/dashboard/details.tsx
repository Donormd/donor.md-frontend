import { Controller, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { IUser } from '../../../core/interfaces/user';
import { getOptions } from '../../../queries/common';
import { updateUser } from '../../../queries/user';
import { useTypedMutation, useTypedQuery } from '../../../queries/utils';
import { userAtom } from '../../../store/atoms/user-atom';
import { Alert } from '../../UI/alert';
import { Button } from '../../UI/button';
import { Checkbox } from '../../UI/form/checkbox';
import { Form, FormItem } from '../../UI/form/form-item';
import { Input } from '../../UI/form/input';
import { Select } from '../../UI/form/select';
import { Divider } from '../../UI/other';
import { Title } from '../../UI/typography';

export const DetailsForm = () => {
  const user = useRecoilValue(userAtom);
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: { ...user, corporateDonations: !!user.corporateId },
  });
  const { data: sex } = useTypedQuery('sex', () => getOptions('sex'));
  const { data: bloodGroups } = useTypedQuery('blood-groups', () => getOptions('blood-groups'));
  const { data: cities } = useTypedQuery('cities', () => getOptions('cities'));
  const { data: organizations } = useTypedQuery('organizations', () => getOptions('organizations'));
  const { mutate, isSuccess, isError } = useTypedMutation('user', updateUser);

  const isCorporateDonation = watch('corporateDonations');

  const onSubmit = (data: IUser) => {
    mutate(data);
  };

  if (!sex || !bloodGroups || !cities || !organizations) return null;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem columns={2} label='ФИО' required>
        <Input name='fullname' ref={register} />
      </FormItem>
      <FormItem columns={2} label='Дата рождения' required>
        <Input name='dateBirth' ref={register} />
      </FormItem>
      <FormItem columns={2} label='Группа крови' required>
        <Controller
          name='bloodGroupId'
          control={control}
          as={
            <Select size='large' placeholder='Ваша группа крови'>
              {bloodGroups.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem columns={2} label='Пол' required>
        <Controller
          name='sexId'
          control={control}
          checked={false}
          as={
            <Select size='large' placeholder='Город проживания'>
              {sex.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem columns={2} label='Город проживания' required>
        <Controller
          name='cityId'
          control={control}
          checked={false}
          as={
            <Select size='large' placeholder='Город проживания'>
              {cities.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <Divider />
      <Title as='h4' margin='30px' bold>
        Корпоративное донорство
      </Title>
      <FormItem columns={2}>
        <Checkbox name='corporateDonations' ref={register}>
          Я участник программы корпоративное донорство
        </Checkbox>
      </FormItem>
      <FormItem columns={2} label='Выберите вашу организацию'>
        <Controller
          name='corporateId'
          control={control}
          as={
            <Select size='large' placeholder='Выберите вашу организацию' disabled={!isCorporateDonation}>
              {organizations.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          }
        />
      </FormItem>
      <Divider />
      <Title as='h4' margin='30px' bold>
        Ваши контакты
      </Title>
      <FormItem columns={2} label='Ваш email-адрес' required>
        <Input name='email' ref={register} />
      </FormItem>
      <FormItem columns={2} label='Номер мобильного телефона' required>
        <Input name='phoneMobile' ref={register} />
      </FormItem>
      <FormItem columns={2} label='Номер домашнего телефона' required>
        <Input name='phone' ref={register} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Обновить информацию
      </Button>
      {isSuccess && <Alert dismissible>Вы успешно обновили информацию</Alert>}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </Form>
  );
};
