import { useRouter } from 'next/dist/client/router';
import { memo, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { leftMenuAtom } from '../../store/atoms/left-menu-atom';
import { ResponsiveLogo } from '../logo';
import { MenuLink } from './menu-link';
import { mock } from './mock';
import { Aside, AsideWrapper, Menu } from './styles';

export const LeftMenu = memo(({ image }: { image?: string }) => {
  const [activeId, setActiveId] = useRecoilState(leftMenuAtom);
  const { pathname } = useRouter();

  useEffect(() => {
    const activeMenu = mock.filter((item) => item.href === pathname)[0];
    activeMenu.key && setActiveId(activeMenu.key);
  }, [pathname, setActiveId]);

  return (
    <Aside image={image}>
      <AsideWrapper>
        <ResponsiveLogo />
        <Menu>
          {mock.map((item, i) => (
            <MenuLink active={i === activeId} {...item} handleClick={() => setActiveId(i)} />
          ))}
        </Menu>
      </AsideWrapper>
    </Aside>
  );
});
