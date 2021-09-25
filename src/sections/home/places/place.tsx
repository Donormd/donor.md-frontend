import styled from 'styled-components';

import { Title } from '../../../components/UI/typography';

interface IProps {
  placeName: string;
  location: string;
  timeWork: {
    days: string;
    time: string;
    dinner: string;
  };
  numbers: string[];
}

export const Place = ({ placeName, location, timeWork, numbers }: IProps) => {
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
