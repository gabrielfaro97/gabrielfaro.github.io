import React, { Component } from "react"
import "../styles/App.css"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import git from "../assets/git.svg"
import copyright from "../assets/copyright.svg"

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div style={{width: '100%', display: 'flex', marginLeft:'2%', marginRight: '2%', fontSize:'75%' }}>
        <img src={copyright} alt={'copyright-symbol'} style={{marginTop: 7, marginRight: 5, width: 13, height: 13}}/>
          <div style={{ flex: 1, color: "white", marginTop: 7 }}>                            
            Powered by Me Myself
          </div>          

          <img src={git} alt={'github-symbol'} style={{marginLeft: 10, width: 25, height: 25}}/>
          <img src={instagram} alt={'instagram-symbol'} style={{marginLeft: 10, width: 25, height: 25}}/>
          <img src={facebook} alt={'facebook-symbol'} style={{marginLeft: 10, width: 25, height: 25}}/>

        </div>  
      </footer>
    );
  }
}
