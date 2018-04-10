import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Code from 'material-ui/svg-icons/action/code'
import IconButton from 'material-ui/IconButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';

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
          <AppBar 
            title="v0.0.01" 
            titleStyle={{fontSize: 13, fontWeight: 'normal', marginTop: 1}}
            iconElementLeft={<IconButton><Code/></IconButton>}  
            style={{backgroundColor: '#222'}}
          />
          <MenuItem onClick={this.handleClose} primaryText="Preview" leftIcon={<RemoveRedEye />} />
          <MenuItem onClick={this.handleClose} primaryText="Share" leftIcon={<PersonAdd />} />
          <MenuItem onClick={this.handleClose} primaryText="Get links" leftIcon={<ContentLink />} />  
        </Drawer>
      </div>
    );
  }
}  