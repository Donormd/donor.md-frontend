import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-color: ${(props) => props.theme.redDiluted};
  border-radius: ${(props) => props.theme.radius};

  &:hover {
    border-color: ${(props) => props.theme.red};
  }

  &:focus {
    outline: 0;
    border-color: ${(props) => props.theme.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }
`;
