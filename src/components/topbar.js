import React, { Component } from 'react';

export default class Topbar extends Component {
  isLoggedIn() {
    if (this.props.currentUser == null) {
      return false;
    }
    return true;
  }

  render() {
    if(this.isLoggedIn()) {
      return(
        <div className='Topbar'>
          <span className='TopbarName'>{this.props.currentUser.name}</span>
        </div>
      )
    }else {
      return(
        <div className='Topbar'>
          Not Logged In
        </div>
      )
    }
  }
}
