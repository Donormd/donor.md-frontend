import { FC, memo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export declare type Props = {
  count: number;
  total: number;
};

const outlined = () => (
  <Image src='/images/rate/outlined.svg' width={20} height={20} layout='fixed' />
);

const filled = () => <Image src='/images/rate/filled.svg' width={20} height={20} layout='fixed' />;

const RateWrapper = styled.div`
  & div {
    margin-right: 5px;
  }
`;

export const Rate: FC<Props> = memo(({ count, total }) => {
  const icons = Array(total)
    .fill(1)
    .map((v, i) => i + 1);

  return (
    <RateWrapper>
      {icons.map((icon, i) => {
        if (i < count) return filled();
        return outlined();
      })}
    </RateWrapper>
  );
});
