import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography, Button } from '@material-ui/core';
import Container from '../components/container';
import Navigation from '../components/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const PAGE_DATA_QUERY = graphql`
  query pageDataQuery {
    allContentfulHeroSection {
      nodes {
        heroCopyRtTest {
          raw
        }
      }
    }
    contentfulHeroSection {
      heroCopy {
        childMarkdownRemark {
          html
        }
      }
      heroCopyRtTest {
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
  //http://localhost:8000/___graphql
  // console.log(JSON.stringify(data.allContentfulHeroSection, null, 4))
  // console.log('hihihihi', JSON.parse(data.contentfulHeroSection.heroCopyRtTest.raw))
  return (
    <Container>
      <Navigation />
      <div>
        <div id="section1" style={{ border: '1px solid', height: '700px', }}>
          <div className="richTextSection">
            {documentToReactComponents(JSON.parse(data.contentfulHeroSection.heroCopyRtTest.raw))}
          </div>
          <Typography variant="h1" dangerouslySetInnerHTML={{
              __html: data.contentfulHeroSection.heroCopy.childMarkdownRemark.html
            }}
          />
          <Typography variant="body1" dangerouslySetInnerHTML={{
              __html: data.contentfulHeroSection.introCopy.childMarkdownRemark.html
            }}
          />
        </div>
        <div id="section2" style={{ border: '1px solid', height: '700px', }}>two</div>
        <div id="section3" style={{ border: '1px solid', height: '700px', }}>three</div>
        <div id="section4" style={{ border: '1px solid', height: '700px', }}>four</div>
        <div id="section5" style={{ border: '1px solid', height: '700px', }}>five</div>
        <div id="section6" style={{ border: '1px solid', height: '700px', }}>six</div>
        <div id="section7" style={{ border: '1px solid', height: '700px', }}>seven</div>
        {/* {allContentfulHomepage35.nodes.map(item => {
          return (
            <div key={item.id}>
              <Typography variant="h1" gutterBottom>{item.title}</Typography>
              <Typography variant="body1">{item.bodyTextRegular.bodyTextRegular}</Typography>
              <Img 
                alt={item.image.title}
                fluid={item.image.fluid}
                key={item.image.id}
              />
            </div>
          )
        })} */}
      </div>
    </Container>
  )
}

export default Home;