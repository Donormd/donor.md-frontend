import { FC } from 'react';
import DashboardButtonsLinks from '../../components/dashboard-buttons-links';
import { TitleWithArrow, Paragraph } from '../../components/UI';
import { DashboardGrid } from '../../layouts/dashboard-grid';
import { QuestionForm } from '../../components/forms/dashboard/question/QuestionForm';

const MyQuestionnaire: FC = () => {
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
        : Если Вы будете приходить в Центры переливания крови с распечатанной анкетой с нашего Web-сервиса, то заполнение анкеты
        должно быть не позже, чем за 2 дня до Вашей донации.
      </Paragraph>
      <QuestionForm />
    </DashboardGrid>
  );
};

export default MyQuestionnaire;
