import Link from 'next/link';
import styled, { css } from 'styled-components';

import { StyledLink } from '../../components/UI/links';
import { Title } from '../../components/UI/typography';

const links = [
  {
    link: '/minimum-requirements-for-donor',
    text: 'Какие требования к донору?',
  },
  {
    link: '/how-to-prepare-for-donation',
    text: 'Как подготовиться к донации?',
  },
  {
    link: '/blood-donation-day',
    text: 'Как проходит донация?',
  },
  {
    link: '/recovery-from-donation',
    text: 'Восстановление после донации',
  },
  {
    link: '/who-needs-donated-blood',
    text: 'Кому нужна донорская кровь?',
  },
  {
    link: '/plasma-donors-COVID19',
    text: 'О донорстве плазмы Covid19',
  },
];

export const HowToPrepare = () => (
  <Article background='/images/pages/about-donation/preparation-blood-donation.svg'>
    <Title as='h2' margin='60px 0 40px 0' bold>
      Подготовка к первой сдачи крови
    </Title>
    <List>
      {links.map(({ text, link }) => (
        <ListItem key={text}>
          <Link href={link} passHref>
            <RedLink bold>{text}</RedLink>
          </Link>
        </ListItem>
      ))}
    </List>
  </Article>
);

const Article = styled.div<{ background: string }>`
  width: 100%;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 30px;
`;

const RedLink = styled(StyledLink)(
  ({ theme }) => css`
    font-size: 1.4rem;
    text-decoration-line: underline;
    color: ${theme.colors.textDark};

    &:hover {
      color: ${theme.colors.red};
      text-decoration-line: underline;
    }
  `,
);
