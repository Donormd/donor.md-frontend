import React from 'react';
import styled from 'styled-components';
import { Title } from '../../../UI';

export declare type Props = {
  placeName: string;
  location: string;
  timeWork: {
    days: string;
    time: string;
    dinner: string;
  };
  numbers: Array<string>;
};

const AdditionalInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Place: React.FC<Props> = (props): JSX.Element => {
  const { placeName, location, timeWork, numbers } = props;
  return (
    <address className='style.place__donation__article'>
      <Title as='h3' bold>
        {placeName}
      </Title>
      <p className='style.place__donation__address'>{`Расположена по адресу ${location}`}</p>
      <AdditionalInformation>
        <div>
          <b>Режим работы</b>
          <p>{timeWork.days}</p>
          <p>{timeWork.time}</p>
          <p>{timeWork.dinner}</p>
        </div>
        <div>
          <b>Телефоны для связи :</b>
          {numbers.map((numb) => (
            <p key={numb}>{numb}</p>
          ))}
        </div>
      </AdditionalInformation>
    </address>
  );
};

export default Place;
