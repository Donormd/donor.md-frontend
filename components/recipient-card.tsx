import { FC, memo } from 'react';
import ImageNext from 'next/image';
import styled from 'styled-components';
import HeartIcon from '../public/images/icons/heart+.svg';
import { Button, Title, Paragraph } from './UI';
import { Rate } from './rate';
import { IRecipientCard } from '../interfaces/recipient';

export const RecipientCard: FC<IRecipientCard> = memo(
  ({ src, name, age, bloodGroup, disease, placeName, city, date }) => {
    const dateObj = new Date(date);
    const validity = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
    return (
      <Card>
        <Image src={src} width={100} height={100} layout='fixed' />
        <One>
          <Title as='h3' margin='10px' bold>
            {name}{' '}
            <Paragraph as='span' color='textMuted'>
              {age} лет
            </Paragraph>
          </Title>
          <Title as='h4' margin='10px'>
            {bloodGroup}
          </Title>
          <Title as='h4' margin='10px' color='black'>
            {disease}
          </Title>
        </One>
        <Second>
          <SecondTitle as='h5' color='black'>
            {placeName}
          </SecondTitle>
          <Paragraph color='textMuted'>{city}</Paragraph>
        </Second>
        <Three>
          <Rate total={12} count={8} />
          <Title as='h4'>
            <RedHighlight>Срок до: {validity}</RedHighlight>
          </Title>
        </Three>
        <Four>
          <FourButton variant='outline-danger' size='lg'>
            Помочь
            <HeartIcon width={25} height={25} />
          </FourButton>
        </Four>
      </Card>
    );
  },
);

const Card = styled.article`
  display: grid;
  gap: 15px;
  grid-template-columns: min-content 1fr 1fr 1fr 1fr;
  padding: 25px;
  margin-bottom: 30px;
  background: white;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};

  @media (min-width: 992px) {
    row-gap: 0;
  }
`;

const Image = styled(ImageNext)<{ layout: string }>`
  border-radius: ${({ theme }) => theme.radius};
`;

const RedHighlight = styled.span`
  color: ${({ theme }) => theme.red};
  font-weight: normal;
`;

const One = styled.div`
  align-self: center;
  grid-column: 2 / 5;
  @media (min-width: 768px) {
    align-self: flex-start;
    grid-column: 2 / 4;
  }
`;

const Second = styled.div`
  grid-column: 1 / 5;
  @media (min-width: 768px) {
    grid-column: 2 / 4;
  }
`;

const Three = styled.div`
  grid-column: 1 / 5;
  @media (min-width: 768px) {
    text-align: right;
    grid-row: 1 / 2;
    grid-column: 4 / 6;
  }
`;

const Four = styled.div`
  grid-column: 1 / 5;
  & button {
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-row: 2 / 3;
    grid-column: 4 / 6;
    margin-left: auto;
    margin-top: auto;
  }
`;

const SecondTitle = styled(Title)`
  width: 195px;
`;

const FourButton = styled(Button)`
  display: flex;
  & svg {
    margin-left: 10px;
  }
  &:hover path {
    fill: white;
  }
`;
