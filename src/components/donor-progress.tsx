import { Progress } from 'antd';
import styled from 'styled-components';

export const DonorProgress = () => {
  return (
    <Layout>
      <Progress percent={75} showInfo={false} status='exception' />
      <Progress percent={55} showInfo={false} status='exception' />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => `1px solid ${theme.red}`};
  background: white;
`;
