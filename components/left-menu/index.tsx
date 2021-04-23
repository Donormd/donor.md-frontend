import { FC, useEffect } from 'react';
import Link from 'next/link';
import { Tooltip } from 'antd';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { MenuItem, IconWrapper, Paragraph, Aside, Menu, LinkButton } from './styles';
import { ResponsiveLogo } from '../logo';
import { IMenuLinkProps, actions } from '../../redux/redusers/left-menu';
import { useAppSelector } from '../../redux/store';

type WithButton = {
  handleClick?: () => void;
};

const MenuLink: FC<IMenuLinkProps & { active: boolean } & WithButton> = ({
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

const LeftMenu: FC<{ image?: string }> = ({ image }): JSX.Element => {
  const { data, selectId } = useAppSelector((state) => state.leftMenu);
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const { setMenu } = actions;

  useEffect(() => {
    const activeMenu = data.filter((item) => item.href === pathname)[0];
    activeMenu?.key && dispatch(setMenu(activeMenu.key));
  }, [data, dispatch, pathname, setMenu]);

  return (
    <Aside image={image}>
      <ResponsiveLogo />
      <Menu>
        {data.map((item, i) => (
          <MenuLink
            active={i + 1 === selectId}
            {...item}
            handleClick={() => dispatch(setMenu(i))}
          />
        ))}
      </Menu>
    </Aside>
  );
};

export default LeftMenu;
