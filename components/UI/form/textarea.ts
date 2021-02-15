import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const TextArea = styled(AntInput.TextArea)`
  padding: 10px;
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus {
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
