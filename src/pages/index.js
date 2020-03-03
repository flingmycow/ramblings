import React from "react"
import { Link } from "gatsby"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import EntireLayout from "../components/new_layout"
import SEO from "../components/seo"
import Button from "../components/button"

class AboutMe extends React.Component {
  render() {
    return <div>
      <h1>About Me <span role="img" aria-label="female-blogger">👩‍💻</span></h1>
      
      <p>I'm a Canadian born Japanese gal, and I put my heart and soul into everything I do. I'm cat and food obsessed, jam to lots of music, read a lot of non-fiction books, listen to podcasts on tech, women, psychology and life. Oh did I mention games? I love a good board/video game. I'm sure I got into coding through my Neopets addiction :-)</p>
      <p>
I mainly use Python, SQL, Google Cloud Platform, and Tableau. I dabble with some web development thingymabobs (HTML, CSS, JavaScript, Flask, React, etc!) and other tools like bash, Kubernetes and Docker.</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Duis quam massa, ornare at turpis quis, varius pulvinar lorem.
       Morbi eleifend nisi eget viverra fermentum. Vivamus interdum dui quis orci placerat semper. 
       Morbi lobortis ex sit amet risus cursus pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
       Etiam luctus leo augue, non facilisis nunc aliquam sed. Aliquam erat volutpat. Nam laoreet cursus nunc, id tincidunt justo. 
       Nullam elit magna, finibus at aliquam ut, blandit vel magna. Phasellus ullamcorper urna a leo luctus vestibulum.
        Duis posuere leo ac lectus auctor, convallis aliquam odio gravida.</p>

      <p>Sed porttitor turpis quis est pellentesque, in accumsan risus porta. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Maecenas quis elit sed felis dapibus sodales ut auctor nibh.
         Mauris dapibus diam in ante scelerisque ultrices. Nam tincidunt lorem vel ultricies sodales. 
         Nullam facilisis placerat pulvinar. Nullam in arcu urna. 
         Pellentesque tempus lorem et ligula viverra convallis. 
         Integer id vehicula quam, sit amet dictum urna. Praesent pellentesque hendrerit risus non pharetra.
          In a libero finibus, hendrerit justo quis, consequat nunc. Sed iaculis efficitur nunc sagittis hendrerit. 
          Praesent ligula augue, malesuada quis pretium semper, facilisis non quam. Phasellus ac placerat mi.
           Quisque ac fermentum tellus.</p>
    </div>;
  }
}

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Fumi Saito"

    return (
      <div>
        <EntireLayout children={<AboutMe/>}/>
      </div>
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
