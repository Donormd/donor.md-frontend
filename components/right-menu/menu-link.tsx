import Link from 'next/link';
import { FC } from 'react';

import { IconWrapper, ItemParagraph, LinkGrid, MenuItem } from './styles';

export interface MenuLinkProps {
  key: string | number;
  Icon: any;
  href: string;
  text: string;
}

export const MenuLink: FC<MenuLinkProps> = ({ Icon, href, text }) => (
  <MenuItem>
    <Link href={href}>
      <LinkGrid>
        <ItemParagraph>{text}</ItemParagraph>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </LinkGrid>
    </Link>
  </MenuItem>
);
