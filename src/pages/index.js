import React from "react"
import { Link } from "gatsby"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import EntireLayout from "../components/new_layout"
import SEO from "../components/seo"
import Button from "../components/button"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Fumi Saito"

    return (
      <EntireLayout/>
    )
  }
}

// class IndexPage extends React.Component {
//   render() {
//     const siteTitle = "Fumi Saito"

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO
//           title="Home"
//           keywords={[`blog`, `gatsby`, `javascript`, `react`]}
//         />

//         <img style={{ margin: 0 }} src="./fumi.jpg" alt="Fumi" id="profile-pic"/>
//         <h1 style={{color: '#D27C95' }}>
//           Hi, I'm Fumi!{" "}
//           <span role="img" aria-label="wave emoji">
//             👋
//           </span>
//         </h1>
//         <h3 style={{color:'#8D6D9E'}}>Pythonista, Data Engineer, Tech/Diversity Advocate</h3>
//         <p>
//         I'm a Canadian born Japanese gal, and I put my heart and soul into everything I do. 
//         I'm cat and food obsessed, jam to lots of music, read non-fiction books, listen to podcasts on tech, 
//         women, psychology and life. Oh did I mention games? I love a good board/video game. 
//         I'm sure I got into coding through my Neopets addiction :-)
//         </p>
//         <p>
//         I mainly use Python, SQL, Google Cloud Platform, and Tableau. 
//         I dabble with some web development thingymabobs (HTML, CSS, JavaScript, Flask, React, etc!) 
//         and other DevOps tools like bash, Kubernetes and Terraform.
//         </p>
//         <Link to="/blog/">
//           <Button marginTop="35px">Go to Blog</Button>
//         </Link>
//         <NavBar></NavBar>
//       </Layout>
//     )
//   }
// }

export default IndexPage
