import React, { Component } from "react";

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
          //zIndex: 11000
        }}
      >
        <div style={{width: '100%', display: 'flex', marginLeft:'2%', marginRight: '2%', fontSize:'75%' }}>
          <a style={{ flex: 1, color: "white" }}>
            All rights goes to Fulaninho de Tal
          </a>

          <a style={{ marginLeft: 10 }} href="url">
            Github
          </a>
          <a style={{ marginLeft: 10  }} href="url">
            Facebook
          </a>
          <a style={{ marginLeft: 10 }} href="url">
            Instagram
          </a>                    
        </div>  
      </footer>
    );
  }
}
