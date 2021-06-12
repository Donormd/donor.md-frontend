import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import { Button } from '../UI';
import { IRoutsItem, routs, RoutsKey } from './mock';

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 20px;
  margin: 50px 0;
`;

const DashboardButtonsLinks: FC = () => {
  const { push, pathname } = useRouter();
  const rout: RoutsKey = pathname.split('/')[2] as RoutsKey;

  const handleOnClick = (url: string) => push(url);

  return (
    <ButtonGroup>
      {routs[rout].map((item: IRoutsItem) => (
        <Link key={item.key} href={item.href} passHref>
          <Button variant='outline-primary' onClick={() => handleOnClick(item.href)}>
            {item.text}
          </Button>
        </Link>
      ))}
    </ButtonGroup>
  );
};

export default DashboardButtonsLinks;
