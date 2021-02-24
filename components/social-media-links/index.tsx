import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List, ListItem } from './styles';

const SocialMediaLinks: React.FC<{ className?: string }> = ({ className }) => (
  <List className={className}>
    <ListItem>
      <Link href='https://vk.com/'>
        <Image src='/images/social-icons/vk.svg' width={30} height={30} layout='fixed' />
      </Link>
    </ListItem>
    <ListItem>
      <Link href='https://fb.com/'>
        <Image src='/images/social-icons/fb.svg' width={30} height={30} layout='fixed' />
      </Link>
    </ListItem>
    <ListItem>
      <Link href='https://instagram.com/'>
        <Image src='/images/social-icons/instagram.svg' width={30} height={30} layout='fixed' />
      </Link>
    </ListItem>
    <ListItem>
      <Link href='https://ok.ru/'>
        <Image src='/images/social-icons/ok.svg' width={30} height={30} layout='fixed' />
      </Link>
    </ListItem>
  </List>
);

export default SocialMediaLinks;
