import React from 'react';
import Link from 'next/link';
import { column1, column2, column3 } from './mock';
import { Container } from '../../../layouts/container';
import { StyledLink, Title } from '../../UI';
import {
  StyledFooter,
  Grid,
  TitleBrand,
  ParagraphSlogan,
  ColumnList,
  ColumnListItem,
} from './styles';

const Footer: React.FC = (): JSX.Element => (
  <StyledFooter>
    <Container>
      <Grid>
        <div>
          <TitleBrand bold size='1.5rem'>
            donor.md
          </TitleBrand>
          <ParagraphSlogan size='.9rem'>
            Проект созданный с концепцией «Люди помогают людям» для формирования стабильной базы
            крови восполняемой регулярными донорами.
          </ParagraphSlogan>
        </div>
        <div>
          <Title as='h3' size='1.5rem'>
            О донорстве
          </Title>
          <ColumnList>
            {column1.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href}>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
        <div>
          <Title as='h3' size='1.5rem'>
            О нас
          </Title>
          <ColumnList>
            {column2.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href}>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
        <div>
          <Title as='h3' size='1.5rem'>
            Сотрудничество
          </Title>
          <ColumnList>
            {column3.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href}>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
