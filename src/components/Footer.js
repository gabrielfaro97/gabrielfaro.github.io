import React, { Component } from "react";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import git from "../assets/git.svg"

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          justifyContent: "flex-end",
          alignItems: "center",
          bottom: "0",
          backgroundColor: "#222",
          height: "5%",
          width: "100%",          
        }}
      >
        <div style={{width: '100%', display: 'flex', marginLeft:'2%', marginRight: '2%', fontSize:'75%' }}>
          <span style={{ flex: 1, color: "white", marginTop: 7 }}>
            Powered by Me Myself
          </span>          

          <img src={git} alt={'github'} style={{marginLeft: 10, width: 25, height: 25}}/>
          <img src={instagram} alt={'instagram'} style={{marginLeft: 10, width: 25, height: 25}}/>
          <img src={facebook} alt={'facebook'} style={{marginLeft: 10, width: 25, height: 25}}/>

        </div>  
      </footer>
    );
  }
}
