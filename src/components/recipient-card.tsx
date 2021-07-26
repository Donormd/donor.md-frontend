import ImageNext from 'next/image';
import { memo, useEffect } from 'react';
import styled from 'styled-components';

import HeartIcon from '../../public/images/icons/heart+.svg';
import { formatDate, yearOrYears } from '../core/helpers/converters';
import { isLoading } from '../core/helpers/state';
import { IOptions } from '../core/interfaces/IIterableStruct';
import { IRecipient } from '../core/interfaces/recipient';
import { getOptions } from '../redux/common';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { Rate } from './rate';
import { Button, Paragraph, Title } from './UI';
import { Loading } from './UI/loading';

type RecipientCardType = Pick<IRecipient, 'recipient'>;

export const RecipientCard = memo(({ recipient }: RecipientCardType) => {
  const {
    fullname,
    dateBirth,
    bloodGroupId,
    medicalCenterId,
    bloodCenterId,
    numberDonors,
    deadline,
    disease,
    // src,
  } = recipient;

  const dispatch = useAppDispatch();

  const { bloodGroups, bloodCenter, transfusionCenter } = useAppSelector((state) => state.common);

  const years = new Date().getFullYear() - new Date(dateBirth).getFullYear();

  useEffect(() => {
    dispatch(getOptions('bloodCenter'));
    dispatch(getOptions('bloodGroups'));
    dispatch(getOptions('transfusionCenter'));
  }, [dispatch]);

  if (
    isLoading<IOptions>(bloodGroups) ||
    isLoading<IOptions>(bloodCenter) ||
    isLoading<IOptions>(transfusionCenter)
  )
    return <Loading />;

  const userBlood = bloodGroups.data.find((i) => i._id === bloodGroupId)?.text;
  const medicalCenter = bloodCenter.data.find((i) => i._id === medicalCenterId)?.text;
  const place = transfusionCenter.data.find((i) => i._id === bloodCenterId)?.text;

  return (
    <Card>
      <Image src='/images/avatars/women.png' width={100} height={100} layout='fixed' />
      <One>
        <Title as='h3' margin='10px' bold>
          {fullname}
          {` `}
          <Paragraph as='span' color='textMuted'>
            {years} {yearOrYears(years)}
          </Paragraph>
        </Title>
        <Title as='h4' margin='10px'>
          {userBlood}
        </Title>
        <Title as='h4' margin='10px' color='black'>
          {disease}
        </Title>
      </One>
      <Second>
        <SecondTitle as='h5' color='black'>
          {medicalCenter}
        </SecondTitle>
        <Paragraph color='textMuted'>{place}</Paragraph>
      </Second>
      <Three>
        <Rate total={12} count={numberDonors} />
        <Title as='h4'>
          <RedHighlight>Срок до: {formatDate(new Date(deadline))}</RedHighlight>
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
});

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
