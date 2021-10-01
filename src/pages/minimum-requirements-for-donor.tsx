import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { Accordion } from '@UI/accordion';
import { ButtonGroup } from '@UI/button-group';
import { Paragraph, Title } from '@UI/typography';

const buttons = [
  { _id: '1', text: 'Временные противопоказания' },
  { _id: '2', text: 'Абсолютные  противопоказания' },
];

const MinimumRequirementsForDonor = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title margin='0 0 40px 0' bold>
          Минимальные требования к донору
        </Title>
        <ol>
          <li>
            Возраст <b>от 18 до 60 лет</b>
          </li>
          <li>
            Вес <b>более 55 кг</b>
          </li>
          <Paragraph>
            Люди с массой тела меньше 55 кг допускаются к донорству в индивидуальном порядке по усмотрению
            врача-трансфузиолога.
          </Paragraph>
          <li>Наличие гражданства ПМР или временной прописки</li>
          <li>Не иметь абсолютных противопоказаний</li>
          <li>Не иметь временных ограничений на момент сдачи крови</li>
        </ol>
        <Title as='h3' margin='35px 0 20px 0' bold>
          Противопоказания
        </Title>
        <Paragraph>
          Перед процедурой сдачи крови каждый донор проходит консультацию с врачом-трансфузиологом. Не
          стесняйтесь задавать вопросы по поводу ваших заболеваний.
        </Paragraph>
        <Paragraph>
          Мы подготовили для вас противопоказания к донорству: абсолютных, то есть независящих от давности
          заболевания и результатов лечения, и временных — действующих лишь определенный срок.
        </Paragraph>
        <Paragraph margin='15px 0 30px 0'>
          Руководствуйтесь, пожалуйста, этими ограничениями лишь в том случае, когда Вы совершенно уверены в
          наличии у себя соответствующего заболевания или состояния здоровья.
        </Paragraph>
        <div>
          <ButtonGroup buttons={buttons} onClick={() => null} />
          <Accordion ghost defaultActiveKey={1}>
            <Accordion.Panel
              key={1}
              header={
                <Title as='h3' margin='30px 0 0 0 '>
                  Распространенные абсолютные ограничения
                </Title>
              }
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
                <li>Заболевания щитовидной железы ( в случае нарушения функций и обмена веществ)</li>
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

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
