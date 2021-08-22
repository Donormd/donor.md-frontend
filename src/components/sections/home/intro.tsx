import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Button, Paragraph, Title } from '../../UI';

export const Intro = () => (
  <Section id='intro'>
    <ImageWrapper>
      <Image src='/images/pages/home/love.svg' width={300} height={300} layout='responsive' />
    </ImageWrapper>
    <Column>
      <StyledTitle bold>
        <RedText>DONOR.MD</RedText> - место, где люди помогают людям
      </StyledTitle>
      <ColumnParagraph>
        Web-сервис для тех, кто сдает и ищет донорскую кровь в Приднестровье
      </ColumnParagraph>
      <ButtonGroup>
        <Link href='/articles/minimum-requirements-for-donor' passHref>
          <Button variant='outline-primary' size='lg'>
            Стать донором
          </Button>
        </Link>
        <Link href='/donor-search' passHref>
          <Button variant='outline-danger' size='lg'>
            Нужна кровь
          </Button>
        </Link>
      </ButtonGroup>
    </Column>
  </Section>
);

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
  @media (min-width: 992px) {
    width: calc(0.98039 * 100vw + 627px);
  }
  @media (min-width: 1400px) {
    width: 1950px;
  }
`;

const StyledTitle = styled(Title)`
  line-height: 1;
`;

const RedText = styled.b`
  color: ${({ theme }) => theme.red};
`;

const Column = styled.div`
  margin-top: 30px;
`;

const ColumnParagraph = styled(Paragraph)`
  padding: 15px 0;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (min-width: 410px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: max-content;
  }
`;
