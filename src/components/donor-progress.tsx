import { Progress } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};
  background: white;
`;

const DonorProgress: FC = () => {
  return (
    <Layout>
      <Progress percent={75} showInfo={false} status='exception' />
      <Progress percent={55} showInfo={false} status='exception' />
    </Layout>
  );
};

export default DonorProgress;
