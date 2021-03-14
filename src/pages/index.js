import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Navigation from '../components/layout/navigation';
import HeroSection from '../components/hero';
import WhoWePartnerWith from '../components/partner-with';
import Services from '../components/services';
import WhyUsSection from '../components/why-us';
import GivingBackSection from '../components/giving-back';
import NetworkSection from '../components/network';
import ToolsSection from '../components/tools';
import MeetTheTeamSection from '../components/team';

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
      mainImage {
        file {
          url
        }
      }
    }
    contentfulGivingBackSection {
      rightSideTitle
      leftSideTitle
      leftSideCopy {
        leftSideCopy
      }
      rightSideCopy {
        rightSideCopy
      }
      orgsModalLinkText
      orgsModalCopy {
        childMarkdownRemark {
          html
        }
      }
      badges {
        id
        file {
          url
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
        id
        title
        description {
          description
        }
        backgroundRectangle {
          file {
            url
          }
        }
      }
    }
    contentfulMeetTheTeam {
      title
      wereHiringText
      teamMember {
        id
        name
        bio {
          bio
        }
        linkedinLink
        linkedinIcon {
          file {
            url
          }
        }
        profileImage {
          file {
            url
          }
        }
      }
      wereHiringImage {
        file {
          url
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
        icon {
          file {
            url
          }
        }
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
    contentfulMeetTheTeam,
  } = data;
  console.log(data);
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
      <MeetTheTeamSection meetTheTeamSection={contentfulMeetTheTeam} />
      <ToolsSection toolsSection={contentfulTools} />
    </Layout>
  );
};

export default Home;
