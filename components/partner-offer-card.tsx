import React from 'react';
import Image from 'next/image';
import { Button, Title, Paragraph } from './UI';

export declare type Props = {
  src: string;
};

const PartnerOfferCard: React.FC<Props> = (): JSX.Element => {
  return (
    <article>
      <Image src='/stub.svg' width={50} height={50} />
      <div>
        <div>
          <Title>Name</Title>
          <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
        </div>
        <div>
          <Title>Условие</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat incidunt quia
            necessitatibus accusantium provident consectetur possimus iusto magnam. Consequatur.
          </Paragraph>
        </div>
      </div>
      <div>
        <div>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, aliquid.
          </Paragraph>
          <Paragraph>16/10/21</Paragraph>
        </div>
        <Button shape='round' color='red' outlined>
          Подробнее
        </Button>
      </div>
    </article>
  );
};

export default React.memo(PartnerOfferCard);
