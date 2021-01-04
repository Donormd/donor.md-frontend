import React from 'react';
import cn from 'classnames';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import style from './style.module.scss';

type Props = {
  classNames?: string | null;
  children: React.ReactNode;
};

const HeaderContentFooter: React.FC<Props> = ({ classNames, children }: Props): JSX.Element => (
  <>
    <Header />
    <main className={cn(style.content, classNames)}>{children}</main>
    <Footer />
  </>
);

export default HeaderContentFooter;
