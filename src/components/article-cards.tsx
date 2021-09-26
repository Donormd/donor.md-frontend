import Image from 'next/image';
import styled from 'styled-components';

import { Title } from './UI/typography';

type ArticleCardsType = {
  articles: {
    title: string;
    subTitle: string;
    image: {
      src: string;
      width: number;
      height: number;
    };
  }[];
};

export const ArticleCards = ({ articles }: ArticleCardsType) => {
  return (
    <ArticleCardWrapper>
      {articles.map(({ image, title, subTitle }) => (
        <article key={title}>
          <ImageWrapper>
            <Image src={image.src} width={image.width} height={image.height} />
          </ImageWrapper>
          <Title align='center' as='h3' size='1.125rem' bold>
            {title}
          </Title>
          <Title align='center' as='h3' size='1.125rem'>
            {subTitle}
          </Title>
        </article>
      ))}
    </ArticleCardWrapper>
  );
};

const ArticleCardWrapper = styled.div`
  display: grid;
  padding-bottom: 50px;

  @media (min-width: 992px) {
    & {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 25px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.colors.redDiluted}`};
`;
