import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout/layout';
import Navigation from '../components/layout/navigation';
import HeroSection from '../components/heroSection';
import WhoWePartnerWith from "../components/whoWePartnerWith";
import Services from '../components/services';
import WhyUsSection from '../components/whyUs';
import GivingBackSection from '../components/givingBack';
import NetworkSection from '../components/network';
import ToolsSection from '../components/tools';


export const PAGE_DATA_QUERY = graphql`
  query pageDataQuery {
    contentfulHeroSection {
      heroCopyRichText {
        raw
      }
      introCopy {
        raw
      }
      navTitle
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
        id
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
  const pageTitles = [
    { navTitle: contentfulHeroSection.navTitle },
    { navTitle: contentfulWhoWeWorkWithSection.whoWeWorkWithTitle },
    { navTitle: contentfulServicesSection.title },
    { navTitle: contentfulWhyUsSection.title },
    { navTitle: contentfulServicesSection.title },
    { navTitle: contentfulGivingBackSection.title },
    { navTitle: contentfulNetworkSection.title },
    { navTitle: contentfulTools.title },
  ];

  return (
    <Layout>
      <Navigation pageTitles={pageTitles} />
      <HeroSection heroSection={contentfulHeroSection} />
      <WhoWePartnerWith whoWeWorkWithSection={contentfulWhoWeWorkWithSection} />
      <Services servicesSection={contentfulServicesSection} />
      <WhyUsSection whyUsSection={contentfulWhyUsSection} />
      <GivingBackSection givingBackSection={contentfulGivingBackSection} />
      <NetworkSection networkSection={contentfulNetworkSection} />
      <ToolsSection toolsSection={contentfulTools} />
    </Layout>
  )
};

export default Home;