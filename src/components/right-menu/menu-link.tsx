import Link from 'next/link';

import { IconWrapper, ItemParagraph, LinkGrid, MenuItem } from './styles';

export type MenuLinkType = {
  key: string | number;
  Icon: any;
  href: string;
  text: string;
};

export const MenuLink = ({ Icon, href, text }: MenuLinkType) => (
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
