import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { column1, column2, column3 } from './mock';
import { Container } from '../../../layouts/container';
import { StyledLink, Title, Paragraph } from '../../UI';
import {
  StyledFooter,
  Grid,
  TitleBrand,
  ParagraphSlogan,
  ColumnList,
  ColumnListItem,
} from './styles';

const Thanks = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 15px;
  align-items: center;
  font-size: 0.7rem;
`;

const Footer: React.FC = (): JSX.Element => (
  <StyledFooter>
    <Container>
      <Grid>
        <div>
          <TitleBrand bold size='1.5rem' margin='15px'>
            donor.md
          </TitleBrand>
          <ParagraphSlogan size='.9rem' margin='15px'>
            Сервис, созданный с концепцией «Люди помогают людям» для формирования стабильной базы
            крови, восполняемой регулярными донорами.
          </ParagraphSlogan>
        </div>
        <div>
          <Title as='h3' margin='15px'>
            О донорстве
          </Title>
          <ColumnList>
            {column1.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href} passHref>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
        <div>
          <Title as='h3' margin='15px'>
            О нас
          </Title>
          <ColumnList>
            {column2.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href} passHref>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
        <div>
          <Title as='h3' margin='15px'>
            Сотрудничество
          </Title>
          <ColumnList>
            {column3.map((item) => (
              <ColumnListItem key={item.id}>
                <Link href={item.href} passHref>
                  <StyledLink color='textDark'>{item.text}</StyledLink>
                </Link>
              </ColumnListItem>
            ))}
          </ColumnList>
        </div>
      </Grid>
      <Thanks>
        <Image src='/images/eu-flag.png' width={47} height={38} layout='fixed' />
        <Paragraph color='textMuted'>
          Данный web-сервис запущен при финансовой поддержке Европейского Союза. Содержание сервиса
          является предметом ответственности команды donor.md и не отражает точку зрения
          Европейского Союза.
        </Paragraph>
      </Thanks>
    </Container>
  </StyledFooter>
);

export default Footer;
