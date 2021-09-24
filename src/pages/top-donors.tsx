import { StoriesHead } from '../components/sections/top-donors/stories-head';
import { TableDonors } from '../components/sections/top-donors/table-donors';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';

const TopDonorsPage = () => {
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <StoriesHead />
        <TableDonors />
      </Container>
    </HeaderContentFooter>
  );
};

export default TopDonorsPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
