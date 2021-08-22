import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { DashboardButtonsLinks } from '../../src/components/dashboard-buttons-links';
import { QuestionForm } from '../../src/components/forms/dashboard/question/QuestionForm';
import { Paragraph, TitleWithArrow } from '../../src/components/UI';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getUser } from '../../src/queries/user';

const MyQuestionnaire = () => {
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
        : Если Вы будете приходить в Центры переливания крови с распечатанной анкетой с нашего
        Web-сервиса, то заполнение анкеты должно быть не позже, чем за 2 дня до Вашей донации.
      </Paragraph>
      <QuestionForm />
    </DashboardGrid>
  );
};

export default MyQuestionnaire;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
