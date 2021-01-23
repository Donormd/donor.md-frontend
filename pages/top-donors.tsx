/* eslint no-console:0 */
import React from 'react';
import { Table as AntTable } from 'antd';
import styled from 'styled-components';
import ButtonGroup, { ButtonsProps, OnClickProps } from '../components/button-group';
import { Title, StyledLink } from '../components/UI';
import { Container } from '../layouts/container';
import HeaderContentFooter from '../layouts/header-content-footer';

const Table = styled(AntTable)`
  & .ant-table,
  & .ant-table-thead > tr > th {
    background: transparent;
  }

  & .ant-table-thead > tr > th {
    color: ${({ theme }) => theme.red};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  & .ant-table-tbody > tr > td {
    border: none;
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td {
    background: #fafafa8a;
  }
`;

const Count = styled.div`
  margin: 0;
  color: ${({ theme }) => theme.red};
  background: ${({ theme }) => theme.redDiluted};
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
    status: '-',
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
    status: '-',
  },
  {
    key: 5,
    fullname: 'Тетерин Гурий',
    city: 'Тирасполь',
    numberOfDonations: 12,
    registrationDate: new Date().toISOString().split('T')[0],
    status: '-',
  },
];

const StoriesHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: start;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const buttons: Array<ButtonsProps> = [
  { key: 1, text: 'Мужчины' },
  { key: 2, text: 'Женщины' },
];

const handleClick: OnClickProps = (val) => console.log(val);

const TopDonorsPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/articles/welcome.png'>
    <Container>
      <StoriesHead>
        <StyledTitle size='2.5rem' bold>
          Лучшие донары нашего сервиса
        </StyledTitle>
        <ButtonGroup buttons={buttons} handleClick={handleClick} />
      </StoriesHead>
      <Table columns={columns} dataSource={mock} pagination={false} />
    </Container>
  </HeaderContentFooter>
);

export default TopDonorsPage;
