import React from "react"
import { graphql } from "gatsby"
import { Container, Grid } from '@material-ui/core';
import Navigation from '../components/navigation';
import HeroSection from '../components/heroSection';
import WhoWeWorkWith from "../components/whoWeWorkWith";
import Services from '../components/services';

export const PAGE_DATA_QUERY = graphql`
  query pageDataQuery {
    contentfulHeroSection {
      heroCopyRichText {
        raw
      }
      introCopy {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulWhoWeWorkWithSection {
      whoWeWorkWithTitle
      talentItem {
        jobCategory
        jobTitle
      }
      clientItem {
        specialty
        specialtyItem
      }
    }
    contentfulServicesSection {
      title
      description {
        description
      }
      serviceItem {
        title
        description {
          description
        }
      }
    }
    contentfulWhyUsSection {
      title
      description {
        description
      }
    }
    contentfulGivingBackSection {
      rightSideTitle
      rightSideCopy {
        rightSideCopy
      }
      leftSideCopy {
        leftSideCopy
      }
      leftSideTitle
      orgsModalCopy {
        orgsModalCopy
      }
    }
    contentfulNetworkSection {
      title
      description {
        description
      }
      networkAttributeItem {
        title
        description {
          description
        }
      }
    }
    contentfulTools {
      title
      description {
        description
      }
      toolLinkItem {
        title
        description {
          description
        }
        link
        linkText
      }
    }
  }
`;

const Home = ({ data }) => {
  const {
    contentfulHeroSection,
    contentfulGivingBackSection,
    contentfulNetworkSection,
    contentfulServicesSection,
    contentfulTools,
    contentfulWhoWeWorkWithSection,
    contentfulWhyUsSection,
  } = data;
  console.log(data)
  return (
      <>
      <Navigation />
      <Container maxWidth="lg">
        <HeroSection contentfulHeroSection={contentfulHeroSection} />
        <WhoWeWorkWith contentfulWhoWeWorkWithSection={contentfulWhoWeWorkWithSection} />
        <Services contentfulServicesSection={contentfulServicesSection} />
        
        <Grid container id="section4" style={{ border: '1px solid', height: '700px', }}>four</Grid>
        <Grid container id="section5" style={{ border: '1px solid', height: '700px', }}>five</Grid>
        <Grid container id="section6" style={{ border: '1px solid', height: '700px', }}>six</Grid>
        <Grid container id="section7" style={{ border: '1px solid', height: '700px', }}>seven</Grid>
      </Container>
    </>
  )
};

export default Home;