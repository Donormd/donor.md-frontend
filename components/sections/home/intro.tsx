import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Title, Paragraph, Button } from '../../UI';

const Section = styled.section`
  padding-top: 45px;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: -1.5rem 0 -4rem 0;
`;

const BoldText = styled.b`
  color: ${({ theme }) => theme.red};
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  justify-content: space-between;

  @media (min-width: 992px) {
    grid-template-columns: min-content;
    row-gap: 20px;
  }
`;

const Intro: React.FC = (): JSX.Element => (
  <Section id='intro'>
    <ImageWrapper>
      <NextImage src='/images/pages/home/love.svg' width={300} height={300} layout='responsive' />
    </ImageWrapper>
    <div>
      <Title bold size='1.4rem'>
        <BoldText>DONOR.MD</BoldText> - место, где люди помогают людям
      </Title>
      <Paragraph>Web-сервис для тех, кто сдает и ищет донорскую кровь в Приднестровье</Paragraph>
      <ButtonGroup>
        <Link href='/need-blood'>
          <Button size='large' shape='round' color='primary' outlined>
            Нужна кровь
          </Button>
        </Link>
        <Link href='/become-donor'>
          <Button size='large' shape='round' color='red' outlined>
            Стать донором
          </Button>
        </Link>
      </ButtonGroup>
    </div>
  </Section>
);

export default Intro;
