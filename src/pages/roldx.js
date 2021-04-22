import React from 'react';
import { graphql } from 'gatsby';
import RoldxHome from '../roldx/components/RoldxHome';
import Layout from '../components/layout/layout';

export const ROLDX_PAGE_QUERY = graphql`
  query roldxPageQuery {
    contentfulRoldxLanding {
      title
      description {
        description
      }
      productImage {
        file {
          url
        }
      }
      belowImageText {
        belowImageText
      }
    }
    contentfulFooter {
      logo {
        file {
          url
        }
      }
    }
  }
`;

const RoldxPage = ({ data }) => {
  const {
    contentfulRoldxLanding,
    contentfulFooter: { logo },
  } = data;

  return (
    <Layout>
      <RoldxHome roldxData={contentfulRoldxLanding} footerLogo={logo} />
    </Layout>
  );
};

export default RoldxPage;
