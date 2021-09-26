import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Container } from '../../../core/layouts/container';
import { StyledLink } from '../../UI/links';
import { Paragraph, Title } from '../../UI/typography';
import { column1, column2, column3 } from './mock';
import { ColumnList, ColumnListItem, Grid, ParagraphSlogan, StyledFooter, TitleBrand } from './styles';

export const Footer = () => (
  <StyledFooter>
    <Container>
      <Grid>
        <div>
          <TitleBrand bold size='1.5rem' margin='0 0 15px 0'>
            donor.md
          </TitleBrand>
          <ParagraphSlogan size='.9rem' margin='0 0 15px 0'>
            Сервис, созданный с концепцией «Люди помогают людям» для формирования стабильной базы крови,
            восполняемой регулярными донорами.
          </ParagraphSlogan>
        </div>
        <div>
          <Title as='h3' margin='0 0 15px 0'>
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
          <Title as='h3' margin='0 0 15px 0'>
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
          <Title as='h3' margin='0 0 15px 0'>
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
        <Paragraph color='textMuted' margin='0'>
          Данный web-сервис запущен при финансовой поддержке Европейского Союза. Содержание сервиса является
          предметом ответственности команды donor.md и не отражает точку зрения Европейского Союза.
        </Paragraph>
      </Thanks>
    </Container>
  </StyledFooter>
);

const Thanks = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 15px;
  align-items: center;
  font-size: 0.7rem;
`;
