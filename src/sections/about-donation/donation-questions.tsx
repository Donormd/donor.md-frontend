import styled from 'styled-components';

import { Accordion } from '../../components/UI/accordion';
import { Title } from '../../components/UI/typography';

export const DonationQuestions = () => (
  <section>
    <Title as='h2' margin='50px 0 30px 0' bold>
      Вопросы по донорству
    </Title>
    <Article background='/images/pages/about-donation/donation-questions.svg'>
      <StyledAccordion bordered defaultActiveKey={['1']} ghost>
        <Accordion.Panel
          key='1'
          header={
            <Title as='h4' bold>
              Если у меня плохое зрение, могу ли я быть донором крови?
            </Title>
          }
        >
          Если у Вас хотя бы у одного глаза потеря зрения больше, чем -4 - Вы не сможете быть донором
        </Accordion.Panel>
        <Accordion.Panel
          key='2'
          header={
            <Title as='h4' bold>
              Я детстве болела желтухой (гепатит А), могу ли я сейчас быть донором?
            </Title>
          }
        >
          После лечения этого заболевания кровь можно сдавать через 24 месяца. Гепатит А не является
          абсолютным ограничением к донорству.
        </Accordion.Panel>
        <Accordion.Panel
          key='3'
          header={
            <Title as='h4' bold>
              Я боюсь сдавать кровь из-за страха, что при донации мне занесут гепатит, это возможно?
            </Title>
          }
        >
          Такое не реально, используется исключительно одноразовый и стерильный инструмент (иголки, трубки,
          пакеты).
        </Accordion.Panel>
        <Accordion.Panel
          key='4'
          header={
            <Title as='h4' bold>
              Можно ли сдавать кровь после холецистэктомии?
            </Title>
          }
        >
          К сожалению донором, после удаления любого органа быть нельзя.
        </Accordion.Panel>
        <Accordion.Panel
          key='5'
          header={
            <Title as='h4' bold>
              Какое мясо можно есть перед донацией?
            </Title>
          }
        >
          За 2 дня до донации можно есть нежирные сорта мяса, в основном это грудинная часть птицы или вырезка
          других видов мяса в отварном виде. Избегайте в эти дни жирное мясо (бедро птицы, мясо с жиром или
          жировыми прослойками, сало) приготовленное в любом виде.
        </Accordion.Panel>
      </StyledAccordion>
    </Article>
  </section>
);

const Article = styled.div<{ background: string }>`
  width: 100%;
  background: url(${({ background }) => background}) no-repeat top right;
  background-size: 300px;
`;

const StyledAccordion = styled(Accordion)`
  .ant-collapse-header {
    display: flex;
  }
  && {
    .ant-collapse-content-box {
      padding-left: 50px;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.lg}) {
    max-width: 60%;
  }
`;
