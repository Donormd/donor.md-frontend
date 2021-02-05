import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styled from 'styled-components';
import ButtonGroup from '../../../button-group';
import { Title } from '../../../UI';
import { Section } from '../utils';
import Place from './place';

const MapWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
  height: 200px;
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`;

const buttons = [
  {
    key: 0,
    text: 'Тирасполь',
  },
  {
    key: 1,
    text: 'Бендеры',
  },
  {
    key: 2,
    text: 'Рыбница',
  },
];

const places = [
  {
    id: 1,
    city: 'Тирасполь',
    location: 'ул. Мира 33 А',
    placeName: 'РЕСПУБЛИКАНСКАЯ КЛИНИЧЕСКАЯ БОЛЬНИЦА',
    numbers: ['533 4-67-37', '533 2-39-07', '533 2-51-36'],
    timeWork: {
      days: 'понедельник-пятница',
      time: 'с 8.00 до 14.00',
      dinner: 'обед с 12.00 до 12.30',
    },
    geometry: [46.833341, 29.644907],
  },
  {
    id: 2,
    city: 'Бендеры',
    location: 'ул. С. Лазо 20, 2 этаж',
    placeName: 'ГУ БЕНДЕРСКИЙ ЦЕНТР АМБУЛАТОРНОЙ-ПОЛИКЛИНИЧЕСКОЙ ПОМОЩИ',
    numbers: ['552 44707'],
    timeWork: {
      days: 'понедельник-пятница',
      time: 'с 8.00 до 11.00',
      dinner: '',
    },
    geometry: [46.822841, 29.486373],
  },
  {
    id: 3,
    city: 'Рыбница',
    location: 'ул. Грибоедова 5',
    placeName: 'ГУ РЫБНИЦКАЯ ЦЕНТРАЛЬНАЯ БОЛЬНИЦА',
    numbers: ['555 4-39-06'],
    timeWork: {
      days: 'понедельник-пятница',
      time: 'с 8.00 до 12.00',
      dinner: '',
    },
    geometry: [47.771619, 28.999127],
  },
];

const SectionHeader = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const SectionBody = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 40px;
  }
`;

const Places: React.FC = (): JSX.Element => {
  const [id, setId] = useState<any>(0);

  const { placeName, location, timeWork, numbers, geometry } = places[id];

  return (
    <Section id='places'>
      <SectionHeader>
        <Title as='h2' className='h1' margin='15px' bold>
          Где сдать кровь ?
        </Title>
        <ButtonGroup buttons={buttons} handleClick={setId} />
      </SectionHeader>
      <SectionBody>
        <MapWrapper>
          <YMaps
            query={{
              lang: 'ru_RU',
            }}
          >
            <Map
              state={{
                center: geometry,
                zoom: 15,
                avoidFractionalZoom: true,
              }}
              width='100%'
              height='100%'
            >
              <Placemark geometry={geometry} />
            </Map>
          </YMaps>
        </MapWrapper>
        <Place placeName={placeName} location={location} timeWork={timeWork} numbers={numbers} />
      </SectionBody>
    </Section>
  );
};

export default Places;
