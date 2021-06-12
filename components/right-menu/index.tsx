import { FC } from 'react';

import { useAuth } from '../../core/hooks/useAuth';
import Add from '../../public/images/pages/dashboard/right-aside/add-donation.svg';
import Question from '../../public/images/pages/dashboard/right-aside/question.svg';
import Schedule from '../../public/images/pages/dashboard/right-aside/schedule-donation.svg';
import Support from '../../public/images/pages/dashboard/right-aside/support-project.svg';
import DonorInfo from '../donor-info';
import { Loading } from '../UI/loading';
import { MenuLink, MenuLinkProps } from './menu-link';
import { Aside, AsideWrapper, Menu } from './styles';
// import DonorProgress from '../donor-progress';
// import DonorCard from '../donor-card';

const menu: MenuLinkProps[] = [
  {
    key: 1,
    Icon: Schedule,
    href: '/dashboard/details',
    text: 'Запланировать донацию',
  },
  {
    key: 2,
    Icon: Add,
    href: '/dashboard/donations',
    text: 'Добавить донацию',
  },
  {
    key: 3,
    Icon: Question,
    href: '/dashboard/reviews',
    text: 'Ваш отзыв / вопрос',
  },
  {
    key: 4,
    Icon: Support,
    href: '/support-project',
    text: 'Поддержать проект',
  },
];

const RightMenu: FC = () => {
  const auth = useAuth();

  if (!auth?.user) return <Loading />;

  const [name, lastname] = auth?.user?.fullname.split(' ');

  return (
    <Aside>
      <AsideWrapper>
        <DonorInfo name={name} lastname={lastname} honorary={auth.user.honorary} />
        {/* <DonorCard />
      <DonorProgress /> */}
        <Menu>
          {menu.map((link) => (
            <MenuLink {...link} />
          ))}
        </Menu>
      </AsideWrapper>
    </Aside>
  );
};

export default RightMenu;
