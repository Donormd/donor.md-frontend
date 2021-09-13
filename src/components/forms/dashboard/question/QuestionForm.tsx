import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { prepareError } from '../../../../core/helpers/prepare-data';
import { IQuestion, IQuestionList, IQuestionnaireStory } from '../../../../core/interfaces/question';
import { createQuestionnaireAction, getQuestionnaire } from '../../../../queries/questionnaire';
import { useTypedMutation, useTypedQuery } from '../../../../queries/utils';
import { Alert } from '../../../alert';
import { Accordion, Button, Divider, Form, Title } from '../../../UI';
import { Loading } from '../../../UI/loading';
import { Question } from './question';

const { Panel } = Accordion;

export const QuestionForm = () => {
  const { data, isLoading } = useTypedQuery('question', getQuestionnaire);
  const { error, mutate, isError } = useTypedMutation('question', (payload: IQuestionnaireStory) =>
    createQuestionnaireAction(payload),
  );
  const { handleSubmit } = useForm();

  const onChangeHandle = (...rest: any[]) => {
    // eslint-disable-next-line no-console
    console.log(rest);
  };

  if (isLoading) return <Loading />;

  const onSubmit = (data: IQuestionnaireStory) => {
    mutate(data);
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
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
      <Button variant='outline-danger' size='lg'>
        Сохранить
      </Button>
    </FormWrapper>
  );
};

const PanelHeader = ({ title }: { title: string }) => (
  <DividerWrapper>
    <Title as='h4' bold>
      {title}
    </Title>
  </DividerWrapper>
);

const FormWrapper = styled(Form)`
  margin-top: 25px;
`;

const DividerWrapper = styled(Divider)`
  &.ant-divider {
    margin: 0;
  }
`;
