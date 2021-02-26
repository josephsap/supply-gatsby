import React from "react"
import { graphql } from "gatsby"
import { Grid } from '@material-ui/core';
import Navigation from '../components/navigation';
import HeroSection from '../components/heroSection';
import WhoWePartnerWith from "../components/whoWePartnerWith";
import Services from '../components/services';
import WhyUsSection from '../components/whyUs';
import GivingBackSection from '../components/givingBack';
import NetworkSection from '../components/network';


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
      talentclientToggle
      talentItem {
        id
        jobCategory
        jobTitle
      }
      clientItem {
        id
        specialty
        specialtyItem
      }
      questionTooltipCopy {
        questionTooltipCopy
      }
    }
    contentfulServicesSection {
      title
      serviceItem {
        title
        id
        iconImage {
          file {
            url
          }
        }
        description {
          description
        }
      }
      description {
        description
      }
    }
    contentfulWhyUsSection {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      descriptionTwo {
        descriptionTwo
      }
    }
    contentfulGivingBackSection {
      rightSideTitle
      leftSideTitle
      leftSideCopy {
        childMarkdownRemark {
          html
        }
      }
      rightSideCopy {
        childMarkdownRemark {
          html
        }
      }
      orgsModalLinkText
      orgsModalCopy {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulNetworkSection {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      networkAttributeItem {
        title
        childContentfulNetworkAttributeItemDescriptionTextNode {
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
      <HeroSection heroSection={contentfulHeroSection} />
      <WhoWePartnerWith whoWeWorkWithSection={contentfulWhoWeWorkWithSection} />
      <Services servicesSection={contentfulServicesSection} />
      <WhyUsSection whyUsSection={contentfulWhyUsSection} />
      <GivingBackSection givingBackSection={contentfulGivingBackSection} />
      <NetworkSection networkSection={contentfulNetworkSection} />
      <Grid container id="section7" style={{ border: '1px solid', height: '700px', }}>seven</Grid>
    </>
  )
};

export default Home;