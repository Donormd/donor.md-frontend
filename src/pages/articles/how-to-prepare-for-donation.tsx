import styled from 'styled-components';

import { Paragraph as PH, Title as TL } from '../../components/UI';
import { Container } from '../../core/layouts/container';
import { HeaderContentFooter } from '../../core/layouts/header-content-footer';

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;

const List = styled.ul`
  padding-left: 10px;
`;

const ListItem = styled.li`
  list-style-type: '✔';
  padding-bottom: 10px;
`;

const How2PrepareForDonation = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title bold>Восстановление после донации</Title>
        <Title as='h3' bold>
          Что делать после того, как вы сдали кровь?
        </Title>
        <Paragraph bold>Важно после донации:</Paragraph>
        <List>
          <ListItem>Воздержаться от курения в течение часа после кроводачи</ListItem>
          <ListItem>Старайтесь не подвергаться значительным физическим нагрузкам в течение суток.</ListItem>
          <ListItem> Воздержитесь от употребления алкоголя в течение суток.</ListItem>
          <ListItem>Старайтесь обильно и регулярно питаться и пить воду в течение двух суток.</ListItem>
          <ListItem>Прививки после сдачи крови разрешаются не ранее чем через 10 суток.</ListItem>
          <ListItem>
            Ограничений по вождению автомобиля в день кроводачи нет. За руль мотоцикла можно садиться через 2
            часа после кроводачи.
          </ListItem>
        </List>
        <Title as='h3' bold>
          Что есть после донации?
        </Title>
        <Paragraph>
          <b>Пища, богатая железом</b>, - одно из важных условий восстановления после кроводачи.
        </Paragraph>
        <List>
          <ListItem>
            Богатый источник железа - это животные продукты: мясо, печень, рыба и разнообразные морепродукты.
            Железо, содержащееся в них, называется гемовым и легче усваивается организмом - до 30%.
          </ListItem>
          <ListItem>
            Если вы не употребляете животной пищи, запасы железа вам помогут пополнить шпинат, горох,
            брокколи, фасоль, спаржа, тофу, а также хлеб, крупы и макароны. Однако ваш организм сможет усвоить
            только 10% железа, содержащегося в этих продуктах.
          </ListItem>
          <ListItem>
            Улучшить усвоение поможет витамин С. Поэтому в следующий раз добавьте к вашему обеду или ужину
            свежий салат из томатов и красного, желтого или оранжевого перца и сбрызните его лимонным соком.
          </ListItem>
          <ListItem>
            При желании через 5 дней Вы можете приехать с паспортом и справкой о сдачи крови в Центр
            переливания крови и получить справку о результатах анализа на ВИЧ, Гепатит В и С, сифилис.
          </ListItem>
        </List>
        <Paragraph>
          <b>Результаты сообщаются только лично и конфиденциально.</b> В случае положительных результатов Вам
          дадут совет куда обратиться за медицинской помощью.
        </Paragraph>
        <Title as='h3' bold>
          Как часто можно сдавать кровь?
        </Title>
        <Paragraph>
          <b>Важно!</b> соблюдать правила, установленные медиками. Так, мужчины могут сдавать кровь цельную
          кровь не более 5 раз в год, а женщины — не более 4.
        </Paragraph>
      </Container>
    </HeaderContentFooter>
  );
};

export default How2PrepareForDonation;
