import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { IQuestion, IQuestionList } from '../../../../interfaces/question';
import { Accordion, Button, Divider, Form, Title } from '../../../UI';
import { Question } from './question';
import { useAppSelector } from '../../../../redux/store';
import { getQuestionnaireAction } from '../../../../redux/redusers/forms/dashboard/questionnaire';
import { Loading } from '../../../UI/loading';

const { Panel } = Accordion;

export const QuestionForm: FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useAppSelector((state) => state.questionnaire);

  const { handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getQuestionnaireAction());
  }, [dispatch]);

  const onChangeHandle = (...rest: any[]) => {
    // eslint-disable-next-line no-console
    console.log(rest);
  };

  if (status === 'loading') return <Loading />;

  // data?.forEach((item) => {
  //   console.log(item);
  // });

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log({ data });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Accordion defaultActiveKey={['1']} onChange={onChangeHandle} ghost>
        {data &&
          data.map((panel: IQuestion) => (
            <Panel header={<PanelHeader title={panel.title} />} key={panel._id}>
              {panel.list.map(({ title, ...rest }: IQuestionList, i: number) => (
                <Question title={`${i + 1} ${title}`} {...rest} />
              ))}
            </Panel>
          ))}
      </Accordion>
      <Button variant='outline-danger' size='lg'>
        Сохранить
      </Button>
    </FormWrapper>
  );
};

const FormWrapper = styled(Form)`
  margin-top: 25px;
`;

const DividerWrapper = styled(Divider)`
  &.ant-divider {
    margin: 0;
  }
`;

const PanelHeader: FC<{ title: string }> = ({ title }): JSX.Element => (
  <DividerWrapper>
    <Title as='h4' bold>
      {title}
    </Title>
  </DividerWrapper>
);
