import { Table as AntTable } from 'antd';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import { StyledLink } from '../../components/UI/links';
import { Title } from '../../components/UI/typography';
import { getTopDonors } from '../../queries/getTopDonors';
import { useTypedQuery } from '../../queries/utils';
import { activeIdAtom } from '../../store/atoms/active-id-atom';

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

export const TableDonors = () => {
  const sexId = useRecoilValue(activeIdAtom('top-donors'));

  const { data, isLoading } = useTypedQuery('stories', () => getTopDonors(sexId), {});

  return <Table columns={columns} dataSource={data} loading={isLoading} pagination={false} />;
};

const Table = styled(AntTable)(
  ({ theme }) => css`
    && .ant-table,
    && .ant-table-thead > tr > th {
      background: transparent;
      text-align: center;
    }

    && .ant-table-thead > tr > th {
      color: 1px solid ${theme.colors.redDiluted};
      border-top: 1px solid ${theme.colors.redDiluted};
      border-bottom: 1px solid ${theme.colors.redDiluted};
    }

    && .ant-table-thead > tr > th:first-child {
      border-left: 1px solid ${theme.colors.redDiluted};
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    && .ant-table-thead > tr > th:last-child {
      border-right: 1px solid ${theme.colors.redDiluted};
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    && .ant-table-tbody > tr > td {
      text-align: center;
      border-bottom: 1px solid ${theme.colors.redDiluted};
    }

    && .ant-table-tbody > tr.ant-table-row:hover > td {
      background: #fafafa8a;
    }

    @media (min-width: 992px) {
      & .ant-table {
        overflow-x: hidden;
      }
    }
  `,
);

const Count = styled.div(
  ({ theme }) => css`
    width: 50px;
    height: 50px;
    margin: 0;
    line-height: 50px;
    font-weight: bold;
    font-size: 1.4rem;
    text-align: center;
    vertical-align: middle;
    color: ${theme.colors.red};
    background: ${theme.colors.redDiluted};
    border-radius: 5px;
  `,
);

const Link = styled(StyledLink)`
  color: black;
  text-decoration: underline;
`;
