import { DashboardButtonsLinks } from '../../components/dashboard-buttons-links';
import { QuestionForm } from '../../components/forms/dashboard/question/QuestionForm';
import { Paragraph, TitleWithArrow } from '../../components/UI/typography';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';

const MyQuestionnaire = () => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Анкета донора</TitleWithArrow>
      <DashboardButtonsLinks />
      <Paragraph margin='0 0 10px 0'>
        Анкета донора заполняется в Центрах переливания крови перед каждой донацией крови. Мы даем Вам
        возможность ознакомиться с ней и заполнить ее за ранее. Анкету можно будет скачать и распечатать.
      </Paragraph>
      <Paragraph>
        <Paragraph as='span' bold>
          Важно
        </Paragraph>
        : Если Вы будете приходить в Центры переливания крови с распечатанной анкетой с нашего Web-сервиса, то
        заполнение анкеты должно быть не позже, чем за 2 дня до Вашей донации.
      </Paragraph>
      <QuestionForm />
    </DashboardGrid>
  );
};

export default MyQuestionnaire;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
