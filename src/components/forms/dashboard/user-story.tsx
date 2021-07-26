import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { IStory } from '../../../core/interfaces/story';
import { getStories } from '../../../queries/dashboard/stories';
import { Alert } from '../../alert';
import { Button, Divider, Form, FormItem, Paragraph, TextArea, Title } from '../../UI';

export const UserStoryForm = () => {
  const { isSuccess } = useQuery(['user', 'story'], getStories);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: IStory) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // dispatch(createOrUpdateUserStory(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <Title as='h5' margin='15px'>
        Моя история
      </Title>
      <Paragraph color='textMuted' margin='15px'>
        Напишите историю о том, как и почему вы решились стать донором (что для вас это значит). Это
        поможет многим людям, которые еще не определились, решиться на то, чтобы тоже стать донором.
        Если вы первый раз сдаете кровь напишите, почему вырешились сдать кровь, потом напишите
        еще!)
      </Paragraph>
      <FormItem>
        <TextArea rows={7} name='story' ref={register} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Сохранить историю
      </Button>
      {isSuccess && <Alert dismissible>История добавлена</Alert>}
    </Form>
  );
};
