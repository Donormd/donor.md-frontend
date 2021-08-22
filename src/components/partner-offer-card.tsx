import ImageNext from 'next/image';
import { memo } from 'react';
import styled from 'styled-components';

import { formatDate } from '../core/helpers/converters';
import { Button, Paragraph, Title } from './UI';

type PartnerOfferCardType = {
  src: string;
  name: string;
  discount: string;
  condition: string;
  date: string;
};

export const PartnerOfferCard = memo(
  ({ src, name, discount, condition, date }: PartnerOfferCardType) => {
    return (
      <Card>
        <Image src={src} width={100} height={100} layout='fixed' />
        <One>
          <Title as='h3'>{name}</Title>
          <Paragraph>
            <RedHighlight>{discount}</RedHighlight>
          </Paragraph>
        </One>
        <Second>
          <Title as='h6' color='textMuted' bold>
            Условие:
          </Title>
          <Paragraph size='0.85rem' color='textMuted'>
            {condition}
          </Paragraph>
        </Second>
        <Three>
          <ThreeParagraph bold>
            Срок действия предложения до <RedHighlight>{formatDate(new Date(date))}</RedHighlight>
          </ThreeParagraph>
        </Three>
        <Four>
          <Button variant='outline-danger' size='lg'>
            Подробнее
          </Button>
        </Four>
      </Card>
    );
  },
);

const Card = styled.article`
  display: grid;
  gap: 15px;
  grid-template-columns: min-content 1fr 1fr 1fr;
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
    grid-column: 4 / 5;
  }
`;

const Four = styled.div`
  grid-column: 1 / 5;
  & button {
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
    margin-left: auto;
    margin-top: auto;
  }
`;

const ThreeParagraph = styled(Paragraph)`
  @media (min-width: 992px) {
    width: 140px;
    margin-left: auto;
  }
`;
