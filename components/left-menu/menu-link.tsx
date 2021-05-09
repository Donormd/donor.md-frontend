import { FC } from 'react';
import Link from 'next/link';
import { Tooltip } from 'antd';
import { ReactSVG } from 'react-svg';
import { IMenuLinkProps } from '../../redux/redusers/left-menu';
import { IconWrapper, LinkButton, MenuItem, Paragraph } from './styles';

type WithButton = {
  handleClick?: () => void;
};

export const MenuLink: FC<IMenuLinkProps & { active: boolean } & WithButton> = ({
  active,
  imageSrc,
  href,
  text,
}) => (
  <Link href={href} passHref>
    <Tooltip title={text} placement='left'>
      <MenuItem>
        <LinkButton size='lg' active={active} variant='outline-primary'>
          <IconWrapper>
            <ReactSVG src={imageSrc} />
          </IconWrapper>
          <Paragraph>{text}</Paragraph>
        </LinkButton>
      </MenuItem>
    </Tooltip>
  </Link>
);
