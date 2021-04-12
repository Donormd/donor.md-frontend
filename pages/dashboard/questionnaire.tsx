import React, { FC } from 'react';
import styled from 'styled-components';
import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import {
  TitleWithArrow,
  Button,
  Form,
  Title,
  Paragraph,
  Accordion,
  Divider,
} from '../../components/UI';
import DashboardGrid from '../../layouts/dashboard-grid';
import { useAppSelector } from '../../redux/store';
import { Question } from '../../components/forms/question';
import { IQuestionList } from '../../interfaces/question';

const MyQuestionnaire: FC = () => {
  const { data } = useAppSelector((state) => state.common.questionnaire);
  return (
    <DashboardGrid>
      <TitleWithArrow>Анкета донора</TitleWithArrow>
      <DashboardButtonsLinks />
      <Paragraph margin='10px'>
        Анкета донора заполняется в Центрах переливания крови перед каждой донацией крови. Мы даем
        Вам возможность ознакомиться с ней и заполнить ее за ранее. Анкету можно будет скачать и
        распечатать.
      </Paragraph>
      <Paragraph>
        <Paragraph as='span' bold>
          Важно
        </Paragraph>
        : Если Вы будете в Центры переливания крови с распечатанной анкетой с сервиса donor.md, она
        должна быть заполнена не позже, чем за 2 дня до Вашей донации.
      </Paragraph>
      <FormWrapper>
        {/* eslint-disable-next-line no-console */}
        <Accordion defaultActiveKey={['1']} onChange={(args) => console.log(args)} ghost>
          {data &&
            data.map((panel: any) => (
              <Panel header={<PanelHeader title={panel.title} />} key={panel.key}>
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
    </DashboardGrid>
  );
};

export default MyQuestionnaire;

const FormWrapper = styled(Form)`
  margin-top: 25px;
`;

const { Panel } = Accordion;

const DividerWrapper = styled(Divider)`
  &.ant-divider {
    margin: 0;
  }
`;

const PanelHeader: React.FC<{ title: string }> = ({ title }): JSX.Element => (
  <DividerWrapper>
    <Title as='h4' bold>
      {title}
    </Title>
  </DividerWrapper>
);
