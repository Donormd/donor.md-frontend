import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { StoriesHead } from '../sections/top-donors/stories-head';
import { TableDonors } from '../sections/top-donors/table-donors';

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
