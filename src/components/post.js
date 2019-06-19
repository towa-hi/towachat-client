import React, { Component } from 'react';
export default class Post extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className='Post'>
        <div className='PostAvatarContainer'>
          <img className='PostAvatarImg' src={this.props.postData.user.avatar} alt={this.props.postData.user.name} />
        </div>
        <div className='PostContentContainer'>
          <div className='PostInfoContainer'>
            <span className='PostInfoName'>{this.props.postData.user.name}</span>
            <span className='PostInfoTime'>{this.props.postData.time}</span>
          </div>
          <div className='PostMessageContent'>
            <span className='PostText'>{this.props.postData.postText}</span>
          </div>
        </div>
      </div>
    )
  }
}
