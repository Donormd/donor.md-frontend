/* eslint no-console:0 */
import React from 'react';
import { Table as AntTable } from 'antd';
import styled from 'styled-components';
import ButtonGroup, { ButtonsProps, OnClickProps } from '../components/button-group';
import { Title, StyledLink } from '../components/UI';
import { Container } from '../layouts/container';
import HeaderContentFooter from '../layouts/header-content-footer';

const mock = [
  {
    key: 1,
    fullname: 'Борисов Донат',
    city: 'Тирасполь',
    numberOfDonations: 9,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 2,
    fullname: 'Кузьмин Аввакум',
    city: 'Тирасполь',
    numberOfDonations: 23,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 3,
    fullname: 'Гущин Макар',
    city: 'Тирасполь',
    numberOfDonations: 10,
    registrationDate: new Date().toISOString().split('T')[0],
    status: '-',
  },
  {
    key: 4,
    fullname: 'Мартынов Панкрат',
    city: 'Тирасполь',
    numberOfDonations: 15,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 5,
    fullname: 'Тетерин Гурий',
    city: 'Тирасполь',
    numberOfDonations: 12,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 6,
    fullname: 'Борисов Донат',
    city: 'Тирасполь',
    numberOfDonations: 9,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 7,
    fullname: 'Кузьмин Аввакум',
    city: 'Тирасполь',
    numberOfDonations: 23,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 8,
    fullname: 'Гущин Макар',
    city: 'Тирасполь',
    numberOfDonations: 10,
    registrationDate: new Date().toISOString().split('T')[0],
    status: '-',
  },
  {
    key: 9,
    fullname: 'Мартынов Панкрат',
    city: 'Тирасполь',
    numberOfDonations: 15,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
  {
    key: 10,
    fullname: 'Тетерин Гурий',
    city: 'Тирасполь',
    numberOfDonations: 12,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Почетный донор',
  },
];

const Table = styled(AntTable)`
  & .ant-table {
    overflow-x: scroll;
  }

  & .ant-table,
  & .ant-table-thead > tr > th {
    background: transparent;
  }

  & .ant-table-thead > tr > th {
    color: var(--red);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  & .ant-table-tbody > tr > td {
    border: none;
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td {
    background: #fafafa8a;
  }

  @media (min-width: 992px) {
    & .ant-table {
      overflow-x: hidden;
    }
  }
`;

const Count = styled.div`
  margin: 0;
  color: var(--red);
  background: var(--red-diluted);
  line-height: 50px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.4rem;
  text-align: center;
  width: 50px;
  height: 50px;
  vertical-align: middle;
`;

const Link = styled(StyledLink)`
  color: black;
  text-decoration: underline;
`;

const columns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key',
    render: (item: number) => <Count>{item}</Count>,
  },
  {
    title: 'Имя',
    dataIndex: 'fullname',
    key: 'fullname',
    render(item: string) {
      const [name, lastname] = item.split(' ');
      return (
        <Link>
          {name}
          <br />
          {lastname}
        </Link>
      );
    },
  },
  {
    title: 'Город',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Кол-во донаций',
    dataIndex: 'numberOfDonations',
    key: 'numberOfDonations',
    render: (item: string) => (
      <Title as='h3' bold>
        {item}
      </Title>
    ),
  },
  {
    title: 'На портале с',
    dataIndex: 'registrationDate',
    key: 'registrationDate',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
];

const StoriesHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  align-items: start;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const buttons: Array<ButtonsProps> = [
  { key: 1, text: 'Мужчины' },
  { key: 2, text: 'Женщины' },
];

const handleClick: OnClickProps = (val) => console.log(val);

const TopDonorsPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/welcome.png'>
    <Container>
      <StoriesHead>
        <Title margin='15px' bold>
          Лучшие донары нашего сервиса
        </Title>
        <ButtonGroup buttons={buttons} handleClick={handleClick} />
      </StoriesHead>
      <Table columns={columns} dataSource={mock} pagination={false} />
    </Container>
  </HeaderContentFooter>
);

export default TopDonorsPage;
