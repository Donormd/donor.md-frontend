import { ReviewForm } from '../../components/forms/dashboard/review';
import { Divider, Paragraph, Title, TitleWithArrow } from '../../components/UI';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';

// TODO add validation on form

const ReviewsAdd = () => {
  return (
    <DashboardGrid>
      <TitleWithArrow margin='50px'>Добавить отзыв</TitleWithArrow>
      <Paragraph>
        На этой странице вы можете оставить отзыв, написать вопрос и оценить качество работы службы
        переливания крови.
      </Paragraph>
      <Divider orientation='left'>
        <Title as='h5' bold>
          Оценка качества
        </Title>
      </Divider>
      <ReviewForm />
    </DashboardGrid>
  );
};

export default ReviewsAdd;
