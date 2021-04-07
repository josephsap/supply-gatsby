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
import Footer from '../components/footer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export const PAGE_DATA_QUERY = graphql`
  query pageDataQuery {
    contentfulHeroSection {
      introCopy {
        raw
      }
      headline
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
        link
        linkText
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
        description
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
    contentfulFooter {
      logo {
        file {
          url
        }
      }
      logoCaption
      footerLinks {
        id
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
    contentfulMeetTheTeam,
    contentfulFooter,
  } = data;

  const pageTitles = [
    { navTitle: contentfulHeroSection.navTitle },
    { navTitle: contentfulWhoWeWorkWithSection.whoWeWorkWithTitle },
    { navTitle: contentfulServicesSection.title },
    { navTitle: contentfulWhyUsSection.title },
    { navTitle: 'Giving Back' },
    { navTitle: contentfulNetworkSection.title },
    { navTitle: contentfulMeetTheTeam.title },
    { navTitle: contentfulTools.title },
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Layout>
      {matches && <Navigation pageTitles={pageTitles} />}
      <HeroSection heroSection={contentfulHeroSection} />
      <WhoWePartnerWith whoWeWorkWithSection={contentfulWhoWeWorkWithSection} />
      <Services servicesSection={contentfulServicesSection} />
      <WhyUsSection whyUsSection={contentfulWhyUsSection} />
      <GivingBackSection givingBackSection={contentfulGivingBackSection} />
      <NetworkSection networkSection={contentfulNetworkSection} />
      <MeetTheTeamSection meetTheTeamSection={contentfulMeetTheTeam} />
      <ToolsSection toolsSection={contentfulTools} />
      <Footer footer={contentfulFooter} />
      <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="resumeLink" />
        <textarea name="message"></textarea>
        <label>
          <input type="radio" name="want"></input>
        </label>
        <label>
          <input type="checkbox" name="skills"></input>
        </label>
        <label>
          <input type="checkbox" name="locations"></input>
        </label>
      </form>
    </Layout>
  );
};

export default Home;
