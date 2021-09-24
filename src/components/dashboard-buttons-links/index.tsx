import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '../UI/button';
import { IRoutsItem, routs, RoutsKey } from './mock';

export const DashboardButtonsLinks = () => {
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

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 20px;
  margin: 50px 0;
`;
