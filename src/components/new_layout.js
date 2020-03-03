import React, { Component }  from 'react';
import styled from "styled-components"
import "./layout.css"


class SocialMediaLinks extends React.Component {
  render() {
    return <div class="social_media">
      <a href='mailto:fumikosaito@hotmail.com'>
          <img src="https://img.icons8.com/dusk/64/000000/secured-letter.png" class="icons"/></a>
        <a href='https://twitter.com/FumiETC'><img src="https://img.icons8.com/dusk/64/000000/twitter.png" class="icons"/></a>
        <a href='https://www.linkedin.com/in/fumikosaito/'><img src="https://img.icons8.com/dusk/64/000000/linkedin.png" class="icons"/></a>
        <a href='https://github.com/flingmycow'><img src="https://img.icons8.com/dusk/64/000000/github.png" class="icons"/></a>
   </div>;
  }
}

class SiteLinks extends React.Component {
  render() {
    return <div class="site_links">
      <a href="#"> About </a>
      <a href="#"> Blog </a>
      <a href="#"> Projects </a>
    </div>;
  }
}

class NavBar extends React.Component {
  render() {
    return <div id="nav_bar">
      <div id="nav_bar_content">
      <div class="img_wrap">
       <img id="fumi_photo" src='https://i.ibb.co/Np2c5G0/d3rkv-Rc-400x400.jpg'/>
      </div>
      <h1>Hi,<br/>I'm Fumi!</h1>
      <p>Data Engineer, Techie, Advocate for All Things Diversity in Tech <span role="img" aria-label="sparkles">✨</span> </p>
      {/* <div class="img_wrap">
      <img class="cute_icon" src="https://78.media.tumblr.com/b0958a5527425cc57eff774869273007/tumblr_inline_mju0hsutUD1roozkr.gif"/>
      </div> */}
      <SiteLinks/>
      <SocialMediaLinks/>
      <p><small>Built with <span role="img" aria-label="heart">💜</span> by Fumi</small></p>
      </div>
    </div>;
  }
}

class EntireLayout extends React.Component {
  render() {
    return (<div class="all_content">
      <NavBar/>
      <div class="main_info">{this.props.children}</div>
    </div>
    );
  }
}

  // delete later
const Wrapper = styled.div`
min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const Body = styled.body`
    font-family:'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #FCEFEF;
`

// const AllContent = styled.div`
//   display: flex;`

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
