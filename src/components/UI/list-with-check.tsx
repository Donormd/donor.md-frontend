import styled, { css } from 'styled-components';

type ListWithCheckType = { list: string[]; marginBottom?: string };

export const ListWithCheck = ({ list, marginBottom }: ListWithCheckType) => (
  <ListWithCheckWrapper>
    {list.map((item) => (
      <ListItem key={item} marginBottom={marginBottom}>
        {item}
      </ListItem>
    ))}
  </ListWithCheckWrapper>
);

const ListWithCheckWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ListItem = styled.li<{ marginBottom?: string }>(
  () => css`
    margin-bottom: 0.5rem;

    &:before {
      content: '✔';
      display: inline-block;
      margin-right: 10px;
    }
  `,
);
