import Image from 'next/image';
import { memo } from 'react';

import { List, ListItem } from './styles';

export const SocialMediaLinks = memo(({ ...rest }) => (
  <List {...rest}>
    <ListItem>
      <a href='https://vk.com/yadonorpmr'>
        <Image src='/images/social-icons/vk.svg' width={30} height={30} layout='fixed' />
      </a>
    </ListItem>
    <ListItem>
      <a href='https://www.facebook.com/Donor.onlinepmr'>
        <Image src='/images/social-icons/fb.svg' width={30} height={30} layout='fixed' />
      </a>
    </ListItem>
    <ListItem>
      <a href='https://www.instagram.com/donor.onlinepmr'>
        <Image src='/images/social-icons/instagram.svg' width={30} height={30} layout='fixed' />
      </a>
    </ListItem>
    <ListItem>
      <a href='https://ok.ru/group/57784472371229'>
        <Image src='/images/social-icons/ok.svg' width={30} height={30} layout='fixed' />
      </a>
    </ListItem>
  </List>
));
