import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import EntireLayout from "../components/new_layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ContactMe extends React.Component {
  render() {
    return <div id="contact_me_wrapper"  style={{textAlign: `left`}}>
    <h2>Want to get in touch?</h2>
    <br/>
    <p>Send me an email or tweet!</p>
    <p><CuteText>email: </CuteText>fumikosaito [at] hotmail [dot] com</p>
    <p><CuteText>twitter: </CuteText> @fumiETC</p>
    </div>;
  }
}


class ContactMePage extends React.Component {
  render() {
    const siteTitle = "Fumi Saito"

    return (
      <div>
        <EntireLayout children={<ContactMe/>}/>
        <SEO title={siteTitle}/>
      </div>
    )
  }
}


export default ContactMePage

const CuteText = styled.span`
  color: #e6739f; 
`