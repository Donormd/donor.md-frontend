import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { Paragraph, Title } from './UI/typography';

export interface IArticle {
  image: string;
  title: string;
  paragraph?: string;
  link: string;
}

export const ArticleCardsPreview = ({ articles }: { articles: IArticle[] }) => {
  return (
    <ArticleCardsPreviewWrapper>
      {articles.map(({ image, title, link, paragraph }) => (
        <Link key={title} href={link} passHref>
          <Article>
            <ImageWrapper>
              <Image src={image} width={300} height={300} layout='responsive' />
            </ImageWrapper>
            <ArticleBody>
              <Title as='h3' margin='0 0 15px 0' color='red' bold>
                {title}
              </Title>
              {paragraph && <Paragraph>{paragraph}</Paragraph>}
            </ArticleBody>
          </Article>
        </Link>
      ))}
    </ArticleCardsPreviewWrapper>
  );
};

const ArticleCardsPreviewWrapper = styled.div`
  display: grid;
  padding-bottom: 50px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
`;

const ImageWrapper = styled.div(
  ({ theme }) => css`
    max-width: 320px;
    margin: 0 auto;
    background: ${theme.colors.white};
    border: ${`1px solid ${theme.colors.redDiluted}`};
    border-radius: ${theme.radius};
  `,
);

const Article = styled.article`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-size: contain;
    background: url('/images/pages/home/about-donations/hover.svg') no-repeat bottom center;
  }
`;

const ArticleBody = styled.div`
  text-align: center;
  padding: 20px 0;

  @media (min-width: 992px) {
    padding: 20px 30px;
    text-align: left;
  }
`;
