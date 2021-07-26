import { Title } from '../../../UI';
import { BloodTitle, Image } from './styles';

interface IRule {
  few: number;
  enough: number;
}

export type BloodGroup =
  | 'O(I)-'
  | 'O(I)+'
  | 'A(II)-'
  | 'A(II)+'
  | 'B(III)-'
  | 'B(III)+'
  | 'AB(IV)-'
  | 'AB(IV)+';

const rules: Record<BloodGroup, IRule> = {
  'O(I)-': {
    few: 20,
    enough: 50,
  },
  'O(I)+': {
    few: 50,
    enough: 120,
  },
  'A(II)-': {
    few: 20,
    enough: 50,
  },
  'A(II)+': {
    few: 70,
    enough: 150,
  },
  'B(III)-': {
    few: 15,
    enough: 40,
  },
  'B(III)+': {
    few: 40,
    enough: 100,
  },
  'AB(IV)-': {
    few: 15,
    enough: 30,
  },
  'AB(IV)+': {
    few: 20,
    enough: 50,
  },
};

const quantityText = ({ quantity, group }: IProps) => {
  if (quantity < rules[group].few) {
    return 'Критично';
  }
  if (quantity < rules[group].enough) {
    return 'Мало';
  }
  return 'Достаточно';
};

const quantityImage = ({ quantity, group }: IProps): string => {
  if (quantity < rules[group].few) {
    return '/images/pages/home/hearts/few.svg';
  }
  if (quantity < rules[group].enough) {
    return '/images/pages/home/hearts/enough.svg';
  }
  return '/images/pages/home/hearts/lot.svg';
};

interface IProps {
  group: BloodGroup;
  quantity: number;
}

export const BloodItem = ({ group, quantity }: IProps) => {
  return (
    <div>
      <BloodTitle as='h6' align='center' bold>
        {group}
      </BloodTitle>
      <Image src={quantityImage({ quantity, group })} width={25} height={25} layout='responsive' />
      <Title as='h6' align='center' bold>
        {quantityText({ quantity, group })}
      </Title>
    </div>
  );
};
