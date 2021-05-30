/* eslint-disable no-console */
import { FC } from 'react';
import styled from 'styled-components';
import { HeaderContentFooter } from '../../layouts/header-content-footer';
import { Container } from '../../layouts/container';
import { Paragraph as PH, Title as TL, Accordion } from '../../components/UI';
import { ButtonGroup } from '../../components/UI/button-group';

const buttons = [
  { _id: '1', text: 'Временные противопоказания' },
  { _id: '2', text: 'Абсолютные  противопоказания' },
];

const MinimumRequirementsForDonor: FC = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title bold>Минимальные требования к донору</Title>
        <ol>
          <li>
            Возраст <b>от 18 до 60 лет</b>
          </li>
          <li>
            Вес <b>более 55 кг</b>
          </li>
          <Paragraph>
            Люди с массой тела меньше 55 кг допускаются к донорству в индивидуальном порядке по
            усмотрению врача-трансфузиолога.
          </Paragraph>
          <li>Наличие гражданства ПМР или временной прописки</li>
          <li>Не иметь абсолютных противопоказаний</li>
          <li>Не иметь временных ограничений на момент сдачи крови</li>
        </ol>
        <Title as='h3' bold>
          Противопоказания
        </Title>
        <Paragraph>
          Перед процедурой сдачи крови каждый донор проходит консультацию с врачом-трансфузиологом.
          Не стесняйтесь задавать вопросы по поводу ваших заболеваний.
        </Paragraph>
        <Paragraph>
          Мы подготовили для вас противопоказания к донорству: абсолютных, то есть независящих от
          давности заболевания и результатов лечения, и временных — действующих лишь определенный
          срок.
        </Paragraph>
        <Paragraph>
          Руководствуйтесь, пожалуйста, этими ограничениями лишь в том случае, когда Вы совершенно
          уверены в наличии у себя соответствующего заболевания или состояния здоровья.
        </Paragraph>
        <div>
          <ButtonGroup buttons={buttons} handleClick={(args) => console.log('---> ', args)} />
          <Accordion ghost defaultActiveKey={1}>
            <Accordion.Panel
              key={1}
              header={<Title as='h3'>Распространенные абсолютные ограничения</Title>}
            >
              <ol>
                <li>ВИЧ- инфекция</li>
                <li>Гепатит В, С</li>
                <li>Сифилис</li>
                <li>Злокачественные образования (онкология)</li>
                <li>Полное отсутствие слуха и речи</li>
                <li>Бронхиальная астма</li>
                <li>Генерализованный псориаз</li>
                <li>Заболевание крови</li>
                <li>Сахарные диабет</li>
                <li>Цирроз печени</li>
                <li>Нарушение зрения (миопия более 4</li>
                <li>
                  Заболевания щитовидной железы ( в случае нарушения функций и обмена веществ)
                </li>
              </ol>
            </Accordion.Panel>
            <Accordion.Panel key={2} header={<Title as='h3'>Инфекционные заболевания</Title>}>
              lorem
            </Accordion.Panel>
            <Accordion.Panel key={2} header={<Title as='h3'>Паразитарные заболевания</Title>}>
              lorem
            </Accordion.Panel>
          </Accordion>
        </div>
      </Container>
    </HeaderContentFooter>
  );
};

export default MinimumRequirementsForDonor;

const Paragraph = styled(PH)`
  margin-bottom: 15px;
`;

const Title = styled(TL)`
  margin-bottom: 15px;
  &:first-child {
    margin-bottom: 40px;
  }
`;
