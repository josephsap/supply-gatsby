import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography, Button } from '@material-ui/core';
import Container from '../components/container';
import Navigation from '../components/navigation';

const Home = () => {
  // const { allContentfulHomepage35 } = useStaticQuery(
  //   graphql`
  //   query {
  //     allContentfulHomepage35 {
  //       nodes {
  //         image {
  //           id
  //           title
  //           fluid(maxWidth: 1200) {
  //             ...GatsbyContentfulFluid
  //           }
  //         }
  //         title
  //         id
  //         bodyTextRegular {
  //           id
  //           bodyTextRegular
  //         }
  //       }
  //     }
  //   }
  // `
  // );

  const sectionRef = useRef();

  return (
    <Container>
      <Navigation />
      <Button variant="contained" color="primary">CLICK TEST</Button>
      <div>
        <div id="section1" style={{ border: '1px solid', height: '700px', }}>one</div>
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