import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
      <div style={{ color: `purple` }}>
        {allContentfulHomepage35.nodes.map(item => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.bodyTextRegular.bodyTextRegular}</p>
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