import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import EntireLayout from "../components/new_layout"
import SEO from "../components/seo"
import Button from "../components/button"

class AboutMe extends React.Component {
  render() {
    return <div id="about_me_wrapper"  style={{textAlign: `left`}}>
    <h2>About Me</h2>
    <br/>
    <p><span role="img" aria-label="maple_leaf">🍁</span> I'm a <CuteText>Canadian born Japanese gal</CuteText> and I put my heart into everything I do</p>
    <p><span role="img" aria-label="woman_technologist">👩‍💻</span> I write <CuteText>Python</CuteText> code to create data pipelines to feed into analytics, models and dashboards.</p>
    <p><span role="img" aria-label="bar_chart">📊</span> I can leverage the cloud (<CuteText>GCP</CuteText>) for various use cases in <CuteText>analytics and infrastructure</CuteText>. I can make a pretty dashboard with useful analysis, some <CuteText>DevOps</CuteText> and I occasionally dabble with web development.</p>
    <p><span role="img" aria-label="lady_tipping">💁</span> <CuteText>Diversity and equality are important to me</CuteText>. I volunteer in roles to make a change to women, people from lower socio-economic backgrounds, people with disabilities and ethnic minorities. Currently, I'm an instructor for Code First: Girls to teach women/non-binary people web development and I am a champion of the BAME network at work.</p>
    <p><span role="img" aria-label="game_die">🎲</span> When I have time I love to play <CuteText>board games and video games</CuteText>. Settlers of Catan is my favourite! </p>
    <p><span role="img" aria-label="cat">🐈</span> I'm a <CuteText>proud cat mom</CuteText> of my kitty Peach. I love cats and I could be the next cat whisperer. </p>
</div>;
  }
}


class AboutMePage extends React.Component {
  render() {
    const siteTitle = "Fumi Saito"

    return (
      <div>
        <EntireLayout children={<AboutMe/>}/>
      </div>
    )
  }
}


export default AboutMePage

const CuteText = styled.span`
  color: #e6739f; 
`