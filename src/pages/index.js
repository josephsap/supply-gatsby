import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography, Button } from '@material-ui/core';
import Container from '../components/container';


const Home = () => {
  const { allContentfulHomepage35 } = useStaticQuery(
    graphql`
    query {
      allContentfulHomepage35 {
        nodes {
          image {
            id
            title
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
          title
          id
          bodyTextRegular {
            id
            bodyTextRegular
          }
        }
      }
    }
  `
  );

  return (
    <Container>
      <Button variant="contained" color="primary">CLICK TEST</Button>
      <div>
        {allContentfulHomepage35.nodes.map(item => {
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
        })}
      </div>
    </Container>
  )
}

export default Home;