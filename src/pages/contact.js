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
    <h2 data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">Want to get in touch?</h2>
    <br/>
    <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="350">
    <p>Send me an email or tweet! </p>
    <p><CuteText>email: </CuteText>fumikosaito [at] hotmail [dot] com</p>
    <p><CuteText>twitter: </CuteText> @fumiETC</p>
    </div>
    </div>;
  }
}


class ContactMePage extends React.Component {
  render() {
    const siteTitle = "Contact Page"

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