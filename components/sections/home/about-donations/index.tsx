import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import { IMockItem } from '../../../../redux/redusers/about-donations';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';

const ArticleList = styled.div`
  padding-top: 30px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
  background: white;
  border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  border-radius: ${({ theme }) => theme.radius};
`;

const ArticleBody = styled.div`
  text-align: center;
  padding: 20px 0;
  transition: all 0.8s ease;

  &:hover {
    cursor: pointer;
    width: 100%;
    height: auto;
    background: url('/images/pages/home/about-donations/hover-md.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
  }

  @media (min-width: 992px) {
    &:hover {
      background: url('/images/pages/home/about-donations/hover.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top center;
    }
  }

  @media (min-width: 992px) {
    padding: 20px 30px;
    text-align: left;
  }
`;

export interface IProps {
  title: string;
  data: IMockItem[];
}

const AboutDonation: FC<IProps> = ({ title, data }) => {
  return (
    <Section id='about-donation'>
      <Title as='h2' bold>
        {title}
      </Title>
      <ArticleList>
        {data.map(({ image, text, link }) => (
          <article key={image.src}>
            <ImageWrapper>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                layout='responsive'
              />
            </ImageWrapper>
            <Link href={link}>
              <ArticleBody>
                <Title as='h3' margin='15px' color='red' bold>
                  {text.head}
                </Title>
                <Paragraph>{text.paragraph}</Paragraph>
              </ArticleBody>
            </Link>
          </article>
        ))}
      </ArticleList>
    </Section>
  );
};

export default AboutDonation;
