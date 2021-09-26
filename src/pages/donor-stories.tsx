/* eslint no-console:0 */
import { DonorStory } from '../components/donor-story';
import { Pagination } from '../components/pagination';
import { Loading } from '../components/UI/loading';
import { Title } from '../components/UI/typography';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { getStories } from '../queries/stories';
import { useTypedQuery } from '../queries/utils';

const DonorStoriesPage = () => {
  const { data, isLoading } = useTypedQuery('stories', getStories);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <Title margin='0 0 15px 0' bold>
          Истории доноров
        </Title>
        {isLoading && <Loading />}
        {data?.map((props) => (
          <DonorStory {...props} />
        ))}
      </Container>
      <Pagination onChange={(page: number) => console.log(page)} />
    </HeaderContentFooter>
  );
};

export default DonorStoriesPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
