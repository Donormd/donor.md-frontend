import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Divider, Form, FormItem, Paragraph, TextArea, Title } from '../../UI';
import {
  createOrUpdateUserStory,
  getUserStory,
  setUserStory,
} from '../../../redux/redusers/forms/user-story';
import { IStory } from '../../../interfaces/story';
import { useAppSelector } from '../../../redux/store';
import { Alert } from '../../alert';
import { storage } from '../../../services/storage';

export const UserStoryForm: FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const {
    userStory: { data: storyData, status },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!storyData) return;

    setValue('story', storyData.story);
  }, [storyData]);

  useEffect(() => {
    const story = storage.get('userStory')?.data as IStory | null;
    story && dispatch(setUserStory(story));

    !story && dispatch(getUserStory);
  }, []);

  const onSubmit = (data: IStory) => {
    dispatch(createOrUpdateUserStory(data));
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
      {status === 'success' && <Alert dismissible>История добавлена</Alert>}
    </Form>
  );
};
