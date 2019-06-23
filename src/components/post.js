import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.postData,
      postText: this.props.postData.postText,
      user: this.props.postData.user,
      time: this.props.postData.time,
    }
  }

  render() {
    return(
      <div className='Post'>
        <div className='PostAvatarContainer'>
          <img className='PostAvatarImg' src={this.state.user.avatar} alt={this.state.user.username} />
        </div>
        <div className='PostContentContainer'>
          <div className='PostInfoContainer'>
            <span className='PostInfoName'>{this.state.user.username}</span>
            <span className='PostInfoTime'>{this.state.time}</span>
          </div>
          <div className='PostMessageContent'>
            <span className='PostText'>{this.state.postText}</span>
          </div>
        </div>
      </div>
    )
  }
}
// <div className='PostAvatarContainer'>
//   <img className='PostAvatarImg' src={this.props.postData.user.avatar} alt={this.props.postData.user.name} />
// </div>
// <div className='PostContentContainer'>
//   <div className='PostInfoContainer'>
//     <span className='PostInfoName'>{this.props.postData.user.name}</span>
//     <span className='PostInfoTime'>{this.props.postData.time}</span>
//   </div>
//   <div className='PostMessageContent'>
//     <span className='PostText'>{this.props.postData.postText}</span>
//   </div>
// </div>
