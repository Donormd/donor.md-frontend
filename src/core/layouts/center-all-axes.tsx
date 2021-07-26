import { FC } from 'react';
import styled from 'styled-components';

const CenterAllAxes: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default CenterAllAxes;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
