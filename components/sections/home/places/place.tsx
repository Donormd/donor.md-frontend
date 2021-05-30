import { FC } from 'react';
import styled from 'styled-components';
import { Title } from '../../../UI';

interface IProps {
  placeName: string;
  location: string;
  timeWork: {
    days: string;
    time: string;
    dinner: string;
  };
  numbers: Array<string>;
}

export const Place: FC<IProps> = (props) => {
  const { placeName, location, timeWork, numbers } = props;
  return (
    <address>
      <Title as='h3' bold>
        {placeName}
      </Title>
      <p>{`Расположена по адресу ${location}`}</p>
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

const AdditionalInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
