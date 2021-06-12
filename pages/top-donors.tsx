/* eslint no-console:0 */
import { Table as AntTable } from 'antd';
import styled from 'styled-components';

import { StyledLink, Title } from '../components/UI';
import { ButtonGroup } from '../components/UI/button-group';
import { IOptions } from '../core/interfaces/IIterableStruct';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { useAppSelector } from '../redux/store';

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

const buttons: IOptions[] = [
  { _id: '1', text: 'Мужчины' },
  { _id: '2', text: 'Женщины' },
];

const handleClick: (val: string) => void = (val) => console.log(val);

const TopDonorsPage = () => {
  const { data } = useAppSelector((state) => state.stories);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <StoriesHead>
          <Title margin='15px' bold>
            Лучшие доноры нашего сервиса
          </Title>
          <ButtonGroup buttons={buttons} handleClick={handleClick} />
        </StoriesHead>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Container>
    </HeaderContentFooter>
  );
};

export default TopDonorsPage;

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
