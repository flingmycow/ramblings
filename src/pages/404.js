import React from "react"
import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
import EntireLayout from "../components/new_layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <EntireLayout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1> 404! Not Found</h1>
        <img src="https://i.imgur.com/TN9Lp1v.png?1" style={{width: `50%`}}/>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Time to go home</Link>
        <br/>
      </EntireLayout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
