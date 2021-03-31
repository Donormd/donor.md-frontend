import React from 'react';
import { Title } from '../../../UI';
import { BloodTitle, Image } from './styles';

const quantityText = (quantity: number): string => {
  if (quantity < 35) {
    return 'Мало';
  }
  if (quantity > 50 && quantity < 85) {
    return 'Достаточно';
  }
  return 'Много';
};

const quantityImage = (quantity: number): string => {
  if (quantity < 35) {
    return '/images/pages/home/hearts/few.svg';
  }
  if (quantity > 50 && quantity < 85) {
    return '/images/pages/home/hearts/enough.svg';
  }
  return '/images/pages/home/hearts/lot.svg';

};

const BloodItem: React.FC<{ group: string; quantity: number }> = ({ group, quantity }) => {
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
