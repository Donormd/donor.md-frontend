import Image from 'next/image';
import styled from 'styled-components';

import { Title } from '../src/components/UI';
import { Container } from '../src/core/layouts/container';

const NotFound = () => {
  return (
    <ContainerWrapper>
      <div>
        <Title>Увы, такой страницы не существует</Title>
        <ImageWrapper>
          <Image src='/images/pages/404.svg' width={300} height={300} layout='responsive' />
        </ImageWrapper>
      </div>
    </ContainerWrapper>
  );
};

export default NotFound;

const ContainerWrapper = styled(Container)`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 0;

  @media (min-width: 992px) {
    margin: -100px auto 0;
  }
`;
