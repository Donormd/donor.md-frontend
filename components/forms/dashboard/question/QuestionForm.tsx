import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IQuestion, IQuestionList } from '../../../../core/interfaces/question';
import { getQuestionnaireAction } from '../../../../redux/redusers/forms/dashboard/questionnaire';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { Accordion, Button, Divider, Form, Title } from '../../../UI';
import { Loading } from '../../../UI/loading';
import { Question } from './question';

const { Panel } = Accordion;

export const QuestionForm: FC = () => {
  const dispatch = useAppDispatch();
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
      <Accordion defaultActiveKey={data ? data[0]._id : '1'} onChange={onChangeHandle} ghost>
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

const PanelHeader: FC<{ title: string }> = ({ title }) => (
  <DividerWrapper>
    <Title as='h4' bold>
      {title}
    </Title>
  </DividerWrapper>
);
