import React, { Component }  from 'react';
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import "./layout.css"


class Footer extends React.Component  {
  render() {
    return <div class="footer">
    <FooterStyle>
    © {new Date().getFullYear()}, Made with 💜 by Fumi
    {` `}
    </FooterStyle>
    </div>
  }
}

class BigSocialMediaLinks extends React.Component {
  render() {
    return <div class="social_media">
            <a class="contact_links" href='mailto:fumikosaito@hotmail.com'>
          <img src="https://img.icons8.com/dusk/64/000000/secured-letter.png" class="icons"/></a>
        <a  class="contact_links" href='https://twitter.com/FumiETC'><img src="https://img.icons8.com/dusk/64/000000/twitter.png" class="icons"/></a>
        <a  class="contact_links"href='https://www.linkedin.com/in/fumikosaito/'><img src="https://img.icons8.com/dusk/64/000000/linkedin.png" class="icons"/></a>
        <a class="contact_links"href='https://github.com/flingmycow'><img src="https://img.icons8.com/dusk/64/000000/github.png" class="icons"/></a>
        <Footer/>
   </div>;
  }
}

class SmallSocialMediaLinks extends React.Component {
  render() {
    return <div class="social_media">
        <a class="contact_links" href='mailto:fumikosaito@hotmail.com'><img src="https://img.icons8.com/material-rounded/24/000000/email.png" class="icons"/></a>
        <a  class="contact_links" href='https://twitter.com/FumiETC'><img src="https://img.icons8.com/material-rounded/24/000000/twitter.png" class="icons"/></a>
        <a  class="contact_links"href='https://www.linkedin.com/in/fumikosaito/'><img src="https://img.icons8.com/material-rounded/24/000000/linkedin.png" class="icons"/></a>
        <a class="contact_links"href='https://github.com/flingmycow'><img src="https://img.icons8.com/material-rounded/24/000000/github.png" class="icons"/></a>
      <Footer/>
  </div>;
  }
}

class Navigation extends React.Component {
  render() {
    return <div id="navbar">
        <Link to="/"><h1 class="logo">FS</h1></Link>
        <div class="contact_links">
        <Link to="/aboutme/">About</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/contact/">Contact</Link>
        </div>
      </div>;
  }
}

class EntireLayout extends React.Component {
  render() {
    return <div id="all_content">
      <Navigation/>
      <div class="main_info">{this.props.children}</div>
      <BigSocialMediaLinks/>
    </div>;
  }
}


const FooterStyle = styled.footer`
text-align: center;
margin: 15px;
font-size: 11px;
`

  // delete later
const Wrapper = styled.div`
min-height: 100vh;
`

const Body = styled.body`
    font-family: font-family: 'Roboto Mono', monospace;
    margin: 0;
    padding: 0;
    background-color: #FCEFEF;
`

const Icons = styled.div`
    height: 35px;
    width: 35px;`

const ProfilePhoto = styled.div`
    padding: 5px;
    height: 150px;
    width: 150px;
    border-radius: 50%;
`

const ImgWrapCSS = styled.div`
  width: 50%;
  margin: auto;
`

const NavBarCSS = styled.div`
  background-color: #F4ACB7;
  padding: 10px;
  height: 100vh;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MainContentCSS = styled.div`
  padding: 5px 100px 10px 35px;
  height: 100vh;
  width: 70vw;
`
  
  export default EntireLayout;
