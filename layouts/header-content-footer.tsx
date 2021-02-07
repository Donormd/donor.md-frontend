import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/footer';
import Header from '../components/common/header';

type Props = {
  children: React.ReactNode;
  background?: string;
  className?: string;
};

const Main = styled.main<{ background?: string }>`
  & {
    padding: 50px 0;
    margin-top: 75px;
  }
  @media (min-width: 1500px) {
    & {
      padding: 75px 0;
      margin-top: 75px;
      background: ${({ background }) => `url(${background})` || 'transparent'};
      background-size: calc(0.44 * 100vw - 460px) calc(0.578 * 100vh - 203px);
      background-repeat: no-repeat;
      background-position: left bottom;
    }
  }
`;

const HeaderContentFooter: React.FC<Props> = ({ children, background, className }): JSX.Element => (
  <>
    <Header />
    <Main className={className} background={background}>
      {children}
    </Main>
    <Footer />
  </>
);

export default HeaderContentFooter;
