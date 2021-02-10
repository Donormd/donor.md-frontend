import { Divider as AntDivider } from 'antd';
import styled from 'styled-components';

export const Divider = styled(AntDivider)`
  border-top: 1px solid ${(props) => props.theme.redDiluted};
`;
