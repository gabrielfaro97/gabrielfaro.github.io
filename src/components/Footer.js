import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          backgroundColor: "#222",
          height: 50,
          width: "100%",
          //zIndex: 11000
        }}
      >
        <div style={{
            display: 'flex',
            flexDirection: 'row',                      
            marginTop: 15
        }}>
            <a style={{marginLeft: 25, color:'white'}}>All rights goes to Fulaninho de Tal</a> 

            <div style={{position:'absolute', right:25}}>
                <a style={{marginLeft:10}} href="url">Github</a>
                <a style={{marginLeft:10}} href="url">Facebook</a>
                <a style={{marginLeft:10}} href="url">Instagram</a>
            </div>
        </div>                    
      </footer>
    );
  }
}
