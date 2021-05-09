import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { Aside, AsideWrapper, Menu } from './styles';
import { ResponsiveLogo } from '../logo';
import { actions } from '../../redux/redusers/left-menu';
import { useAppSelector } from '../../redux/store';
import { MenuLink } from './menu-link';

const LeftMenu: FC<{ image?: string }> = ({ image }) => {
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
      <AsideWrapper>
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
      </AsideWrapper>
    </Aside>
  );
};

export default LeftMenu;
