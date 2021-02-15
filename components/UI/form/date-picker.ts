import styled from 'styled-components';
import { DatePicker as AntDatePicker } from 'antd';

export const DatePicker = styled(AntDatePicker)`
  width: 100%;
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};
  display: block;

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus,
  &.ant-picker-focused {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
