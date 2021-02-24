import React from 'react';
import { Title } from '../../../UI';
import { BloodTitle, Image } from './styles';

const quantityText = (quantity: number): string => {
  switch (quantity) {
    case 1:
      return 'Мало';
    case 2:
      return 'Достаточно';
    default:
      return 'Много';
  }
};

const quantityImage = (quantity: number): string => {
  switch (quantity) {
    case 1:
      return '/images/pages/home/hearts/few.svg';
    case 2:
      return '/images/pages/home/hearts/enough.svg';
    default:
      return '/images/pages/home/hearts/lot.svg';
  }
};

const BloodItem: React.FC = ({ group, quantity }: any) => {
  return (
    <div>
      <BloodTitle as='h6' align='center' bold>
        {group}
      </BloodTitle>
      <Image src={quantityImage(quantity)} width={25} height={25} layout='responsive' />
      <Title as='h6' align='center' bold>
        {quantityText(quantity)}
      </Title>
    </div>
  );
};

export default BloodItem;
