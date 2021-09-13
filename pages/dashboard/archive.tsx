import { Table as AntTable } from 'antd';
import styled, { css } from 'styled-components';

import { Alert } from '../../src/components/alert';
import { DashboardButtonsLinks } from '../../src/components/dashboard-buttons-links';
import { Pagination } from '../../src/components/pagination';
import { Paragraph, TitleWithArrow } from '../../src/components/UI';
import { ColorsType } from '../../src/components/UI/theme';
import { formatDate } from '../../src/core/helpers/converters';
import { prepareError } from '../../src/core/helpers/prepare-data';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getDonation } from '../../src/queries/donations';
import { useTypedQuery } from '../../src/queries/utils';

type StatusType = 'success' | 'pending' | 'reject';

type valueType = { text: string; color: keyof ColorsType };

const statusMapper: Record<StatusType, valueType> = {
  success: { text: 'Проверено', color: 'green' },
  pending: { text: 'На проверке.. ', color: 'textMuted' },
  reject: { text: 'Отклонено', color: 'red' },
};

const columns = [
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
    render: (date: Date) => (
      <div>
        <Paragraph as='span' margin='0 0 0 0'>
          {formatDate(date)}
        </Paragraph>
      </div>
    ),
  },
  {
    title: 'Центр Крови',
    dataIndex: 'transfusionCenterId',
    key: 'transfusionCenterId',
    render: (address: string) => <Paragraph margin='0 0 0 0'>{address}</Paragraph>,
  },
  { title: 'Номер донации', dataIndex: 'donationNumber', key: 'donationNumber' },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (status: StatusType) => {
      const currentStatus = statusMapper[status];

      return (
        <div>
          <Paragraph as='span' margin='0 15px 0 0' color={currentStatus.color}>
            {currentStatus?.text}
          </Paragraph>
        </div>
      );
    },
  },
  {
    title: 'Справка',
    dataIndex: 'referenceImg',
    key: 'referenceImg',
    render: (href: string) => (
      <StyledLink href={href} download>
        Скачать
      </StyledLink>
    ),
  },
];

const DonationsArchive = () => {
  const { data, isLoading, isError, error } = useTypedQuery('donations', getDonation);

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      {isError && <Alert message={prepareError(error)} />}
      <Table columns={columns} dataSource={data} pagination={false} loading={isLoading} />
      <Pagination
        margin='50px 0 0 0'
        onChange={(...args) => {
          // eslint-disable-next-line no-console
          console.log(args);
        }}
      />
    </DashboardGrid>
  );
};

export default DonationsArchive;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const StyledLink = styled.a(
  ({ theme }) => css`
    text-decoration: underline;
    color: ${theme.colors.textDark};
  `,
);

const Table = styled(AntTable)<any>(
  ({ theme }) => css`
    && .ant-table,
    && .ant-table-thead > tr > th {
      background: transparent;
      text-align: center;
    }

    && .ant-table-thead > tr > th {
      background: ${theme.colors.white};
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
