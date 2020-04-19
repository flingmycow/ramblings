import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import EntireLayout from "../components/new_layout"
import SEO from "../components/seo"
import Button from "../components/button"

class Projects extends React.Component {
  render() {
    return <div id="about_me_wrapper">
    <h2>Page under construction</h2>
    <br/>
    <img src='https://i.imgur.com/GODtl6l.png?1' style={{width: `50%`}}/>
    <p>This page is currently in development. Please come again in the future :)</p>
    <Link to="/">Time to go home</Link>

</div>;
  }
}


class ProjectsPage extends React.Component {
  render() {
    const siteTitle = "Fumi Saito"

    return (
      <div>
        <EntireLayout children={<Projects/>}/>
        <SEO title={siteTitle}/>
      </div>
    )
  }
}


export default ProjectsPage

const CuteText = styled.span`
  color: #e6739f; 
`