import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { getOptions } from '../../../queries/common';
import { useTypedQuery } from '../../../queries/utils';
import { activeIdAtom } from '../../../store/atoms/active-id-atom';
import { ButtonGroup } from '../../UI/button-group';
import { Title } from '../../UI/typography';

export const StoriesHead = () => {
  const setActiveId = useSetRecoilState(activeIdAtom('top-donors'));
  const { data } = useTypedQuery('sex', () => getOptions('sex'));

  const handleClick = useCallback(
    (id: string) => {
      setActiveId(id);
    },
    [setActiveId],
  );

  if (!data) return null;

  return (
    <StoriesHeadWrapper>
      <Title margin='0 0 15px 0' bold>
        Лучшие доноры нашего сервиса
      </Title>
      <ButtonGroup buttons={data} onClick={handleClick} />
    </StoriesHeadWrapper>
  );
};

const StoriesHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  align-items: start;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
