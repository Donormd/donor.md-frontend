import Image from 'next/image';
import styled from 'styled-components';

import { Paragraph, Title } from '../../components/UI/typography';

const list = [
  {
    text: `У доноров за счет регулярного обновления крови 
          <b>гораздо устойчивее функционирует иммунная система</b>, печень, поджелудочная железа,
          пищеварительная система.`,
    image: '/images/numbers/1.svg',
  },
  {
    text: `Доноры, согласно статистике, в среднем <b>живут на 5 лет дольше</b> других своих сограждан.`,
    image: '/images/numbers/2.svg',
  },
  {
    text: `Донор всегда здоров, так как постоянно держит свое <b>здоровье под контролем</b> и может узнать о
          своем заболевании на ранних стадиях.`,
    image: '/images/numbers/3.svg',
  },
  {
    text: `Организм донора более <b>стойко переносит кровопотерю</b>, что повысит шансы на выживание при
          сильном кровотечении.`,
    image: '/images/numbers/4.svg',
  },
  {
    text: `У Донора <b>сердце работает лучше</b>, так как кроводачи способствует уменьшенью вязкости крови и
          высокому содержанию железа.`,
    image: '/images/numbers/5.svg',
  },
  {
    text: `У Донора более <b>низкие риски развития инфарктов</b>, инсультов, онкологических заболеваний.`,
    image: '/images/numbers/6.svg',
  },
  {
    text: `Донор за каждую донацию <b>сжигает 650 калорий.</b>`,
    image: '/images/numbers/7.svg',
  },
  {
    text: `Донор это <b>добрый и жизнерадостных человек</b>, обычно про таких говорят: 
        “У этого человека доброе сердце”.`,
    image: '/images/numbers/8.svg',
  },
];

export const Facts = () => {
  return (
    <section>
      <Title as='h2' margin='0 0 50px 0' bold>
        Факты о донорстве
      </Title>
      <Paragraph size='1.4rem' margin='0 0 30px 0'>
        Мы Вам расскажем <b>8 научно доказанных фактов</b>, <br />
        почему регулярное (2-5 раз в год) <b>донорство полезно</b>.
      </Paragraph>
      <Columns>
        <List>
          {list.slice(0, 4).map(({ text, image }) => (
            <ListItem key={image}>
              <Image src={image} width={52} height={52} layout='fixed' />
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </ListItem>
          ))}
        </List>
        <List>
          {list.slice(4, 8).map(({ text, image }) => (
            <ListItem key={image}>
              <Image src={image} width={52} height={52} layout='fixed' />
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </ListItem>
          ))}
        </List>
      </Columns>
    </section>
  );
};

const Columns = styled.div`
  display: grid;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 52px 1fr;
  grid-column-gap: 20px;

  margin-bottom: 20px;
`;
