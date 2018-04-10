import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Code from 'material-ui/svg-icons/action/code'
import IconButton from 'material-ui/IconButton';

export default class Appbar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render () {
    return (
      <div>
        <AppBar
          title="Title"          
          style={{backgroundColor: '#222'}}
          onLeftIconButtonClick={this.handleToggle}
        />

        <Drawer
          docked={false}
          width={220}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar iconElementLeft={<IconButton><Code/></IconButton>}  style={{backgroundColor: '#222'}}/>
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item grande</MenuItem>   
        </Drawer>
      </div>
    );
  }
}  