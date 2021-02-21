import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography, Button } from '@material-ui/core';
import Container from '../components/container';
import Navigation from '../components/navigation';
import styles from '../components/index.styles';


// query getHeroAndClientsSections {
//   heroSection(id:"VTQEQyEfAaIW0JyxtwIZO") {
//     heroTitle
//     introCopy
//     heroCopy
//   }
//   whoWeWorkWithSection(id:"23OoCfuK3Ce4bHEGNIQyKl") {
//     whoWeWorkWithTitle
//     questionTooltipCopy
//     talentItemCollection {
//       items {
//         jobTitle
//         jobCategory
//       }
//     }
//     clientItemCollection {
//       items {
//         specialty
//         specialtyItem
//       }
//     }
//   }
// }

// query getServicesAndWhyUsSections {
//   servicesSection(id:"2G5RaAyJ2v1W4UnSCUc6JS") {
//     title
//     description
//     serviceItemCollection {
//     	items {
//         title
//         description
//       } 
//     }
//   }
//   whyUsSection(id:"6fK7oD3WsFpA7mR2NUuIo2") {
//     title
//     description
//   }
// }

// query getGivingAndNetworkSections {
//   givingBackSection(id:"4PrlPRYwKIvJZ3qaO20XV8") {
//     leftSideTitle
//     leftSideCopy
//     rightSideTitle
//     rightSideCopy
//     orgsModalCopy
//   }
//   networkSection(id:"2kWtLDVGQz7od4NuNqqoBA") {
//     title
//     description
//     networkAttributeItemCollection {
//       items {
//         title
//         description
//       }
//     }
//   }
// }

// query getAboutAndToolsSection {
//   tools(id:"1YxF0d1v8Pd9xlBP2RbfEn") {
//     title
//     description
//     toolLinkItemCollection {
//       items {
//         title
//         description
//         link
//         linkText
//       }
//     }
//   }
// }




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

  const items = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  const [activeSection, setActiveSection] = useState(null);
  const itemsRef = useRef([]);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleSetInactive = (to) => {
    setActiveSection(to)
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length);
  }, [items]);

  return (
    <Container>
      <Navigation handleSetActive={handleSetActive} handleSetInactive={handleSetInactive} />
      <Button variant="contained" color="primary">CLICK TEST</Button>
      <div css={styles}>
        {items.map((section, index) => {
          return (
            <div
              key={index}
              id={`section${[index]}`}
              style={{ border: '1px solid', height: '700px', }}
              ref={el => itemsRef.current[index] = el}
              css={
                itemsRef.current.length > 0 ? (activeSection === itemsRef.current[index].id ? styles({activeSection, index: itemsRef.current[index].id}) : '') : null
              }
            >
              {`section${[index]}`}
            </div>
          );
        })
        }
      {/* <div id="section0" style={{ border: '1px solid', height: '700px', }} ref={el => { console.log(el.id); return ('i')}}>one</div> */}
      {/* <div id="section0" style={{ border: '1px solid', height: '700px', }} ref={el => itemsRef.current = el.id} className={activeSection === itemsRef.current[0].id ? 'bgChange' : ''}>one</div> */}
        {/* <div id="section0" style={{ border: '1px solid', height: '700px', }} ref={el => itemsRef.current[0] = el} className={activeSection === itemsRef.current[0].id ? 'bgChange' : ''}>one</div>
        <div id="section1" style={{ border: '1px solid', height: '700px', }} ref={el => itemsRef.current[1] = el} className={activeSection === itemsRef.current[1].id ? 'bgChange' : ''}>two</div>
        <div id="section2" style={{ border: '1px solid', height: '700px', }} ref={el => itemsRef.current[2] = el} className={activeSection === itemsRef.current[2].id ? 'bgChange' : ''}>three</div> */}
        {/* <div id="section2" style={{ border: '1px solid', height: '700px', }} ref={el => itemsRef.current[2] = el} className={activeSection === itemsRef.current[2].id ? 'bgChange' : ''}>three</div>
        <div id="section3" style={{ border: '1px solid', height: '700px', }}>four</div>
        <div id="section4" style={{ border: '1px solid', height: '700px', }}>five</div>
        <div id="section5" style={{ border: '1px solid', height: '700px', }}>six</div>
        <div id="section6" style={{ border: '1px solid', height: '700px', }}>seven</div> */}
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